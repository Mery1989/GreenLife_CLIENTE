import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Calculator.css';

function Calculator() {
  return (
    <Card className="huella">
      <Card.Img className="imghuella"variant="top" src="./../../../public/huellaMobile.jpg" />
      <Card.Body  >
        <div className="cuerpo">
        <Card.Title className="title"><br></br>QUIERES CALCULAR TU
HUELLA DE CARBONO</Card.Title>
        <Card.Text className="txt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </Card.Text>
        </div>
        <Button variant="primary"className="button2">Registrate</Button>
      </Card.Body>
    </Card>
  );
}

export default Calculator;