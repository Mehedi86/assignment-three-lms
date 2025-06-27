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


borrowRoutes.get('/', async (req: Request, res: Response) => {

    const borrows = await Borrow.aggregate([
        // stage 1
        {
            $group: {
                _id: "$book",
                totalQuantity: { $sum: "$quantity" }
            }
        },
        // stage 2
        {
            $addFields: {
                bookId: { $toObjectId: "$_id" }
            }
        },
        // stage 3
        {
            $lookup: {
                from: "books",
                localField: "bookId",
                foreignField: "_id",
                as: "bookDetails"
            }
        },
        // stage 4
        {
            $unwind: "$bookDetails"
        },
        // stage 5
        {
            $project: {
                _id: 0,
                book: {
                    title: "$bookDetails.title",
                    isbn: "$bookDetails.isbn"
                },
                totalQuantity: 1
            }
        }
    ]);

    res.status(201).json({
        success: true,
        message: "Borrowed books summary retrieved successfully",
        data: borrows
    })
})
