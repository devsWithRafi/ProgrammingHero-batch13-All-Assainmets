import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  CLIENT_URL: process.env.CLIENT_URL,
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
};
