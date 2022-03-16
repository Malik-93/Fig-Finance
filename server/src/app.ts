import * as express from 'express';
import * as cors from 'cors';
import * as dbconnect from './utils/db';
import * as router from './routes/Router';
import logger from './utils/logger';
const app = express();
const port = 8000;
dbconnect;

app.use(cors());
app.use(express.json());

app.use('/', router);
app.listen(port, () => {
    logger.info(`Fig finance app listening on port ${port}`);
    console.log(`Fig finance app listening on port ${port}`);
});

export default app;
