// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

type ContactFormData = {
  fullName: string;
  street: string;
  city: string;
  postcode: string;
  phoneNo: string;
  email: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const data: ContactFormData = await req.json();
    
    // Connect to MongoDB
    await client.connect();
    const db = client.db('shareHub'); // Replace with your database name
    const collection = db.collection('contacts'); // Replace with your collection name

    // Insert data into the collection
    await collection.insertOne(data);

    return NextResponse.json({ message: 'Contact form data saved successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to save contact form data.' }, { status: 500 });
  } finally {
    await client.close();
  }
}
