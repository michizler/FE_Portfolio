import express from "express";
import { PORT, mongoDBurl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./bookModel.js";

const app = express();

app.use(express.json());

app.get("/", (request, response)=>{
    console.log(request);
    return response.status(234).send("Welcome to this MERN Stack App");
});

app.post("/books", async (request, response)=>{
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ){
            return response.status(400).send({
                message: "Fill all required fields: title, author, publishYear"
            });
        }

        // New book object with content following bookSchema
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        };

        // Create a new book record with Book model from bookModel.js
        const book = await Book.create(newBook);

        // send book object via http method
        return response.status(201).send(book);
    } catch (error) {
        console.log(error);
    }
})

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

