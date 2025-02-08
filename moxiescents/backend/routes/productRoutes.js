import express from "express";
import { Product } from "../models/productModel.js";

const router = express.Router();

// Route for Saving A New Product To Database
router.post("/", async (request, response) => {
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
  router.get("/", async (request, response) => {
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
  router.put("/:id", async (request, response) => {
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
  router.delete("/:id", async (request, response) => {
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

  export default router;