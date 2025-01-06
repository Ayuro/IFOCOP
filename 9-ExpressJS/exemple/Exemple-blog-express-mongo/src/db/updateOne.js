import MongoClient from './client.js';

export const updateOne = async (db, coll, query, dateToUpdate) => {
  let data = undefined;

  try {
    await MongoClient.connect();
    const collection = MongoClient.db(db).collection(coll);
    const response = await collection.updateOne(
      query,
      { $set: dateToUpdate }
    );
    data = response;
  } catch (error) {
    console.error(error);
  } finally {
    MongoClient.close();
  }
  return data;
};
