import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Calculator.css';
import { Link } from "react-router-dom";

function Calculator() {
  return (
    <Card className="huella">
      <Card.Body  >
        <div className="cuerpo">
          <Card.Title className="title"><br></br>QUIERES CALCULAR TU HUELLA DE CARBONO</Card.Title>
          <Card.Text className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </Card.Text>
          <Link to="/singup"><Button variant="primary"className="button2">Registrate</Button></Link>
        </div>
          <Card.Img className="imghuella"variant="top" src="./../../../public/huellaMobile.jpg" />

        
      </Card.Body>
    </Card>
  );
}


export default Calculator;