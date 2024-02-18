import express from "express";
import productRoute from "./database/routes/productRoute.js";


import * as dotenv from "dotenv";

import connectDB from "./database/db.js";
dotenv.config();
const app = express();

const url = process.env.MONGO_URL;
console.log(url);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});





app.use("/api/v1/products", productRoute);

app.get("/", async (req, res) => {
  res.send("hello from the server");
});


connectDB(url);

const startServer = async () => {
  try {
    app.listen(3000, () => console.log("server has started on port 8080"));
  } catch (err) {
    console.log(err);
  }
};
startServer();

export default app;