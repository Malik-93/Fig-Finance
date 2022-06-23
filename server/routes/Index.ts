import * as express from 'express';
import * as mongoose from 'mongoose';
import {
    randomAddressGenerator,
    randomCategoryGenerator,
    randomStringGenerator,
    uniqueIdGenerator,
} from '../helpers';
import { Event } from '../models/Event';
import { EventService } from '../services/EventService';
const router = express.Router();
const eventService = new EventService();

/* GET home page. */
const initRoute = async function (req, res) {
    let eventsArr: Array<object> = [];
    const events: Event[] = await eventService.getAllEvents();
    if (!events.length) {
        for (let index = 0; index < 30; index++) {
            eventsArr.push({
                _id: new mongoose.Types.ObjectId(),
                documentID: uniqueIdGenerator(),
                title: `Title ${randomCategoryGenerator()}`,
                description: `Description about the event ${randomCategoryGenerator()}`,
                category: randomCategoryGenerator(),
                date: `${new Date().toUTCString()}`,
                isVirtual: index % 2 ? true : false,
                address: randomAddressGenerator(),
            });
        }
        await eventService.bulkCreateEvents(eventsArr);
        return res.send(
            'Fig finance app working and some dummy events added in database!'
        );
    } else {
        res.send('Fig finance app working!');
    }
};
router.get('/', initRoute);
export = router;
