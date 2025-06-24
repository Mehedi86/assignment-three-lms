import { Server } from "http"
import { app } from "./app";


let server: Server;
const PORT = 5000;

async function main() {
    try {
        server = app.listen(PORT, ()=>{
console.log(`App is listening on port ${PORT}`)
        })

    } catch (error) {
        console.log(error)
    }
}

main()

// mongodb + srv://<db_username>:<db_password>@cluster0.kpht8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0