// Mise à jour -> update

// REVENIR SUR LA BASE DE DONNEES "newyork"
`use newyork`

// QUESTION 1 : COMMENT MODIFIER LES RESTAURANTS DONT LA CUISINE EST "hamburger" POUR LEUR AJOUTER UN CHAMP "healthy_food" ayant pour valeur 2 ?

db.restaurants.updateMany(
    {cuisine: "Hamburgers"},
    {$set: {healthy_food: 2}}
)

// QUESTION 2 : COMMENT DEFINIR LE CHAMP "healthy_food" A 9 POUR LES RESTAURANTS VEGETARIENS (vegetarian) ?

db.restaurants.updateMany({cuisine: /Vegetarian/i}, {$set: {healthy_food:9}})

// QUESTION 3 : COMMENT VERIFIER QUE TOUS LES RESTAURANTS ONT BIEN UN TABLEAU "grades" ?

db.restaurants.countDocuments({grades: {$exists: true}}) //Est-ce que ça existe?
// Mais on a mieux, pour savoir si c'est des tableau et qu'il existe. On utilise des Bson type
db.restaurants.countDocuments({grades: {$type: 4}})

// QUESTION 4: COMMENT SUPPRIMER LE CHAMP "building" DES RESTAURANTS SITUES DANS LE "Bronx" ET AJOUTER UN BOOLEEN A true ?

db.restaurants.updateMany(
    {borough: "Bronx"},
    {$set: {tried: true}, $unset: {"address.building": "trololo"}},
)


// VERIFIER QUE LE CHAMP "building" N'EST PLUS PRESENT ET QUE VOTRE BOOLEEN EST BIEN PRESENT ET A true...

db.restaurants.findOne({borough: "Bronx"})
// c'est bon

// QUESTION 5 : COMMENT AJOUTER UN CHAMP "rating" A 5 POUR TOUS LES RESTAURANTS ?

db.restaurants.updateMany({}, {$set: {rate: 5}})

// QUESTION 6 : COMMENT MULTIPLIER LE CHAMP "rating" PAR 2 POUR LES RESTAURANTS SITUES DANS LE "Queens" ?

db.restaurants.updateMany({borough: "Queens"}, {$mul: {rate: 2}})

// QUESTION 7 : COMMENT TROUVER TOUS LES RESTAURANTS DE "Brooklyn" ?

db.restaurants.find({borough: /brooklyn/i})

// QUESTION 7-a : COMMENT LIMITER LES RESULTATS A 100 ENTREES ?

db.restaurants.find({borough: /brooklyn/i}).limit(100)

// QUESTION 7-b : COMMENT APPLIQUER UN count() ?

db.restaurants.find({borough: /brooklyn/i}).count()

// QUESTION 7-c : COMMENT APPLIQUER UN size() ?

db.restaurants.find({borough: /brooklyn/i}).size()

// QUestion 7-d : QUELLE EST LA DIFFERENCE ENTRE .count() ET .size() ?

// Normalement size() tient compte de la limite
// count() ne tient pas compte de la limite

// QUESTION 8 : COMMENT AJOUTER UNE ENTREE AU TABLEAU "grades" POUR LE RESTAURANT "Tu-Lu'S Gluten-Free Bakery" ?

db.restaurants.updateOne({name: /tu-Lu/i}, {$push: {grades: {date: new Date, grade: 'C', score: 10}}})

// VERIFIER QUE L'AJOUT A ETE REUSSI...
    

// QUESTION 9 : COMMENT MODIFIER LE CHAMP "rating" POUR TOUS LES DOCUMENTS POUR QU'IL SOIT EGAL A LA MOYENNE ARITHMETIQUE DES GRADES ?
// indice : créer un curseur et le manipuler avec une boucle forEach.

const allRestaurants = db.restaurants.find();
allRestaurants.forEach((oneRestaurant) => {
    let moyenne = 0;
    oneRestaurant.grades.forEach((oneGrades) => {
        moyenne += oneGrades.score;
    })
    moyenne /= oneRestaurant.grades.length;
    db.restaurants.updateOne({_id: oneRestaurant._id}, {$set: {rate: moyenne}})
})

// VERIFIER...

// QUESTION 10 : QUEL EST LE RESTAURANT QUI A LA MEILLEURE MOYENNE ?

db.restaurants.find({}, {_id: 0, name: 1, rate: 1}).sort({rate:-1}).limit(1)