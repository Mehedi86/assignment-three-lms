import { Server } from "http"
import { app } from "./app";
import mongoose from "mongoose";


let server: Server;
const PORT = 5000;

async function main() {
    try {
        await mongoose.connect('mongodb+srv://libraryManagement:zwsbdgFeEMRMdq8d@cluster0.kpht8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

        console.log('conneted to mongodb by mongoose!!')
        
        server = app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`)
        })

    } catch (error) {
        console.log(error)
    }
}

main()


// zwsbdgFeEMRMdq8d
// libraryManagement

