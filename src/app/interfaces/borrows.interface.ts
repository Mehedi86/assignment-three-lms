import { Types } from "mongoose";

export interface IBorrow {
    book: String,
    quantity: number,
    dueDate: Date
}

