import express, { Router } from 'express';
import indexRouter from './Index';
import eventRouter from './EventRouter';
const router: Router = express.Router();
router.use('/', indexRouter);
router.use('/api/events', eventRouter);

export = router;
