import mongoose from "mongoose";
import { db_name } from "../constants.js";
export const connectDB = async () => {
    try {
         const connection = await mongoose.connect(`mongodb://localhost:27017/${db_name}`);
        console.log("Connected to DB");
    }
    catch (err) {
        console.log("Error connecting to DB", err);
    }
};
