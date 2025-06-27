import express, { Request, Response } from "express"
import { Book } from "../models/books.model";

export const bookRoutes = express.Router();

bookRoutes.get('/', async (req: Request, res: Response) => {
    const { filter, sortBy, sort, limit } = req.query;

    const readyLimit = parseInt(limit as string);
    const readyFilter = filter ? { genre: filter } : {};


    const books = await Book.find(readyFilter).sort({ [sortBy as string]: sort === "desc" ? -1 : 1 }).limit(readyLimit || 10)

    res.json({
        success: true,
        message: "Books retrieved successfully",
        data: books
    })
})

bookRoutes.post('/', async (req: Request, res: Response) => {
    const data = req.body;
    const book = await Book.create(data);

    res.status(201).json({
        success: true,
        message: "Book created successfully",
        data: book
    })
})