// QUESTION 1 : RETROUVER LES 5 PREMIERES PISCINES PAR ORDRE ALPHABETIQUE (ET DONT LE CHAMP "zipCode" existe) :

db.piscines.find({zipCode: {$exists: true}}).sort({name: 1}).limit(5);

// QUESTION 2 : AJOUTER DEUX PISCINES AVEC UN CHAMP NOM AU LIEU DE NAME :

db.piscines.insertMany(
    [
        {
            nom: "Duchamp",
            address: "35, rue Au fond à droite",
            ZipCode: 75021
        },
        {
            nom: "Oulagadou",
            address: "35, rue au fond à gauche",
            ZipCode: 75021
        }
    ]
)

// QUESTION 3 : IL DOIT DONC Y AVOIR 33 PISCINES AU TOTAL :

db.piscines.countDocuments()

// QUESTION 4 : COMPTER UNIQUEMENT LES PISCINES DONT LE CHAMP "name" EST PRESENT :

db.piscines.countDocuments({name: {$exists: true}})

// QUESTION 5 : AFFICHER TOUTES LES PISCINES AYANT UN CHAMP "name" :

db.piscines.find({name: {$exists: true}})

// QUESTION 5-a : LIMITER LES RESULTATS A 5 ENTREES :

db.piscines.find({name: {$exists: true}}).limit(5)

// QUESTION 5-b : ET EN LIMITANT L'AFFICHAGE AU CHAMP "name" :

db.piscines.find({name: {$exists: true}}, {name: 1, _id: 0}).limit(5)

// QUESTION 5-c : ENFIN EN TRIANT PAR ODRE ALPHABETIQUE :

db.piscines.find({name: {$exists: true}}, {name: 1, _id: 0}).limit(5).sort({name:1})