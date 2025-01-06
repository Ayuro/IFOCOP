/* LES RESTAURANTS DE NEW YORK */

// Créer une base de données newyork et une collection restaurants
// Importer le fichier restaurant.json
// sur PC : Se mettre dans le dossier où il se trouve l'executable mongoimport

`mongoimport --db newyork --collection restaurants --file "C:\Users\virtuoworks\Desktop\Mongo\Données\restaurants.json"`

// SE PLACER DANS LA BASE DE DONNEES 'newyork' :
`use newyork`

// QUESTION 1 : COMBIEN Y A-T-IL DE RESTAURANTS DANS LA COLLECTION ?

db.restaurants.count()
    // mais préférer celui-ci
db.restaurants.countDocuments()

// QUESTION 2 : COMMENT TROUVER LES RESTAURANTS QUI SONT SITUES DANS LA RUE "Morris Park Ave" :

db.restaurants.find({"address.street": "Morris Park Ave"})

// QUESTION 2-a : AVEC EN PLUS CEUX QUI SE SITUENT DANS LA RUE "Morris Park Avenue" ?
// Attention ici, bien que l'on souhaite obtenir les restaurants dont l'adresse est Morris Park Avenue
// AINSI QUE ceux dont l'adresse est Morris Park Ave, c'est bien l'opérateur $or qu'il faut utiliser,
// et non pas $and...

db.restaurants.find({$or: [{"address.street": "Morris Park Avenue"}, {"address.stret": "Morris Park Ave"}]})

// QUESTION 2-b : COMMENT RETROUVER CES DEUX RESULTATS EN UTILISANT SIMPLEMENT UNE REGEXP (ET EVENTUELLEMENT LES ORTHOGRAPHES ALTERNATIVES EN MINUSCULES VIA LE FLAG "i" (insensitive)) ?

db.restaurants.find({"address.street": /Morris Park Ave/gmi})

// QUESTION 3 : COMMENT AFFICHER UNIQUEMENT (SANS "_id") LES CHAMPS "borough", "cuisine" et "address" ?

db.restaurants.find({"address.street": /Morris Park Ave/gmi}, {_id: 0, borough: 1, cuisine: 1, address: 1})

// QUESTION 4 : COMMENT TROUVER LA LISTE DES RESTAURANTS SITUES A "Staten Island" ET QUI FONT DES "hamburgers" OU de la "bakery" ?
// QUESTION 4-a : AVEC L'OPERATEUR $or :

db.restaurants.find({$or: [{"cuisine": "Hamburgers"}, {"cuisine": "Bakery"}],$and: [{"borough": "Staten Island"}]}, {_id: 0, borough: 1, cuisine: 1})

// QUESTION 4-b : AVEC UN $and IMPLICITE :

db.restaurants.find({$or: [{"cuisine": "Hamburgers"}, {"cuisine": "Bakery"}], borough: "Staten Island"}, {_id: 0, borough: 1, cuisine: 1})

// QUESTION 4-c : AVEC L'OPERATEUR $in :

db.restaurants.find({borough: {$in: ["Staten Island"]}, cuisine: {$in: ["Hamburgers", "Bakery"]}}, {_id: 0, borough: 1, cuisine: 1})

// QUESTION 5 : COMMENT PARCOURIR UN CURSEUR VIA UNE BOUCLE while ?
// On peut ici utiliser la méthode javascript hasNext() qui permet de déterminer si le cursor contient
// encore des documents ou non : https://docs.mongodb.com/manual/reference/method/cursor.hasNext/

while(db.restaurants.find().hasNext()) {"et on print un truc"};

    // sinon on peut faire comme ça:

const variableCursor = db.restaurants.find().limit(50) //on met une limite parce que sinon ça fait beauceaup
while (variableCursor.hasNext()) {
    printjson(variableCursor.next());
}
// QUESTION 6 : COMMENT PARCOURIR UN CURSEUR VIA UNE BOUCLE forEach ?

db.restaurants.find().forEach(hasNext => {console.log("Hello")});

    // On peut faire ça comme ça aussi:

const variableCursor2 = db.restaurants.find().limit(50)

variableCursor2.forEach(oneRestaurant => {
    print(oneRestaurant.name);
})
// QUESTION 7 : QUEL EST LE TYPE DE RESTAURANT LE PLUS REPRESENTE ?
// Vous pouvez le faire en vanillaJS

let cuisines = [];
const variableCursor3 = db.restaurants.find()
variableCursor3.forEach((oneRestaurant) => {
    if(cuisines.indexOf(oneRestaurant.cuisine) == -1){
        cuisines.push(oneRestaurant.cuisine)
    }
});

let nbRestaurants = 0;
let cuisineMax = "";

cuisines.forEach((oneCuisine) => {
    if(db.restaurants.countDocuments({cuisine: oneCuisine}) > nbRestaurants){
        nbRestaurants = db.restaurants.countDocuments({cuisine: oneCuisine});
        cuisineMax = oneCuisine;
    }
});

print(cuisineMax + "- " + nbRestaurants);

// Heureusement il y a dans mongo une solution native, les pipeline d'agrégation:

db.restaurants.aggregate([ 
    {$match: {}}, // Première étape, selection de la zone de travail
    {$group: {_id: "$cuisine", nbResto: {$sum: 1}}}, //Seconde étape, on regroupe dans une collection temporaire nos documents en fonction de leur cuisine et on ajoute un champ nbResto qui contient le nombre de resto de même cuisine trouvé
    {$sort: {nbResto: -1}}, // troisième étape, on trie par nbResto décroissant
    {$limit: 1} // Quatrième étape, on limite à 1 résutlat
]);