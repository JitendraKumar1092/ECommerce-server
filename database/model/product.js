import mongoose from "mongoose";

const Product = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

const ProductSchema = mongoose.model("Product", Product);

export default ProductSchema;
