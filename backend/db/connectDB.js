import mongoose from "mongoose";

export const connectDB = async () => {
  try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000, // Timeout after 30 seconds (adjust as needed)
    });

    console.log(`MongoDB is now Connected`);
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error.message);
    process.exit(1); // 1 is failure, 0 status code is success
  }
};
