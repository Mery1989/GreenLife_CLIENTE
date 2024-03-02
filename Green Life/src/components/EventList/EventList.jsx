import { useEffect, useState } from "react";
import {Row, Col } from "react-bootstrap";
import eventService from "../../services/EventService";
import EventCard from "../../components/EventCard/EventCard";


const EventList = () => {


    let [event, setEventos] = useState([]);


    useEffect(() => {
      eventService
        .getAllEvents()
        .then(({ data }) => setEventos(data))
        .catch((err) => console.log(err));

    }, []);
 
return(


    <Row>
        {event.map((event) => {
          return ( <Col md={4} key={event._id}> <EventCard {...event}/></Col>);
        })}
      </Row>


)
}


export default EventList