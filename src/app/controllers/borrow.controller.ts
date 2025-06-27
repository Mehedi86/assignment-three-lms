import express, { Request, Response } from "express"
import { Borrow } from "../models/borrows.model";

export const borrowRoutes = express.Router();

// borrow create api

borrowRoutes.post('/', async (req: Request, res: Response) => {
    const data = req.body;
    const borrow = await Borrow.create(data);

    res.status(201).json({
        success: true,
        message: "Book borrowed successfully",
        data: borrow
    })
})