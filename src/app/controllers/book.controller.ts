import express, { Request, Response } from "express"
import { Book } from "../models/books.model";

export const bookRoutes = express.Router();


// api for all books
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

// api for get single book by id
bookRoutes.get('/:bookId', async (req: Request, res: Response) => {
    const bookId = req.params.bookId;
    const book = await Book.findById(bookId);
    res.json({
        success: true,
        message: "Book retrieved successfully",
        data: book
    })
})

// api for create book
bookRoutes.post('/', async (req: Request, res: Response) => {
    const data = req.body;
    const book = await Book.create(data);

    res.status(201).json({
        success: true,
        message: "Book created successfully",
        data: book
    })
})

// api for update book
bookRoutes.put('/:bookId', async (req: Request, res: Response) => {
    const bookId = req.params.bookId;
    const updateData = req.body;

    const updateNew = await Book.findByIdAndUpdate(bookId, updateData, { new: true, runValidators: true })

    res.json({
        success: true,
        message: "Book retrieved successfully",
        data: updateNew
    })
})

// api for delete book
bookRoutes.delete('/:bookId', async (req: Request, res: Response) => {
    const bookId = req.params.bookId;
    const book = await Book.findByIdAndDelete(bookId);

    res.json({
        success: true,
        message: "Book deleted successfully",
        data: book
    })
})