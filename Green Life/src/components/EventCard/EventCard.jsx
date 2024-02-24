import {Button, Card} from 'react-bootstrap';


function BasicExample() {
  return (
    <Card style={{ width:'288px', height:'363px' }}>
      <Card.Img variant="top" src="pexels-mark-glancy-1564506.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;