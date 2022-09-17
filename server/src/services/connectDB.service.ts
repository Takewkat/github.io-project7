import mongoose, { ConnectOptions } from "mongoose";
require('dotenv').config({ path: '.env' });

const MONGO_URI = process.env.MONGO_URI

export default function connectDB() {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions);
  console.log('Connected to MongoDB');
}