import express, { Application } from 'express';
import http, { Server } from 'http';
import graphqlRouter from './routes/graphql';
import cors from 'cors';

const initServer = (port: number) => {
    const app: Application = express();
    app.use(cors());
    app.use('/api', graphqlRouter);

    const server: Server = http.createServer(app);
    server.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    })
}

export default initServer;