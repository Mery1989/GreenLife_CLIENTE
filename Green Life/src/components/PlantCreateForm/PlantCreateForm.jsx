import { Button, Form, Row } from "react-bootstrap";
import "./PlantCreateForm.css";
import { useState } from "react";
import plantService from "../../services/PlantService";

const PlantCreateForm = () => {
  const [plantData, setPlantData] = useState({
    name: "",
    image: "",
    date: "",
    location: "",
    description: "",
  });

  const { name, image, date, location, description } = plantData;

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setPlantData({
      ...plantData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    plantService
      .savePlant(plantData)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={handleSubmit} className="nombre">
      <Row className="mb-3">
  
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            required
            value={name}
            onChange={handleInputChange}
            name="name"
          />
        </Form.Group>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Imagen del esqueje:</Form.Label>
            <Form.Control
              type="url"
              placeholder="URL"
              required
              value={image}
              onChange={handleInputChange}
              name="image"
            />
          </Form.Group>
        

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
        Crear esqueje
      </Button>
    </Form>
  );
};

export default PlantCreateForm;
