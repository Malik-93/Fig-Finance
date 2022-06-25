import EventRepo from '../db/models/EventRepo';
import { Event, CreateEventRequest, EventFilters } from '../models/Event';
import * as mongoose from 'mongoose';
import {
    randomAddressGenerator,
    randomCategoryGenerator,
    uniqueIdGenerator,
} from '../helpers';
const category = randomCategoryGenerator();
const initEventRequest: CreateEventRequest = {
    title: `Title ${category}`,
    description: `Description about the event ${category}`,
    category,
    date: `${new Date().toUTCString()}`,
    isVirtual: true,
    address: randomAddressGenerator(),
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
        const newRegx = new RegExp([filter.query].join('|'), 'i');
        const query = {
            $or: [
                { category: { $in: newRegx } },
                { address: { $in: newRegx } },
                { title: { $in: newRegx } },
                { description: { $in: newRegx } },
            ],
        };
        const doc = await EventRepo.find(query).populate('Event').exec();
        return doc as Event[];
    }
}
