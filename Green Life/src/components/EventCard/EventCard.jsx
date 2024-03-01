import {Card} from "react-bootstrap";

const EventCard = ({date, location, name, image}) => {
  return (
    <Card>
      <Card.Img src={image} />

      <Card.Body>
        <Card.Text>{date}</Card.Text>
        <Card.Text>{location}</Card.Text>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
