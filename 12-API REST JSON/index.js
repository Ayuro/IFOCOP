import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import compression from "compression"

const dbName = "newyork";
const connectionString = "mongodb://localhost:27017";
const client = new MongoClient(connectionString);

// Secret pour JSON Web Token
const JWTSecret = "fhjlkhkhjk3424HJ342J4H342KHK3";

const port = 1986;
const app = express();
app.use(bodyParser.json());

// Configuration de la politique de CORS par défaut : *.*
app.use(cors());

// app.use(compression());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api-test", (req, res) => {
  res.json({
    status: "OK",
  });
});

app.post("/create-user", async (req, res, next) => {
  const { userName, email, password } = req.body;
  // const userName = req.body.userName;
  // const email = req.body.email;
  // const password = req.body.password;

  console.log(userName, email, password);

  if (userName.trim() === "" || email.trim() === "" || password.length < 6) {
     next({ code: 400, message: "Données invalides" });
     return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("users");
    // TODO: Vérifier que l'email n'est pas déjà utilisé.
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
      JWTSecret
    );

    res.json({token});
  } catch (err) {
    next({ message: "Impossible de créer le compte" });
  } finally {
    await client.close();
  }
});

app.use("/api/*", async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    next({code: 400, message: "En-tête d'authetification manquant"});
    return;
  }

  const token = authHeader.trim().split(" ").pop();

  jwt.verify(token, JWTSecret, async(error, decodedToken) => {
    if (error) {
      next({code: 401});
      return;
    }

    console.log("decodedToken", decodedToken);

    req.token = {
      original:token,
      decodedToken
    }

    next();
  });
});

app.get("/api/boroughs", async (req, res, next) => {

  try {
    await client.connect();
    // throw new Error("Boom");
    const db = client.db(dbName);
    const collection = db.collection("restaurants");

    const result = await collection.distinct("borough");
    res.json(result);
  } catch (err) {
    console.error(err);
    // res.send('Plouf');
    // res.status(500).send("Plouf");
    next({ message: "Erreur volontaire pour teste la gestion des erreurs" });
  } finally {
    await client.close();
  }
});

app.get("/api/restaurants", async (req, res, next) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("restaurants");
        
        const result2 = await collection.find().project({name: 1, cuisine: 1, rate: 1, borough: 1, _id: 0}).limit(3).toArray();
        res.json(result2);
    } catch (err) {
        console.error(err);
        next({ message: "On est pas prêt chef"});
    } finally {
        await client.close();
    }
});

app.use((error, req, res, next) => {
  return res
    .status(error.code || 500)
    .send(error.message || "Internal Server Error");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
