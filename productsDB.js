require("dotenv").config();
const connectDb = require("./connect/db");
const prodJson = require("./productsData.json");
const prodSchema = require("./models/products.model");

const start = async () => {
  try {
    await connectDb(process.env.mongoUrl);
    await prodSchema.deleteMany();
    await prodSchema.create(prodJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
start();
