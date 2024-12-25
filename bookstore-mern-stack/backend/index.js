import express, { request } from "express";
import { PORT, mongoDBurl } from "./config.js";
import mongoose from "mongoose";
// import { Book } from "./bookModel.js";
import router from "./routes/booksRoute.js";

const app = express();

app.use(express.json());

app.get("/", (request, response)=>{
    console.log(request);
    return response.status(234).send("Welcome to this MERN Stack App");
});

app.use("/books", router);

mongoose
.connect(mongoDBurl)
.then(()=>{
    console.log("App connected to database successfully");
    app.listen(PORT, () => {
        console.log(`App is listening on port: ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error);
});

