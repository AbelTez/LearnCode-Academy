import mongoose from "mongoose";

export async function connectDB() {
  const url = process.env.MONGO_URL;
  if (!url) {
    console.log("MONGO_URL not set; skipping DB connection");
    return;
  }
  await mongoose.connect(url, { dbName: process.env.MONGO_DB || "learncode" });
  console.log("MongoDB connected");
}
