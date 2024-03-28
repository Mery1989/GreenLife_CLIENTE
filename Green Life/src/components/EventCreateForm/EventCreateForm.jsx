import { Button, Form, Row } from "react-bootstrap";
import "./EventCreateForm.css";
import { useState } from "react";
import eventService from "../../services/EventService";

const EventCreateForm = ({closeModal,refreshEvents}) => {
  const [eventData, setEventData] = useState({
    name: "",
    image: "",
    date: "",
    location: "",
    description: "",
  });

  const { name, image, date, location, description } = eventData;

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    eventService
      .saveEvento(eventData)
      .then(({ data }) => {closeModal(),
        refreshEvents()})
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={handleSubmit} className="nombre">
      <Row className="mb-3">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre Evento:</Form.Label>
          <Form.Control
            type="text"
            required
            value={name}
            onChange={handleInputChange}
            name="name"
          />
        </Form.Group>
        <div className="FormLinea">
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Imagen de portada:</Form.Label>
            <Form.Control
              type="url"
              placeholder="URL"
              required
              value={image}
              onChange={handleInputChange}
              name="image"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Fecha del evento:</Form.Label>
            <Form.Control
              type="date"
              required
              value={date}
              onChange={handleInputChange}
              name="date"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="location">
            <Form.Label>Localización:</Form.Label>
            <Form.Control
              type="text"
              required
              value={location}
              onChange={handleInputChange}
              name="location"
            />
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={handleInputChange}
            name="description"
          />
        </Form.Group>
      </Row>
      <Button className="DetailButton" id="button" type="submit">
        Crear evento
      </Button>
    </Form>
  );
};

export default EventCreateForm;
