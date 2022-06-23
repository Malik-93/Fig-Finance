import * as React from "react";
import axios from '../utils/axios';
import Search from "./Search";
const Card = (props: any) => {
  const { title, description, category, address, date } = props.item
  return (
    <div className="card" key={`card-item-key-${title}`}>
      <img className="imgRes" src={"https://picsum.photos/200"} alt="thumbnail" />
      <div className="category"><b>{category}</b></div>
      <div>
        <h5>{title}</h5>
        <p className="description">{description}</p>
        <p className="address">{address}</p>
        <p className="date"><i>{date}</i></p>
      </div>
    </div>
  )
}

const Cards = (props: any) => {
  return props.data.map((item: any, index: any) => (
    <div className="" key={`card-key-${index}`} >
      <Card item={item} />
    </div>
  ));
}

export default (props: any) => {
  const [events, setEvents] = React.useState([])
  const [message, setMessage] = React.useState("")
  const getEvents = async () => {
    try {
      const response = await axios.get("/api/events/list");
      const { statusCode, events } = response.data;
      if (statusCode === 200) {
        setEvents(events)
      }
    } catch (error) {
      console.log("an error acuured during getting events...", JSON.parse(JSON.stringify(error)));
    }
  }
  const filterEvents = async (query: string) => {
    try {
      const payload = {
        "query": [query.charAt(0).toUpperCase() + query.slice(1)],
      }
      const response = await axios.post("/api/events/filtered-list", payload);
      const { statusCode, events } = response.data;
      if (statusCode === 200) {
        setEvents(events)
      } else {
        setMessage("No record found");
        setEvents([]);
      }
    } catch (error) {
      console.log("an error acuured during filter...", JSON.parse(JSON.stringify(error)));

    }
  }

  React.useEffect(() => {
    getEvents()
  }, [])
  console.log('events', events);

  return (
    <div className="container-fluid">
      <Search onSubmit={filterEvents} />
      <div className="row">
        <div className="col-sm-12 col-md-12 cards">
          {
            events.length ? (<Cards data={events} />) : <div className="message">{message}</div>
          }
        </div>
      </div>
    </div>
  );
}


