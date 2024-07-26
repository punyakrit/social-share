import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

type SubscribeFormData = {
  email: string;
};

export async function POST(req: Request) {
  try {
    const data: SubscribeFormData = await req.json();

    if (!data.email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    // Connect to MongoDB
    await client.connect();
    const db = client.db('shareHub'); // Replace with your database name
    const collection = db.collection('subscribers'); // Replace with your collection name

    // Insert data into the collection
    await collection.insertOne({ email: data.email });

    return NextResponse.json({ message: 'Email stored successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Failed to store email' }, { status: 500 });
  } finally {
    await client.close();
  }
}
