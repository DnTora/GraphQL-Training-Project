import express, { Application } from 'express';
import http, { Server } from 'http';

const app: Application = express();

const initServer = (port: number) => {
    const server: Server = http.createServer(app);
    server.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    })
}

export default initServer;