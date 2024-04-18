
import { Button, Form } from 'react-bootstrap';

function Loginform() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" placeholder="Introduzca su nombre de usuario" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Introduzca su contraseña" />
      </Form.Group>
      <Button id="button" type="submit">Enviar</Button>
    </Form>
  );
}

export default Loginform;