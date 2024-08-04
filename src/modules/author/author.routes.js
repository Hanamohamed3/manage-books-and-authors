import express from 'express';
import { addAuthor, deleteAuthor, getAllAuthors, getSpecificAuthor, updateAuthor } from './author.controller.js';


const authorRoutes=express.Router();


authorRoutes.post("/author",addAuthor)
authorRoutes.get("/author",getAllAuthors)
authorRoutes.get("/author/:id",getSpecificAuthor)
authorRoutes.patch("/author/:id",updateAuthor)
authorRoutes.delete("/author/:id",deleteAuthor)

export default authorRoutes