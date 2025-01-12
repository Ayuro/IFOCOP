// ETAPES PREALABLES :
// 1 - REVENIR SUR LA BASE DE DONNEES "videoclub".
`use videoclub`

// 2 - INSERER LES DOCUMENTS SUIVANTS :
db.films.insertMany([
    {
        title: "The Lord Of The Rings: The Fellowship of the Ring",
        length: 182,
        actors: [
            {
                firstName: "Elijah", // actors.firstName => "Elijah"
                lastName: "Wood"
            },
            {
                firstName: "Orlando",
                lastName: "Bloom"
            }
        ],
        director: {
            firstName: "Peter",
            lastName: " Jackson"
        },
        yearOfRelease: 2000,
    },
    { title: "Titanic" },
    { title: "MadMax" },
    { title: "Matrix" },
]);


// QUESTION 1 : COMMENT TROUVER UN FILM DONT LE NOM CONTIENT 'vache' (EN UTILISANT UNE EXPRESSION REGULIERE) ?
// indice : attention à la casse...

db.films.find({title: {$regex: /.rings/gmi}});

// QUESTION 2 : COMMENT AFFICHER UNIQUEMENT LE PRENOM DES ACTEURS DE CE FILM ?

db.films.find({title: {$regex: /rings/gmi}}, {actors: {firstName: 1}, _id: 0});

    // Ou comme ça
db.films.find({title: {$regex: /rings/gmi}}, {"actors.firstName": 1, _id: 0});

// QUESTION 3 : COMMENT TROUVER LES FILMS DONT UN ACTEUR S'APPELLE 'René' ?

db.films.find({"actors.firstName": /elijah/gmi}, {title: 1, _id: 0})

