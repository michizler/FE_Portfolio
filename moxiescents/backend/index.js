import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import path from "path"; // Use ES module import
import { fileURLToPath } from "url";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildPath = path.join(__dirname, "../frontend/build");

app.use(express.static(buildPath));

app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("MoxieScents");
});

app.get("*", (req, res) => {
  const indexPath = path.join(buildPath, "index.html");

  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("Error sending the file:", err);
      res.status(500).send("An error occurred while retrieving the page.");
    }
  });
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
