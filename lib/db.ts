import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

const retries = 2;
let attempt = 1;

const connectWithRetry = async (): Promise<MongoClient> => {
  try {
    client = new MongoClient(uri, options);
    await client.connect();
    console.log(`Successfully connected to MongoDB on attempt ${attempt}`);
    return client;
  } catch (error) {
    console.error(`Connection attempt ${attempt} failed.\n`, error);
    if (attempt < retries) {
      attempt += 1;
      console.log(`Retrying connection (attempt ${attempt})...`);
      return connectWithRetry();
    } else {
      throw new Error(`Failed to connect to MongoDB after ${attempt} attempts.`);
    }
  }
};

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  };

  if (!globalWithMongo._mongoClientPromise) {
    globalWithMongo._mongoClientPromise = connectWithRetry();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  clientPromise = connectWithRetry();
}

export default clientPromise;