// Afficher la liste des bdds
`show dbs`
`show databases`

// Comment sélectionner une base de données à utiliser ?
`use myFirstDB`

// UNe bdd de mongo est constituée de collections.
// Les collections contiennent des documents;

// Comment afficher la liste des collections contenues dans la base de données sélectionnée ?
`show collections`


// Quand on tape "use xxxxxxx" dans le terminal, cela nous instancie un objet "db" représentant la base de données sélectionnée.
// Cela nous permet par la suite de taper la commande suivante dans le terminal afin d'accéder à une collection donnée :
`db.<collection>.<method>`

/* Sur une base de données, il y a 4 types d'opération : les opérations CRUD

C reate     : pour insérer des documents            - méthode insert()
R ead       : pour lire des documents               - méthode find()
U pdate     : pour mettre à jour des documents      - méthode update()      
D elete     : pour supprimer des documents          - méthode delete()
*/

// Pour insérer un document dans la collection films de la bdd videoclub, on utilise la méthode .insert() sur la collection dans laquelle on souhaite insérer un document :



// Pour trouver tous les films, on utilise la méthode .find() sur la collection contenant les films :



// Pour faire des insertions multiples, on passe un tableau d'objets à notre méthode insert() au lieu d'un simple objet :



// Le client mongo est une console js. Par conséquent, on peut tout à fait utiliser des variables comme valeurs pour une insertion :

let madate = new Date();
// et après on peut l'utiliser

// On a une méthode qui présente correctment un document dans une collection :

db.character.findOne()


// Une notion importante de MongoDB est celle de sous-document embarqué (embedded document) :

db.character.insertOne (
    {
        prenom: "Mo",
        nom: "Iz",
        classe: {
            spec: "Wizard",
            element: "water"
        }
    }
)


// La commande cls (clear screen) permet de vider la console

db.character.insertOne (
    {
        prenom: "Angu",
        nom: "Lar",
    }
)