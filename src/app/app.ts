import express, {Application, Request, Response} from "express"


export const app: Application = express();

app.get('/', (req: Request, res: Response)=>{
    res.send('Welcome to library management system server!!')
})










//mongodb user name: lmsd
//mongodb user pass: RopcZzx4w6T2m7Hw