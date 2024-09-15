import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDbURL = process.env.MONGODB_URL_STRING as string;

export default (async () => {
  try {
    await mongoose.connect(mongoDbURL);
    console.log("Mongodb Connected!!!");
  } catch (error) {
    console.log("error :>> ", error);
    process.exit(1);
  }
})();
