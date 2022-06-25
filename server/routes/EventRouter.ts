import express, { Router } from 'express';
import { Event, CreateEventRequest, EventFilters } from '../models/Event';
import { EventService } from '../services/EventService';

const router: Router = express.Router();
const eventService = new EventService();
/* Return a list of events */
router.get('/list', async function (req, res) {
    try {
        const events: Event[] = await eventService.getAllEvents();
        if (events.length)
            res.status(200).json({
                success: true,
                statusCode: 200,
                message: 'Success',
                count: events.length,
                events,
            });
        else
            res.status(200).json({
                success: true,
                statusCode: 404,
                message: 'No record found',
                events,
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            statusCode: 500,
            message: 'An error accured during getting events',
            error: error.stack,
        });
    }
});
/* Return a list of filtered events */

router.post('/filtered-list', async function (req, res) {
    const filter: EventFilters = req.body;
    try {
        let events: Event[];
        if (!filter.query) {
            events = await eventService.getAllEvents();
        } else {
            events = await eventService.filterEvents(filter);
        }
        if (events.length)
            res.status(200).json({
                success: true,
                statusCode: 200,
                message: 'Success',
                count: events.length,
                events,
            });
        else
            res.status(200).json({
                success: true,
                statusCode: 404,
                message: 'No record found',
                events,
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            statusCode: 500,
            message: 'An error accured during getting events',
            error,
        });
    }
});

/*Creat new event */
router.post('/create', async function (req, res) {
    const body: CreateEventRequest = req.body;
    try {
        const event: Event = await eventService.createEvent(body);
        res.status(200).json({
            success: false,
            statusCode: 200,
            message: 'Event created successfully',
            event,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            statusCode: 500,
            message: 'an error accured during inserting new event',
            error,
        });
    }
});
export = router;
