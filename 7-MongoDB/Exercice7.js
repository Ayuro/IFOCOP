// EXERCICES CONCERNANT LA MISE A JOUR D'UN DOCUMENT

// POINT DE COURS : db.collection.updateOne(query, update, options)
// POINT DE COURS : db.collection.updateMany(query, update, options)

// REVENIR SUR LA BASE DE DONNEES "paris"
`use paris`


// QUESTION 1 : COMMENT AJOUTER UN CHAMP "acces_handicape" ayant pour valeur "true" AUX PISCINES DU 13ème ARRONDISSEMENT ?

db.piscines.updateMany(
    {zipCode: 75013},
    {$set: {acces_handicape: true}}
);

// QUESTION 2 : COMMENT S'ASSURER QU'UN DOCUMENT SERA INSERE S'IL N'EXISTE PAS DEJA, EN UTILISANT L'OPTION "upsert" (contraction de "update" et "insert") à "true" ?

db.piscines.updateMany(
    {zipCode: 75013},
    {$set: {acces_handicape: true}},
    {upsert: true}
)

// POINT DE COURS : il est possible de définir et supprimer des champs dans la même requête...
// QUESTION 3 : COMMENT AJOUTER UN CHAMP "verif" A TOUTES LES PISCINES ET SUPPRIMER L'"acces_handicape" ?

db.piscines.updateMany(
    {},
    {
        $set: {verif: true}, $unset: {acces_handicape: true}
    }
)

// QUESTION 3-a : VERIFIER LE RESULTAT DE L'OPERATION :

db.piscines.find({zipCode: 75013}) //les acces sont retiré des 13 et modifier sur les 33

//voilà ce que est annoncé à la fin de la commande update:

// {
//     acknowledged: true,
//     insertedId: null,
//     matchedCount: 33,
//     modifiedCount: 33,
//     upsertedCount: 0
//   }
