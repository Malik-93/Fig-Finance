import * as React from 'react';
import { Iitem } from '../interfaces/EventItem';
type Props = {
    item: Iitem;
    index: number;
};
const defaultProps = {
    item: {},
    index: null
}

const EventCard = (props: Props) => {
    const item: Iitem = props.item;
    const { title, description, category, address, date } = item;
    return (
        <>
            <div className="col">
                <div className="card h-100 shadow-sm">
                    <div className="text-center">
                        <div className="img-hover-zoom img-hover-zoom--colorize">
                            <img className="shadow" src={require('../assets/mern.jpeg')} alt="Another Image zoom-on-hover effect" />
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="my-2 text-center">
                            <h1 className="heading">{category}</h1>
                            <span className="title">{title}</span>
                        </div>
                        <div className="mb-3">
                            <p className="text-center role">{description}</p>
                        </div>
                        <div className="mb-3">
                            <p className="text-center address">{address}</p>
                        </div>
                        <div className="mb-3">
                            <p className="text-center time_date">{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
EventCard.defaultProps = defaultProps;
export default EventCard;
