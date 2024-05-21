const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const Schema = mongoose.Schema;
const DB_URL =
  "mongodb+srv://mi6whu2j9:azmp101@cluster0.1zlba2w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const ProductsSchema = new Schema({
  title: { type: String, require: true },
  rating: { type: Number, require: true },
  description: { type: String, require: true },
  imageUrl: { type: String, require: true },
});

const ProductsModel = mongoose.model("ProductsModel", ProductsSchema);

app.get("/api/products", async (req, res) => {
  try {
    const products = await ProductsModel.find({});
    if (products.length > 0) {
      res.status(200).send({ message: "success", data: products });
    } else {
      res.status(204).send({ message: "data is empty" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductsModel.findById(id);
    if (product) {
      res.status(200).send({ message: "success", data: product });
    } else {
      res.status(404).send({ message: "not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProducts = await ProductsModel.findByIdAndDelete(id);
    res.status(200).send({
      message: "Deleted Successfully",
      deletedProducts: deletedProducts,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/api/products", async (req, res) => {});

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
});
