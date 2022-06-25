import * as dotenv from 'dotenv';
import logger from './logger';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import mongoose from 'mongoose';
dotenv.config();
// if (process.env.NODE_ENV === 'development') {
//     process.env['MONGODB_URI'] = process.env.LOCAL_MONGODB_URI;
// }
mongoose.Promise = global.Promise;
const connection = mongoose.connect(process.env.MONGODB_URI, {
    autoIndex: true,
    poolSize: 50,
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    keepAlive: true,
    useCreateIndex: true,
    useFindAndModify: false,
    // useUnifiedTopology: true,
    // Below options would be deprecate in future release
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
});

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
