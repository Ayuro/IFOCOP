import jwt from 'jsonwebtoken';

export const createAuthToken = (email, id) => {
  const privateKey = String(process.env.PRIVATEKEY);
  
  const authToken = jwt.sign({ email, id }, privateKey, {
    expiresIn: 600
  });

  return authToken;
};