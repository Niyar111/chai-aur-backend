import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});
import connectdb from "./db/index.js";
connectdb();








/*import express from "express";
import express from "express";
const app = express();
export const connectDB = async () => {
    try{
        await mongoose.connect(`mongodb://localhost:27017/${db_name}`);
        app.listen(5000, () => {//app.listen should be inside connectDB to ensure DB connection before server starts
            console.log("Connected to DB and Server is running on port 5000");
        });
        app.on("error", (err) => {
            console.log("Error starting server", err);
        });
    } catch(err){
        console.log("Error connecting to DB", err);
    }   
}; */