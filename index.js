require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./connect/db"); //it returns promise
const PORT = process.env.PORT || 5000;
const routers = require("./routes/products.routes");
app.get("/", (req, res) => {
  res.send("Server is live");
});
app.use("/api/products", routers);
const start = async () => {
  try {
    await connectDb(process.env.mongoUrl); //it is a function
    app.listen(PORT, () => {
      console.log("port is listening");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
