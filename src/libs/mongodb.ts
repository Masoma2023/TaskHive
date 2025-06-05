// lib/mongodb.ts
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const options = {};

let client: MongoClient;
// eslint-disable-next-line import/no-mutable-exports
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // In development, use a global variable so the value is preserved
  // eslint-disable-next-line no-restricted-globals
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    // eslint-disable-next-line no-restricted-globals
    (global as any)._mongoClientPromise = client.connect();
  }
  // eslint-disable-next-line no-restricted-globals
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // In production, it's best not to use a global variable
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
