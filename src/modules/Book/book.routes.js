import express from 'express';
import { addBook, deleteBook, getAllBooks, getSpecificBook, updateBook } from './book.controller.js';


const bookRoutes=express.Router();



bookRoutes.post("/book",addBook)
bookRoutes.get("/book",getAllBooks)
bookRoutes.get("/book/:id",getSpecificBook)
bookRoutes.patch("/book/:id",updateBook)
bookRoutes.delete("/book/:id",deleteBook)


export default bookRoutes