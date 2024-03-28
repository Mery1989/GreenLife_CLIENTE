import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import eventService from "../../services/EventService";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./EventDetailPage.css"

const EventDetailPage = () => {
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState({});

  useEffect(() => {
    eventService
      .getOneEvent(id)
      .then(({ data }) => setEventDetails(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="eventDetail">
      <Row>
        <Col className="col-md-8">
          <img className="imgEventDetail"
            src={eventDetails.image}
            alt={eventDetails.title}
          />
          <p className="descriptionDetail">{eventDetails.description}</p>
        </Col>
        <Col className="col-md-4">
          <h3>{eventDetails.name}</h3>
          <p> Fecha: {eventDetails.date?.slice(0, 10)}</p>
          <p> Lugar: {eventDetails.location}</p>
          <Link to="/eventos">
        <Button className="DetailButton">Participa</Button>
      </Link>
      <Link to="/eventos">
        <Button className="DetailButton">Volver</Button>
      </Link>
        </Col>

       
        
      </Row>

    </Container>
  );
};

export default EventDetailPage;
