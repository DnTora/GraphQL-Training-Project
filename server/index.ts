import express , {Application} from 'express';
import dotenv from 'dotenv';
import http , {Server} from 'http';
dotenv.config();

const initServer = () => {
    const PORT: number = Number(process.env.PORT) || 2000;
    const app: Application = express();

    const server: Server = http.createServer(app);
    server.listen(PORT,() => {
        console.log(`Server running on port: ${PORT}`);
    })
}

initServer();