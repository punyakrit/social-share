// lib/mongodb.ts
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

const connectWithRetry = async (): Promise<MongoClient> => {
  try {
    client = new MongoClient(uri, options);
    await client.connect();
    console.log('Successfully connected to MongoDB');
    return client;
  } catch (error) {
    console.error('Connection failed.', error);
    throw error;
  }
};

if (process.env.NODE_ENV === 'development') {
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    globalWithMongo._mongoClientPromise = connectWithRetry();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  clientPromise = connectWithRetry();
}

export default clientPromise;
