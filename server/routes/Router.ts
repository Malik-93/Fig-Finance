import * as express from 'express';
const router = express.Router();
import * as indexRouter from './Index';
import * as eventRouter from './EventRouter';

router.use('/', indexRouter);
router.use('/api/events', eventRouter);

export = router;
