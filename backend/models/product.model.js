import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true    // createdAt, updatedAt
});

const Product = mongoose.model('Product', productSchema); // from mongoose create a collection called product and this is the schema that you should check

export default Product;