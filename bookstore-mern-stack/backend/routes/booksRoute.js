import express from "express";
import { Book } from "../bookModel.js";

const router = express.Router();

// send a book objects to database (mongoDB)
router.post("/", async (request, response)=>{
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
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Get all books in database
router.get("/", async (request, response)=>{
    try {
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Get a single book
router.get("/:id", async (request, response)=>{
    try {

        const { id } = request.params;

        const book = await Book.findById(id);

        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Update a book in the database
router.put("/:id", async (request, response)=>{
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

        const { id } = request.params;

        const result = await Book.findByIdAndUpdate(id, request.body);

        if (!result){
            return response.status(404).json({message: "Book not found"});
        }

        return response.status(200).send({message: "Book updated successfully"});
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Delete a book
router.delete("/:id", async (request, response) => {
    try {

        const { id } = request.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result){
            return response.status(404).json({message: "Book not found"});
        }

        return response.status(200).send({message: "Book successfully deleted"});
        
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({message: error.message});
    }
});

export default router;