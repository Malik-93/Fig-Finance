import * as mongoose from 'mongoose';
export interface Event {
    _id: mongoose.Schema.Types.ObjectId;
    documentID: number;
    title: string;
    description: string;
    category: string;
    date: string;
    isVirtual: boolean;
    address: string;
}

export interface CreateEventRequest {
    title: string;
    description: string;
    category: string;
    date: string;
    isVirtual: boolean;
    address: string;
}

export interface EventFilters {
    query: string[];
}
