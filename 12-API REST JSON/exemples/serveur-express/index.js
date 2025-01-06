import express from "express"; // Installé avec "npm i express"
import { join } from "path"; // Fait partie de Node.js, pas besoin de l’installer avec npm
import nodePath from "node:path"; // Permet de manipuler les chemins de fichiers
import { fileURLToPath } from "node:url"; // Permet de convertir une URL en chemin de fichier
import bodyParser from "body-parser"; // Permet de parser le corps des requêtes HTTP
import cors from "cors"; // Permet de paramétrer les en-têtes CORS
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import compression from "compression";
import { MongoClient } from "mongodb"; // https://www.mongodb.com/docs/drivers/node/current/
import { apiStatus } from "./api-status.js";

// Connexion à la base de données
const dbName = "newyork";
const connectionString = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectionString);

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);

// Port sur lequel le serveur écoute
const port = 8080;

// Clé secrète utilisée pour chiffrer les JWT (connue uniquement du serveur)
const jwtSecret = "db7e49706fdfe014df83a3260bb6c921";

// Création de l’application Express
const app = express();

// Pas nécessaire pour un serveur uniquement d’API JSON, mais nous servons une
// page d'accueil
// Utiliser Pug comme moteur de rendu
app.set("view engine", "pug");

// Dossier des fichiers "statiques", qui seront servis automatiquement en fonction de leur type.
app.use(express.static(join(__dirname, "/public")));

// Compression des réponses HTTP
app.use(compression());

// Met en forme le code source (HTML) généré
app.locals.pretty = true;

// http://expressjs.com/en/api.html#req.body
// pour parser du JSON dans le corps de la requête
app.use(bodyParser.json());
// Note : pour parser application/x-www-form-urlencoded dans le corps de la requête :
// app.use(bodyParser.urlencoded({ extended: true }));

// Ajoute Access-Control-Allow-Origin: * à toutes les en-têtes de réponse HTTP
app.use(cors());

// Page d’accueil (HTML)
app.get("/", (req, res) => {
  /**
   * On retourne un document HTML compilé par pug à partir d’un template
   * http://expressjs.com/en/api.html#res.render
   */
  res.render("index", {
    apiStatus,
    port,
  });
});

/**
 * Routes de l’API
 */

// Route de test pour vérifier que l’API est en ligne
app.get("/api-test", (request, response) => {
  response.json(apiStatus);
});

/**
 * Création de compte utilisateur
 *
 * - On enregistre le nom d’utilisateur, l’adresse e-mail et le mot de passe
 * chiffré dans la base de données.
 * - On renvoie un jeton JWT (JSON Web Token) qui contient le nom et l'adresse
 * e-mail de l’utilisateur.
 */
app.post("/create-user", async (request, response, next) => {
  const { userName, email, password } = request.body;

  if (userName.trim() === "" || email.trim() === "" || password.length < 6) {
    next({ status: 400, message: "Invalid request parameters" });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("users");
    const result = await collection.insertOne({
      userName,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        userName,
        email,
      },
      jwtSecret
    );

    response.json({
      token,
    });
  } catch (error) {
    console.log(error);
    next({ status: 500, message: "Internal Server Error" });
  } finally {
    console.log("Closing connection.");
    client.close();
  }
});

/**
 * Vérification d'un utilisateur
 *
 * - Création d’un jeton JWT si on a reçu un nom d’utilisateur et un mot de
 * passe valides.
 */
app.post("/login", async (request, response, next) => {
  const { email, password } = request.body;

  if (email.trim() === "" || password.trim() === "") {
    next({ status: 400, message: "Invalid request parameters" });
    return;
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("users");

    const user = await collection.findOne(
      {
        email,
      },
      {
        projection: {
          _id: 0,
          password: 1,
          userName: 1,
          email: 1,
        },
      }
    );

    if (!user) {
      next({ status: 401, message: "Invalid user" });
      return;
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      next({ status: 401, message: "Unauthorized" });
      return;
    }

    const token = jwt.sign(
      {
        userName: user.userName,
        email: user.email,
      },
      jwtSecret
    );

    response.json({
      userName: user.userName,
      email: user.email,
      token,
    });
  } catch (error) {
    console.log(error);
    next({ status: 500, message: "Internal Server Error" });
  } finally {
    console.log("Closing connection.");
    client.close();
  }
});

/**
 * Middleware pour vérifier le jeton JWT.
 * Toute requête qui commence par /api/* doit contenir un jeton JWT valide.
 * Si le jeton est valide, on ajoute une propriété `token` sur la requête et on
 * appelle `next()` pour passer au middleware suivant.
 */
app.use("/api/*", (request, response, next) => {
  // Récupération du jeton JWT dans l’en-tête Authorization
  const authorizationHeader = request.get("Authorization");
  let token = null;
  if (authorizationHeader) {
    token = authorizationHeader.trim().split(" ").pop();
  }

  // Si le jeton n’est pas fourni, on rejette la requête
  if (!token) {
    return response.status(401).send("Unauthorized");
  }

  // Vérification du jeton JWT
  jwt.verify(token, jwtSecret, (error, decodedToken) => {
    // Si la vérification échoue, on rejette la requête
    if (error) {
      return response.status(401).send("Unauthorized");
    }

    // Si la vérification réussit, on ajoute le jeton et les données décodées
    // dans la requête.
    request.token = {
      token,
      decodedToken,
    };

    // On appelle next() pour passer au middleware suivant.
    next();
  });
});

/**
 * Route de test, accessible uniquement si le middleware /api/* a vérifié
 * le jeton JWT.
 */
app.get("/api/check-token", (request, response) => {
  return response.json({
    token: request.token,
  });
});

/**
 * Recherche des quartiers (borough) de New York
 */
app.get("/api/boroughs", async (req, res, next) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("restaurants");

    // On récupère la liste des quartiers sans doublons
    // https://docs.mongodb.com/manual/reference/method/cursor.distinct/
    const result = await collection.distinct("borough");
    res.json(result);
  } catch (error) {
    console.log(error);
    next({ status: 500, message: "Internal Server Error" });
  } finally {
    console.log("Closing connection.");
    client.close();
  }
});

// Liste de restaurants
app.get("/api/restaurants", async (req, res, next) => {
  const skip = parseInt(req.query.offset) || 0;
  const limit = parseInt(req.query.limit) || 10;
  console.log("/api/restaurants skip, limit", skip, limit);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("restaurants");
    const project = {
      name: 1,
      restaurant_id: 1,
      cuisine: 1,
      borough: 1,
      _id: 1,
    };
    const sort = { name: 1 };

    const total = await collection.countDocuments();
    console.log("total", total);
    const results = await collection
      .find()
      .project(project)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .toArray();

    res.json({
      results,
      total,
    });
  } catch (error) {
    console.log(error);
    next({ status: 500, message: "Internal Server Error" });
  } finally {
    console.log("Closing connection.");
    client.close();
  }
});

// Recherche de restaurants par nom
app.get("/api/restaurants/suggest", async (req, res, next) => {
  const searchTerm = req.query.q || "";

  if (!searchTerm) {
    next({ status: 400, message: "Bad Request" });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("restaurants");

    const project = { name: 1, restaurant_id: 1, cuisine: 1, _id: 1 };
    const sort = { name: 1 };
    const regex = new RegExp(`^${searchTerm}`, "i");

    const result = await collection
      .find({ name: regex })
      .project(project)
      .sort(sort)
      .toArray();

    // NOTE : cette route ne retourne pas de 404.
    // Si aucun résultat n’est trouvé, alors elle retourne un tableau vide.
    res.json(result);
  } catch (error) {
    console.log(error);
    next({ status: 500, message: "Internal Server Error" });
  } finally {
    console.log("Closing connection.");
    client.close();
  }
});

// Recherche de restaurant par ID
app.get("/api/restaurants/:id", async (req, res, next) => {
  const restaurantId = req.params.id;

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("restaurants");

    const result = await collection.findOne({
      restaurant_id: {
        $eq: restaurantId,
      },
    });

    if (!result) {
      next({ status: 404, message: "Not Found" });
    }

    res.json(result);
  } catch (error) {
    console.log(error);
    next({ status: 500, message: "Internal Server Error" });
  } finally {
    console.log("Closing connection.");
    client.close();
  }
});

// Gestion d’erreurs (4 paramètres)
app.use((error, request, response, next) => {
  return response
    .status(error.status || 500)
    .send(error.message || "Internal Server Error");
});

// Gestion des routes non trouvées
app.use((request, response, next) => {
  return response.status(404).send("Not Found");
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server démarré sur http://localhost:${port}/`);
});
