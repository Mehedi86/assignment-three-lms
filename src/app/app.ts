import express, {Application, Request, Response} from "express"
import { Schema } from "mongoose";


export const app: Application = express();

const bookSchema = new Schema({
    title: {type: String, required: true, trim: true},
    author: {type: String, required: true},
    genre: {
        type: String,
        required: true,
        enum: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"]
    },
    isbn: {type: String, required: true, unique: true},
    description: {type: String},
    copies: {type: Number, required: true, min: 0},
    available: {type: Boolean, default: true}
})

app.get('/', (req: Request, res: Response)=>{
    res.send('Welcome to library management system server!!')
})










//mongodb user name: lmsd
//mongodb user pass: RopcZzx4w6T2m7Hw