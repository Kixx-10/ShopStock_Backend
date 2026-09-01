import mongoose from 'mongoose';

export const connectDatabase = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI environment variable is missing!");
    }
    // Connect to MongoDB
    const connection = await mongoose.connect(mongoUri);
    
    console.log(` MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(' MongoDB connection error:', error);
    process.exit(1); // Shutdown application if DB connection fails
  }
};
