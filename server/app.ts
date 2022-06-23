import * as express from 'express';
import * as cors from 'cors';
import * as router from './routes/Router';
import * as connectDB from './utils/db';
import errorHandler from './middlewares/error-handler';
const app = express();
connectDB;
app.use(cors());
app.use(express.json());

app.use('/', router);
app.use(errorHandler);

export default app;
