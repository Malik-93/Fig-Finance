import * as mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    documentID: Number,
    title: String,
    description: String,
    category: String,
    date: String,
    isVirtual: Boolean,
    address: String,
});

const EventRepo = mongoose.model('Event', eventSchema, 'Events');
export default EventRepo;
