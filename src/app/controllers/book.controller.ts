import express, { Request, Response } from "express"

export const bookRoutes = express.Router();

bookRoutes.get('/', (req: Request, res: Response)=>{
    console.log("the right url is hitted");
    res.send('Hello welcome, you are good to go')
})