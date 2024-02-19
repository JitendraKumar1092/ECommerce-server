import express from "express";
import * as dotenv from "dotenv";


import Product from "../model/product.js";

dotenv.config();

const router = express.Router();



// GET ALL ProductS
router.route("/").get(async (req, res) => {
  try {
    const Products = await Product.find({});

    res.status(200).json({ success: true, data: Products });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});



export default router;
