import express from 'express';  // need to set type from package,json to module
import dotenv from "dotenv"   // so that we will be able to use our mongo_uri db
import { connectDB } from './config/db.js';
import productRoutes from ".routes/product.route.js"
dotenv.config();   // accessing mongo_uri to my terminal

const app = express();

// its a middleware, function that runs before you send a res back to the client
app.use(express.json())    // allows us to accept JSON data in the req.body

app.use("/api/products",productRoutes)

app.listen(5000, () => {
    connectDB();
    console.log("Server has started at http://localhost:5000");
});
