import * as React from "react";
import axios from '../utils/axios';
import Search from "./Search";
import { Iitem } from '../interfaces/EventItem';
import EventCard from './EventCard';
import NoRecord from "./NoRecord";
import Loader from "./Loader";


export default (props: any) => {
  const [events, setEvents] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const getEvents = async () => {
    try {
      setLoading(true)
      const response = await axios.get("/api/events/list");
      const { statusCode, events } = response.data;
      if (statusCode === 200) {
        setEvents(events)
      }
    } catch (error) {
      console.log("an error acuured during getting events...", JSON.parse(JSON.stringify(error)));
    } finally {
      setLoading(false)
    }
  }
  const filterEvents = async (query: string) => {
    try {
      setLoading(true)
      const payload = {
        "query": [query.charAt(0).toUpperCase() + query.slice(1)],
      }
      const response = await axios.post("/api/events/filtered-list", payload);
      const { statusCode, events } = response.data;
      if (statusCode === 200) {
        setEvents(events);
        setMessage('')
      } else {
        setMessage("No record found");
        setEvents([]);
      }
    } catch (error) {
      console.log("an error acuured during filter...", JSON.parse(JSON.stringify(error)));

    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    getEvents()
  }, [])
  console.log('events', events);
  return (
    <div className="">
      <Search onSubmit={filterEvents} />

      <div className="p-5" key={`card-key-`}>
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5  g-3">
          {
            (events || []).map((item: Iitem, index: number) => (
              <EventCard item={item} index={index} key={`event-index-${index}`} />
            ))
          }
          <Loader loading={loading} />
          <NoRecord message={message} />
        </div>
      </div>
    </div>
  );
}


