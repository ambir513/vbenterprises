import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.NEXT_PUBLIC_CONNECT_STRING as string;
console.log("✅ Connected to MongoDB:", process.env.NEXT_PUBLIC_CONNECT_STRING);
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

interface MongooseGlobal {
  conn: Connection | null;
  promise: Promise<typeof mongoose> | null;
}

let cached: MongooseGlobal = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<Connection> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  const mongooseInstance = await cached.promise;
  cached.conn = mongooseInstance.connection;
  return cached.conn;
}
