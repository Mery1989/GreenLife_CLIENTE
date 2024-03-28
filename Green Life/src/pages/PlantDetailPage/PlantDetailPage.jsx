import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./PlantDetailPage.css"
import plantService from "../../services/PlantService";

const PlantDetailPage = () => {
  const { id } = useParams();
  const [plantDetails, setPlantDetails] = useState({});

  useEffect(() => {
    plantService
      .getOnePlant(id)
      .then(({ data }) => setPlantDetails(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="eventDetail">
      <Row>
        <Col className="col-md-8">
          <img className="imgEventDetail"
            src={plantDetails.image}
            alt={plantDetails.title}
          />
          <p className="descriptionDetail">{plantDetails.description}</p>
        </Col>
        <Col className="col-md-4">
          <h3>{plantDetails.name}</h3>
          <Link to="/esquejes">
        <Button className="DetailButton">Reserva</Button>
      </Link>
      <Link to="/esquejes">
        <Button className="DetailButton">Volver</Button>
      </Link>
        </Col>
        
      </Row>

    </Container>
  );
};

export default PlantDetailPage;
