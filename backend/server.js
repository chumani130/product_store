import express from 'express';  // need to set type from package,json to module
import dotenv from "dotenv"   // so that we will be able to use our mongo_uri db
import { connectDB } from './config/db.js';

dotenv.config();   // accessing mongo_uri to my terminal

const app = express();

app.get("/products", (req, res) => {
    // res.send("server is ready");
});

// console.log(process.env.MONGO_URI);    // accessing mongo_uri to my terminal

app.listen(5000, () => {
    connectDB();
    console.log("Server has started at http://localhost:5000");
})
