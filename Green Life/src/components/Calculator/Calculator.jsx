import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Calculator.css';
import { Link } from "react-router-dom";

function Calculator() {
  return (
    <Card className="huella">
      <Card.Img className="imghuella"variant="top" alt="Una imagen de un jarrón con hojas verdes en su interior" src="./../../../public/huellaMobile.jpg" />
      <Card.Body  >
        <div className="cuerpo">
        <Card.Title className="title"><br></br>QUIERES CALCULAR TU
HUELLA DE CARBONO</Card.Title>
        <Card.Text className="txt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </Card.Text>
        </div>
        <Link to="/login"><Button variant="primary"className="button2">EMPEZAR EL TEST</Button></Link>
      </Card.Body>
    </Card>
  );
}


export default Calculator;