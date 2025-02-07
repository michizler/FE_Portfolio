import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import path from "path"; // Use ES module import
import { fileURLToPath } from "url";
import cors from "cors";
import mongoose from "mongoose";
import { Product } from "./models/productModel.js";

const app = express();


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("MoxieScents");
});


// Route for Saving A New Product To Database
app.post("/products", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.price ||
      !request.body.inStock ||
      !request.body.image ||
      !request.body.rating
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: name, price, inStock, image, rating",
      });
    }
    const newProduct = {
      name: request.body.name,
      price: request.body.price,
      inStock: request.body.inStock,
      image: request.body.image,
      rating: request.body.rating,
    };

    const product = await Product.create(newProduct);

    return response.status(201).send(product);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Products From Database
app.get("/api/products", async (request, response) => {
  try {
    const products = await Product.find({});

    return response.status(200).json({
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Updating a Product
app.put("/products/:id", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.price ||
      !request.body.inStock ||
      !request.body.image ||
      !request.body.rating
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: name, price, inStock, image, rating",
      });
    }

    const { id } = request.params;

    const result = await Product.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Product not found" });
    }

    return response
      .status(200)
      .send({ message: "Product details updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Deleting a Product
app.delete("/products/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Product.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Product not found" });
    }

    return response
      .status(200)
      .send({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error.message);
    process.exit(1); // Exit the process with an error code
  });
