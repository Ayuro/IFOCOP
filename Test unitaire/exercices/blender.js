// Ecrire les tests unitaires du blender :
var blender = {
    mixerDesNombres: function (a, b, c) {
        if ("number" === typeof a && "number" === typeof b && "number" === typeof c) {
            var d = (a * b) + c;
            console.log(d);
            return d;
        } else {
            console.log("Les types de données fournis sont incorrects !");
        };
    },
    mixerDesChaines: function (i, j) {
        if ("string" === typeof i && "string" === typeof j) {
            var k = "Bonjour " + i + j + "!";
            console.log(k);
            return k;
        } else {
            console.log("Les types de données fournis sont incorrects !");
        };
    },
    mixerDesBooleens: function (x, y, z) {
        if ("boolean" === typeof x && "boolean" === typeof y && "boolean" === typeof z) {
            var message = "";
            if (x && y && z) {
                message = "Tout est vrai !";
            } else {
                message = "Au moins un argument n'est pas vrai !";
            };
            console.log(message);
            return message;
        } else {
            console.log("Les types de données fournis sont incorrects !");
        };
    },
    mixerDesTableaux: function (g, z) {
        if ("object" === typeof g && "object" === typeof z) {
            var t = g[2] + z[1];
            var u = g[1] + z[2];
            var v = t * u;
            console.log("Si ceci : " + v + " est un nombre vous avez réussi !");
            return v;
        } else {
            console.log("Les types de données fournis sont incorrects !");
        };
    },
    mixerDesObjets: function (o, t) {
        if ("object" === typeof o && "object" === typeof t) {
            var p = (o.a * o.b) / (t.x * t.y);
            console.log("Si ceci : " + p + " est un nombre vous avez réussi !");
            return p;
        } else {
            console.log("Les types de données fournis sont incorrects !");
        };
    },
    mixerDesFonctions: function (z, w) {
        if ("function" === typeof z && "function" === typeof w) {
            z();
            w();
            console.log("Bravo ! Les types de données fournis sont corrects .");
        } else {
            console.log("Les types de données fournis sont incorrects !");
        };
    },
    mixerDeTout: function (k, l, m, n) {
        if ("string" === typeof k && "object" === typeof l && "function" === typeof m && "number" === typeof n) {
            console.log("Voici un message : " + k);
            console.log("Voici un message trouvé dans un objet : " + l.message);
            m();
            console.log("Mais ceci est un nombre : " + n);
            return n;
        } else {
            console.log("Les types de données fournis sont incorrects !");
        };
    }
};

module.exports.blender = blender;