import express from "express";

// console.log("Attempting to import controller functions...");
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
// console.log(process.env.MONGO_URI);    // accessing mongo_uri to my terminal
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;