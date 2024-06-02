import mongoose from 'mongoose';

const connectMongoDb = async () => {
  try {
    // Set Mongoose options
    const options = {
      serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
      socketTimeoutMS: 45000, // Increase the socket timeout to 45 seconds
      // bufferCommands: false, // Disable mongoose buffering
      connectTimeoutMS: 30000, // Set connection timeout to 30 seconds
    };

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || '', options);

    // Connection successful
    console.log('Connected to MongoDB');

    // Event listeners for connection events
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
      console.error(`Mongoose connection error: ${err}`);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose disconnected from MongoDB');
    });

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

// Export the function for use in other parts of your application
export default connectMongoDb;
