import express, { Express } from 'express';
import cors from 'cors';
import connectDB from './utils/db';
import router from './routes/Router';
import errorHandler from './middlewares/error-handler';
const app: Express = express();
connectDB;
app.use(cors());
app.use(express.json());

app.use('/', router);
app.use(errorHandler);

export default app;
