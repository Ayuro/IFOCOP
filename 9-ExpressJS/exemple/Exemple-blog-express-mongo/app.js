'use strict'

// Le fichier app.js représente le fichier principal de l'application. C'est ce fichier qui sera exécuté par node afin de démarrer l'application. A cet effet, dès qu'une page, un middleware ou autre est ajouté au site, il doit faire l'objet d'un import dans ce fichier afin de pouvoir être servi par le serveur...

import 'dotenv/config';
import cors from 'cors';
// import chalk from 'chalk';
import bcrypt from 'bcrypt';
import helmet from 'helmet';
import express from 'express';
import nodePath from 'node:path';
import { v4 as uuid } from 'uuid';
import favicon from 'express-favicon';
import { fileURLToPath } from 'node:url';
import expressSession from 'express-session';
// import sessionFileStore from 'session-file-store';
import ConnectMongoSession from 'connect-mongodb-session';


// Middlewares
import { CONSTANTS } from './src/constants/index.js';
import { findOne } from './src/db/findOne.js';
import { find } from './src/db/find.js';
import { updateOne } from './src/db/updateOne.js';
import { insertOne } from './src/db/insertOne.js';
import { comparePasswords } from './src/helpers/comparePasswords.js';
import { createAuthToken } from './src/helpers/createAuthToken.js';
import { isAuthenticated } from './src/middlewares/isAuthenticated/index.js';
import { adminAuthentication } from './src/middlewares/adminAuthentication/index.js';


const app = express();
const PORT = String(process.env.PORT);
const HOST = String(process.env.HOST);
const _filename = fileURLToPath(import.meta.url);
const _dirname = nodePath.dirname(_filename);
const MongoDBStore = ConnectMongoSession(expressSession);

const store = new MongoDBStore({
  uri: String(process.env.MONGOURL),
  databaseName: String(process.env.DBNAME),
  collection: 'sessions'
});

// Catch errors
store.on('error', function(error) {
  console.log(error);
});


// On crée un emplacement de stockage pour nos sessions via session-file-store
// const FileStore = sessionFileStore(expressSession);
// const fileStoreOptions = {
//   fileExtension: 'json',
//   ttl: 3600,
//   path: './sessions'
// };

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(favicon(nodePath.join(_dirname, 'public', 'favicon.ico')));
app.use('/style', express.static(nodePath.join(_dirname, 'public', 'styles')));
app.use('/script', express.static(nodePath.join(_dirname, 'public', 'scripts')));
app.use(expressSession(
  {
    // store: new FileStore(fileStoreOptions),
    store: store,
    secret: CONSTANTS.SESSIONSECRET,
    saveUninitialized: false,
    resave: false,
    rolling: true,
    cookie: {
      maxAge: 600000,
      // secure: true // Cette option est recommandée mais nécessite un site web autorisant le HTTPS, ce qui n'est pas notre cas...
    }
  }
));

// Ces deux méthodes sont nécessaires afin de permettre à Express de savoir quel générateur de template utiliser et où trouver le dossier des vues (views)
app.set('view engine', 'pug');
app.set('views', 'views/pages');


// EXERCICE 5 : Utiliser les informations suivantes pour créer un routage spécifique à l'administrateur, qui devra permettre l'affichage du tableau de bord d'administration et la gestion de la suppression des utilisateurs...
const adminRouter = express.Router();

app.use('/admin', adminRouter);

adminRouter.get('/', adminAuthentication, async (req, res, next) => {
  const users = [] ?? CONSTANTS.NOUSER;
  let usersList = [];
  const userLoggedIn = req?.session?.user?.userLoggedIn;

  try {
    usersList = await find(String(process.env.DBNAME), 'users', {}, { projection: { _id: 0 } });
  } catch (error) {
    return next(error);
  }

  if (usersList) {
    usersList.forEach(user => {
      users.push(`${user.firstname} ${user.lastname}`);
    })
  }

  return res.render('admin', {
    title: CONSTANTS.ADMIN,
    users,
    userLoggedIn
  }, (err, html) => {
    if (err) {
      return next(err.message);
    }

    if (html) {
      return res.send(html);
    }

  })
});

// Ecrire ici la route permettant la suppression d'un utilisateur...



// EXERCICE 6 : Créer un middleware qui utilisera une fonction (qui fait ce que vous voulez) que vous aurez au préalable créée (dans le dossier src/middlewares/adminAuthentication).



// La route / est appelée "route basique" et est la route appelée dès l'entrée sur votre site web. Aussi, il est impératif qu'elle renvoie du contenu, généralement la page d'accueil...
app.get('/', (req, res, next) => {
  let username = undefined;
  const userLoggedIn = req?.session?.user?.userLoggedIn;

  if (req?.session?.user?.firstname && req?.session?.user?.lastname) {
    username = `${req.session.user.firstname} ${req.session.user.lastname}`;
  }

  return res.render('home',
    {
      title: CONSTANTS.HOME,
      user: username || '',
      userLoggedIn
    },
    (err, html) => {
      if (html) {
        return res.send(html);
      }

      if (err) {
        console.error(err);
        return next(err);
      }
    })
});

// Une route pour récupérer en base de données la liste de tous les utilisateurs inscrits sur le site
app.get('/users', isAuthenticated, async (req, res, next) => {
  const users = [] ?? CONSTANTS.NOUSER;
  let usersList = [];
  const userLoggedIn = req?.session?.user?.userLoggedIn;

  try {
    usersList = await find(String(process.env.DBNAME), 'users', {}, { projection: { _id: 0 } });
  } catch (error) {
    return next(error);
  }

  if (usersList) {
    usersList.forEach(user => {
      users.push(`${user.firstname} ${user.lastname}`);
    })
  }

  return res.render('users', {
    title: CONSTANTS.USERS,
    users,
    userLoggedIn
  }, (err, html) => {
    if (err) {
      return next(err.message);
    }

    if (html) {
      return res.send(html);
    }

  })
});

// Une route pour récupérer la liste de tous les articles existants en base de données
app.get('/posts', isAuthenticated, async (req, res, next) => {
  const userLoggedIn = req?.session?.user?.userLoggedIn;
  let postsList = [];

  try {
    postsList = await find(String(process.env.DBNAME), 'posts', {});
  } catch (error) {
    return next(error);
  }

  return res.render('posts', {
    posts: postsList,
    userLoggedIn
  });
});



// EXERCICE 1 : Créer une route permettant la création de posts par un utilisateur (il faudra créer le post et le lier à l'utilisateur qui l'a rédigé...).
app.get('/create-post', isAuthenticated, (req, res, next) => {
  return res.render('create-post');
});


app.post('/posts', isAuthenticated, async (req, res, next) => {
  const {title, body } = req.body;
  const { id, firstname, lastname } = req?.session?.user;
  let confirmationMessage = '';

  try {
    const insertResult = await insertOne(
      CONSTANTS.DBNAME,
      CONSTANTS.POSTSCOL,
      {
        body,
        title,
        authorId: id,
        authorName: `${firstname} ${lastname}`
      }
    );
    console.log('insertResult: ', insertResult);
    if (insertResult.acknowledged === true) {
      confirmationMessage = { message: 'Votre message a bien été enregistré sur notre serveur !', error: null };
    } else {
      confirmationMessage = { message: 'Une erreur est survenue et votre message n\'a pas pu être envoyé. ', error: 'post-error' };
    }
  } catch (error) {
    return next(error);
}
  return res.json(confirmationMessage)
});


// Plutôt que d'écrire deux routes, on préférera utiliser app.route("<nom_route>") et lui chaîner des appels aux différentes méthodes
// HTTP : .get(), .post(), .put() etc.
app.route('/login')
  .get((req, res, next) => {
    const userLoggedIn = req?.session?.user?.userLoggedIn;

    if (req?.session?.user) {
      return res.render('login',
        {
          title: CONSTANTS.LOGIN,
          username: req.session.user.firstname,
          userLoggedIn
        }, (err, html) => {
          if (err) {
            return next(err.message);
          }
          if (html) {
            return res.send(html);
          }
        })
    } else {
      return res.render('login',
        {
          title: CONSTANTS.LOGIN,
          userLoggedIn
        }, (err, html) => {
          if (err) {
            return next(err.message);
          }
          if (html) {
            return res.send(html);
          }
        })
    }
  })
  .post(async (req, res, next) => {
    const password = req.body?.password;
    const email = req.body?.email;
    let loginResult = {};
    let userInfo = {};
    let success = false;

    if (!password || !email) {
      return res.json({
        success,
        message: `Merci de renseigner un courriel et un mot de passe.`,
        userId: ''
      })
    }

    const match = await comparePasswords(
      String(process.env.DBNAME),
      'users',
      password,
      email
    );

    if (!match) {
      loginResult = {
        success,
        message: `L'email ou le mot de passe est incorrect.`,
        userId: ''
      }
    } else {
      try {
        const findUserResult = await findOne(
          String(process.env.DBNAME),
          'users',
          { email }
        );

        if (findUserResult) {
          success = true;
        }

        if (success) {
          const authToken = createAuthToken(findUserResult.email, findUserResult.id);

          userInfo = {
            id: findUserResult.id,
            firstname: findUserResult.firstname,
            lastname: findUserResult.lastname,
            email: findUserResult.email,
            authToken,
            userLoggedIn: true,
            isAdmin: findUserResult.isAdmin
          }

          loginResult = {
            success,
            message: `Authentification réussie. Vous allez être redirigé vers votre page de profil dans quelques instants...`,
            userId: userInfo.id
          }
          // On stocke dans la session les informations de l'utilisateur que l'on a récupérées depuis la base de données...
          req.session.user = userInfo;
        } else {
          req.session.user = {};
          throw new Error();
        }
      } catch (error) {
        console.error(error);
        loginResult = {
          success,
          message: 'Something went wrong',
          userId: ''
        }
      }
    }
    return res.json(loginResult);
  })

// EXERCICE 3 : Utiliser la route ci-dessous comme base pour créer un bouton de déconnexion qui n'apparaît dans la barre de navigation QUE si l'utilisateur est connecté.
app.get('/logout', (req, res, next) => {
  let redirectionTemplate = 'home';
  let redirectionOptions = {
    path: '/',
    pageTitle: 'Accueil',
  };

  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    } else {
      redirectionTemplate = 'login';
      redirectionOptions = {
        path: '/login',
        pageTitle: 'Connexion',
      }
    }
    return res.render(redirectionTemplate, redirectionOptions);
  });
});

// Gestion des routes liées à l'inscription
app.route('/subscribe')
  .get((req, res, next) => {
    const userLoggedIn = req?.session?.user?.userLoggedIn;

    return res.render('subscribe', {
      title: CONSTANTS.SUBSCRIBE,
      userLoggedIn
    }, (err, html) => {
      if (err) {
        return next(err.message);
      }
      if (html) {
        return res.send(html);
      }
    })
  })
  .post(async (req, res, next) => {
    const userFirstname = req.body?.firstname;
    const userLastname = req.body?.lastname;
    const userEmail = req.body?.email;
    const userPassword = req.body?.password;
    const userId = uuid();
    const saltRounds = 10;
    let notificationMessage = {};

    if (userPassword && userEmail && userFirstname && userLastname) {
      try {
        const findUserResult = await findOne(
          String(process.env.DBNAME),
          'users',
          { email: userEmail }
        );

        if (!findUserResult) {
          try {
            const hashedPassword = await bcrypt.hash(userPassword, saltRounds);

            await insertOne(
              String(process.env.DBNAME),
              'users',
              {
                id: userId,
                firstname: userFirstname,
                lastname: userLastname,
                email: userEmail,
                password: hashedPassword,
                isAdmin: false
              }
            );
          } catch (error) {
            return next(error);
          }

          notificationMessage = {
            message: `Un nouveau compte a été créé pour l'e-mail ${userEmail}. Vous allez être redirigé vers la page de connexion dans quelques secondes`,
            url: '/login',
            timeout: 3000,
            success: true
          };

          req.session.user = {
            id: userId,
            firstname: userFirstname,
            lastname: userLastname,
            email: userEmail
          }
        } else {
          notificationMessage = {
            message: `Un compte est déjà associé à l'email ${userEmail}. Merci de vous connecter`,
            url: '/login',
            timeout: 3000,
            success: false
          };
        }
      } catch (error) {
        return next(error);
      }
    } else {
      notificationMessage = {
        message: `Il manque une information nécessaire (courriel, prénom, nom et/ou mot de passe). Merci de vérifier`,
        url: '/login',
        timeout: 3000,
        success: false
      };
    }

    return res.json(notificationMessage);
  });

// La route permettant l'affichage du compte d'un utilisateur
app.get('/user-account/:userId', isAuthenticated, (req, res, next) => {
  const userLoggedIn = req?.session?.user?.userLoggedIn;
  const firstname = req?.session?.user?.firstname;
  const lastname = req?.session?.user?.lastname;
  // const postIds = req.session.user.postIds;
  // const commentIds = req.session.user.commentIds;

  // EXERCICE 4 : modifier cette route afin qu'elle envoie la liste des posts publiés par l'utilisateur pour qu'ils soient affichés dans la vue

  return res.render('user-account', {
    title: CONSTANTS.USERACCOUNT,
    firstname,
    lastname,
    userLoggedIn
  });
});

// EXERCICE 2 : Créer la route pour permettre à l'utilisateur de modifier les informations suivantes : prénom, nom de famille, mot de passe (attention à bien crypter le mot de passe !)...
app.post('/user-account/update', (req, res, next) => { });

app.get('/become-admin/:email', async (req, res, next) => {
  const userEmail = req?.params?.email;

  if (userEmail) {
    try {
      const updateResult = await updateOne(
        String(process.env.DBNAME),
        'users',
        { email: userEmail },
        { isAdmin: true }
      );
  
      if (updateResult.acknowledged) {
        req.session.user.isAdmin = true;

        return res.redirect('/admin');
      }
    } catch (error) {
      return next(error);
    }
  } else {
    next(`Vous devez fournir un paramètre secret pour devenir administrateur...`);
  }
});


// Cette route, qui doit être placée en dernier dans l'ordre d'écriture des routes, permet de gérer les erreurs 404 notamment...
app.all('*', (req, res, next) => {
  const userLoggedIn = req?.session?.user?.userLoggedIn;

  return res.render('404', {
    title: 'Page introuvable',
    backlink: `http://localhost:3000/`,
    userLoggedIn
  })
});


// Gestionnaire des erreurs d'ExpressJS, qui prend TOUJOURS quatre arguments, le premier étant toujours l'erreur reçue...
app.use((err, req, res, next) => {
  console.error('Erreur reçue : ', err);
  console.error('url : ', err.url);
  console.error('error type : ', err.error);
  if ('invalid-auth' === err.error) {
    return res.redirect(err.url);
  }
  // Ici, implémenter une logique plus complexe de gestion des erreurs reçues...
  return res.redirect(err.url);
});

// Démarrage du serveur
app.listen(PORT, HOST, () => {
  console.info(`Server started at ${HOST}:${PORT}. Have fun!`);
});
