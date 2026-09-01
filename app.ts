import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

// Application Middleware
app.use(cors());
app.use(express.json()); 

// Healthcheck Route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'Server is healthy' });
});

export default app;
