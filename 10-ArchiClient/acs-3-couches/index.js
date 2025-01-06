// Express
const express = require("express");
const app = express();

require("dotenv").config();
// console.log("PORT .env: " + ProcessingInstruction.env.port);

// On définit pug comme notre moteur de rendu
app.set("view engine", "pug");
//On peut définir un dossier pour contenir les templates pug
// app.set("views", "./views")
// views étant la valeur par défaut, on peut s'en passer

// On définit notre ddossier de ressources statiques
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Connexion MongoDB
const MongoClient = require("mongodb").MongoClient;
const connectionString = process.env.MONGODB_CONNECTION_STRING;
const client = new MongoClient(connectionString); 
const dbName = process.env.mongodb_dbname;

// Définir nos trois routes
// / => Accueil
app.get("/", (req, res) => {
    console.log("Page index");
    res.render("index");
});
// Liste
app.get("/liste", async (req, res) => {
    console.log("page liste");

    // Connexion + requete
    try{
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("festivals");

        const result = await collection.find(
            {})
            .project({
                "properties.nom_du_festival": 1,
                "properties.departement_principal_de_deroulement": 1,
                "properties.periode_principale_de_deroulement_du_festival": 1,
                "properties.site_internet_du_festival": 1,
            })
            .toArray();
        // Rendu du template on passe le résultat de la requête dans la variable festivals
        res.render("liste", {festivals: result});
    } catch (error) {
        console.log(error);
    } finally {
        client.close();
    }
})
// Carte
app.get("/carte", async (req, res) => {
    console.log("Page carte");
  
    // Connexion + requete
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection("festivals");
  
      const result = await collection
        .find({"geometry.coordinates": { $exists: true} })
        .project({
            geometry: 1,
          "properties.nom_du_festival": 1,
          "properties.departement_principal_de_deroulement": 1,
          "properties.periode_principale_de_deroulement_du_festival": 1,
          "properties.site_internet_du_festival": 1,
        })
        .limit(10)
        .toArray();
        
        //console.log(result);
        // Rendu du template liste  en passe le résultat de la requête dans la variable festivals
        res.render("carte", { festivals: result });
        } catch (error) {
            console.log(error);
        } finally {
            //client.close();
        }
    });
// Démarrer le serveur
app.listen(process.env.port, () => {
    console.log(`Application démarrée sur le port ${process.env.port}`
    );
});