// SUPPRESSION DE DOCUMENT(S)

// db.collection.deleteOne(query, options)
// db.collection.deleteMany(query, options)

// IMPORTER LE FICHIER "seas.json"
`mongoimport --db mondial --collection seas --file seas.json`
`use mondial`

// SUPPRESSION DE TOUS LES ENREGISTREMENTS (= TOUS LES DOCUMENTS DANS LA COLLECTION) :
db.collection.deleteMany({})

// IMPORTER A NOUVEAU AVANT DE POURSUIVRE...


// QUESTION 1 : COMMENT SUPPRIMER L'OCEAN ATLANTIQUE ?

db.seas.deleteOne({_id: ObjectId('6697d25d2c48b3d9dda63a10')})

// QUESTION 2 : COMMENT SUPPRIMER LES MERS BORDANT L'OCEAN ATLANTIQUE ?

db.seas.deleteMany({bordering: /sea-Atlantic/})

// QUESTION 3 : QUELLE EST LA MER LA PLUS PROFONDE ?

let highestSea = 0;
let seaName = 0
const allSeas = db.seas.find();
allSeas.forEach((oneSea) => {
    if (oneSea.depth > highestSea) {
        highestSea = oneSea.depth;
        seaName = oneSea.name;
    }
})
console.log("The " + seaName + " with a depth of: " + highestSea + "meters.")

db.seas.find({}, {depth : 1, name: 1, _id: 0}).sort({depth: -1}).limit(1)

// QUESTION 4 : COMMENT AJOUTER L'ETENDUE D'EAU "Océan Atlantique" ?



// QUESTION 5 : COMMENT AJOUTER UN TABLEAU "myArray" A TOUTES LES MERS ?   



// QUESTION 6 : QUELLE EST LA PROFONDEUR CUMULEE DE TOUTES LES MERS ?

db.seas.aggregate([
    {$group: {
        _id: "megaDepth",
        depthSum: {$sum: "$depth"}
    }}
])
