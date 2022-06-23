import * as dotenv from 'dotenv';
import logger from './logger';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require('mongoose');

dotenv.config();

mongoose.Promise = global.Promise;

const connection = mongoose.connect(process.env.MONGODB_URI, {
    autoIndex: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 50,
    bufferMaxEntries: 0,
    keepAlive: 120,
    useNewUrlParser: true,
    // useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);

connection
    .then((db) => {
        logger.info('Connected to database');
        console.log('Connected to database');

        return db;
    })
    .catch((err) => {
        logger.error('Error connecting to database: ' + err);
        console.log('Error connecting to database: ' + err);

    });

export = connection;