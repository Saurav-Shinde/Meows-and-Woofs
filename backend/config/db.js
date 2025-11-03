import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    console.log('Please make sure MongoDB is running or set MONGO_URI environment variable');
    // Don't exit process, let the server continue without DB
  }
};

export default connectDB;
