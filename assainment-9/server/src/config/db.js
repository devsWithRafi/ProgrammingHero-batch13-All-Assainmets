import mongoose from 'mongoose';
import { ENV } from '../lib/ENV.js';

export const connectDB = async () => {
  // if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(ENV.MONGODB_URI);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// let cached = global._mongooseCache;
// if (!cached) {
//   cached = global._mongooseCache = { conn: null, promise: null };
// }

// export const connectDB = async () => {
//   try {
//     if (cached.conn) return cached.conn;

//     if (!cached.promise) {
//       cached.promise = mongoose.connect(ENV.MONGODB_URI).then((m) => {
//         console.log(`MongoDB Connected`);
//         return m;
//       });
//     }

//     cached.conn = await cached.promise;

//     return cached.conn;
//   } catch (error) {
//     cached.promise = null;
//     console.error(error);
//     process.exit(1);
//   }
// };
