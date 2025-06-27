import express, { Request, Response } from "express"
import { Book } from "../models/books.model";

export const bookRoutes = express.Router();

bookRoutes.get('/', (req: Request, res: Response) => {
    console.log("the right url is hitted");
    res.send('Hello welcome, you are good to go')
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