import express from 'express';  // need to set type from package,json to module
import dotenv from "dotenv"   // so that we will be able to use our mongo_uri db
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config();   // accessing mongo_uri to my terminal

const app = express();

// its a middleware, function that runs before you send a res back to the client
app.use(express.json())    // allows us to accept JSON data in the req.body

app.post("/api/products", async (req, res) => {
    // res.send("server is ready");
    const product = req.body;   // user will send this data 

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: "Please provide all fields"});
    }
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.error("Error in Create product: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
});
// console.log(process.env.MONGO_URI);    // accessing mongo_uri to my terminal

app.delete("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted"});
    } catch (error) {
        
    }
});

app.listen(5000, () => {
    connectDB();
    console.log("Server has started at http://localhost:5000");
});
