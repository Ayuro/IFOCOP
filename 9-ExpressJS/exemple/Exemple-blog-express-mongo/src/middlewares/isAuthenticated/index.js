import jwt from 'jsonwebtoken';

export const isAuthenticated = (req, res, next) => {
  if (req?.session?.user) {
    const userIdParam = req?.params?.userId;
    const userToken = req?.session?.user?.authToken;
    const userId = req?.session?.user?.id;
    const privateKey = String(process.env.PRIVATEKEY);
    let isAuthenticated = undefined;

    if (userToken) {
      isAuthenticated = jwt.verify(userToken, privateKey);

      if (userIdParam) {
        if (isAuthenticated?.id === userIdParam) {
          return next();
        } else {
          return next({ error: 'invalid-auth', message: 'Vous n\'avez pas accès à ce contenu d\'un autre utilisateur.', url: '/login' });
        }
      } else {
        if (userId) {
          if (isAuthenticated?.id === userId) {
            return next();
          } else {
            return next({ error: 'invalid-auth', message: 'Vous devez d\'abord vous connecter.', url: '/login' });
          }
        } else {
          return next({ error: 'invalid-auth', message: 'Vous devez d\'abord vous connecter.', url: '/login' });
        }
      }
    } else {
      return next({ error: 'invalid-auth', message: 'Vous devez d\'abord vous connecter.', url: '/login' });
    }
  } else {
    return next({ error: 'invalid-auth', message: 'Vous devez d\'abord vous connecter.', url: '/login' });
  }
};
