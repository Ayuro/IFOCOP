export const CONSTANTS = Object.seal({
  USERS: 'Utilisateurs',
  HOME: 'Accueil',
  LOGIN: 'Connexion',
  SUBSCRIBE: 'Inscription',
  USERACCOUNT: 'Mon compte',
  NOUSER: 'Aucun utilisateur pour le moment',
  ADMIN: 'Panneau d\'administration',
  SESSIONSECRET: 'keyboard cat',
  DBNAME: 'divfs-2',
  POSTSCOL: 'posts',
  USERSCOL: 'users',
  DISCONNECTEDMENU: [
    { name: 'Accueil', url: '/' },
    { name: 'Connexion', url: '/login' },
    { name: 'Inscription', url: '/subscribe' },
    { name: 'Inscription', url: '/logout' },
  ],
  CONNECTEDMENU: [
    { name: 'Accueil', url: '/' },
    { name: 'Déconnexion', url: '/logout' },
    { name: 'Messages', url: '/posts' },
    { name: 'Utilisateurs', url: '/users' }
  ]
})