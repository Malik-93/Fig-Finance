import EventRepo from '../db/models/EventRepo';
import { Event, CreateEventRequest, EventFilters } from '../models/Event';
import * as mongoose from 'mongoose';
import { uniqueIdGenerator } from '../helpers';

const initEventRequest: CreateEventRequest = {
    title: 'Healthcare Track',
    description:
        'This session seeks to get people thinking about the ultimate objective of health AI',
    category: 'AI',
    date: `${new Date().toUTCString()}`,
    isVirtual: true,
    address: 'London, United Kingdom',
};
export class EventService {
    /*
    create an event
    */
    async createEvent(body: CreateEventRequest): Promise<Event> {
        const { title, description, category, date, isVirtual, address } = body;
        const newEvent = new EventRepo({
            _id: new mongoose.Types.ObjectId(),
            documentID: uniqueIdGenerator(),
            title: title || initEventRequest.title,
            description: description || initEventRequest.description,
            category: category || initEventRequest.category,
            date: date || initEventRequest.date,
            isVirtual: isVirtual || initEventRequest.isVirtual,
            address: address || initEventRequest.address,
        });
        const event = await newEvent.save();
        return event as unknown as Event;
    }
    async bulkCreateEvents(data: Array<object>) {
        EventRepo.insertMany(data, {}, (err: any, docs: any) => {
            if (err) {
                return err;
            } else {
                return docs;
            }
        });
    }
    /*
    Get all events
    */
    async getAllEvents(): Promise<Event[]> {
        const doc = await EventRepo.find({}).populate('Event').exec();
        return doc as Event[];
    }
    /*
    Filter events according to user's interests and location
    */
    async filterEvents(filter: EventFilters): Promise<Event[]> {
        const query = {
            $or: [
                { category: { $in: filter.query } },
                { address: { $in: filter.query } },
                { title: { $in: filter.query } },
                { description: { $in: filter.query } },
            ],
        };
        const doc = await EventRepo.find(query)
            .populate('Event')
            .exec();
        return doc as Event[];
    }
}
