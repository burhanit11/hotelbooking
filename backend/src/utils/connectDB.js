import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGDB_URL);
    console.log("Database Connection Succuss.");
  } catch (error) {
    console.log(`MongoDB Connaction failed! ${error}`);
    process.exit(1);
  }
};

export default connectDB;
