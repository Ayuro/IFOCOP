import bcrypt from 'bcrypt';
import { findOne } from '../db/findOne.js';

export const comparePasswords = async (database, collection, password, email) => {
  let success = false;

  try {
    const user = await findOne(database, collection, {email})
    const userHash = user?.password;
    const pwdMatches = await bcrypt.compare(password, userHash);

    if (pwdMatches) {
      success = true;
    }
  } catch (error) {
    console.error(error);
  }

  return success;
}