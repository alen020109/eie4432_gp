//Sit Hin Kit 21078808d
//Wong Sze Sze 21081046d

import { MongoClient, ServerApiVersion } from 'mongodb';
import config from './config.js';
const connect_uri = config.CONNECTION_STR;
const client = new MongoClient(connect_uri, {
  connectTimeoutMS: 2000,
  serverSelectionTimeoutMS: 2000,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function connect() {
  try {
    // TODO
    await client.connect();
    await client.db('groupproject').command({ ping: 1 });
    console.log('Successfully connected to the database!');
  } catch (err) {
    // TODO
    console.log('Unable to establish connection to the database!');
    process.exit(1);
  }
}
connect().catch(console.dir);
export default client;
