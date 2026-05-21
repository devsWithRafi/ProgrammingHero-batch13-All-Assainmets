import mongoose from 'mongoose';
import { ENV } from '../lib/ENV.js';

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(ENV.MONGODB_URI);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
