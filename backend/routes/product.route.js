import express from "express";
import mongoose from "mongoose";

import Product from "../models/product.model.js";
import { getProducts } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);
// console.log(process.env.MONGO_URI);    // accessing mongo_uri to my terminal

router.put("/:id", putProducts);

router.delete("/:id", deleteProducts);

export default router;