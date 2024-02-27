import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Calculator() {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="./../../../public/Huella.jpg" />
      <Card.Body >
        <Card.Title>QUIERES CALCULAR TU
HUELLA DE CARBONO</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </Card.Text>
        <Button variant="primary">Registrate</Button>
      </Card.Body>
    </Card>
  );
}

export default Calculator;