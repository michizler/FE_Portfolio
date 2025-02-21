import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import path from "path"; // Use ES module import
import fs from "fs";
import cors from "cors";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("MoxieScents");
});


app.use("/api/products", productRoutes); // product API
app.use("/api/blogs", blogRoutes); // blog API

const __dirname = path.resolve();
const frontendPath = path.join(__dirname, "client", "dist");

if (fs.existsSync(frontendPath)) {
  app.use(express.static(frontendPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
} else {
  console.warn("⚠️ Frontend build not found. Run 'npm run build' in the client folder.");
}

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
