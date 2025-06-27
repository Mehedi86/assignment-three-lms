import express, {Application, Request, Response} from "express"
import { bookRoutes } from "./controllers/book.controller";
import { borrowRoutes } from "./controllers/borrow.controller";

export const app: Application = express();
app.use(express.json())

app.use('/api/books', bookRoutes);
app.use('/api/borrow', borrowRoutes);

app.get('/', (req: Request, res: Response)=>{
    res.send('Welcome to library management system server!!')
})










//mongodb user name: lmsd
//mongodb user pass: RopcZzx4w6T2m7Hw