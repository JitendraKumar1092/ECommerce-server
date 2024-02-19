import mongoose from "mongoose";
import ProductSchema from "./model/product.js";const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.log(err));
};
const productsData = [
  {
    "id": 1,
    "name": "Blue Swimsuit",
    "color": "Blue",
    "category": "Swimsuit",
    "price": 29.99,
    "size": "M",
    "description": "Stylish blue swimsuit for a day at the beach."
  },
  {
    "id": 2,
    "name": "White Cover-up",
    "color": "White",
    "category": "Coverup",
    "price": 19.99,
    "size": "One",
    "description": "Light and airy white cover-up for the beach."
  },
  {
    "id": 3,
    "name": "Yellow Sundress",
    "color": "Yellow",
    "category": "Sundress",
    "price": 39.99,
    "size": "S",
    "description": "Bright yellow sundress perfect for the beach."
  },
  {
    "id": 4,
    "name": "Coral Shorts",
    "color": "Coral",
    "category": "Shorts",
    "price": 24.99,
    "size": "XS",
    "description": "Comfortable coral shorts for a beach stroll."
  },
  {
    "id": 5,
    "name": "Aqua Tank Top",
    "color": "Aqua",
    "category": "TankTop",
    "price": 14.99,
    "size": "L",
    "description": "Cool aqua tank top for a beach workout."
  },
  {
    "id": 6,
    "name": "Turquoise Sandals",
    "color": "Aqua",
    "category": "Sandals",
    "price": 34.99,
    "size": "7",
    "description": "Stylish turquoise sandals for the beach."
  },
  {
    "id": 7,
    "name": "Straw Hat",
    "color": "Brown",
    "category": "Hat",
    "price": 9.99,
    "size": "One",
    "description": "Classic straw hat to protect from the sun."
  }
];
const insertProducts = async () => {
  try{
    await ProductSchema.insertMany(productsData);
    console.log("Product data inserted successfully");
  }catch(err){
    console.log("Error while inserting product data");
    console.error(err);

  }
}
insertProducts();


export default connectDB;

