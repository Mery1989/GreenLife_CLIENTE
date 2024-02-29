import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './UserSingup.css';

function FormSingup() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre completo:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="nombre"
          />
          <Form.Control.Feedback type="invalid">
              Introduce tu nombre y apellidos
            </Form.Control.Feedback>
       
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Email no válido
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Nombre de Usuario:</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Elige un nombre de usuario que no esté en uso
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Fecha de nacimiento:</Form.Label>
          <Form.Control type="date" placeholder="date" required />
          <Form.Control.Feedback type="invalid">
            Fecha de nacimiento incorrecta
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustomGender">
          <Form.Label>Género:</Form.Label>
          <Form.Select>
            <option>Masculino</option>
            <option>Femenino</option>
            <option>Otro</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Check
          required
          label="Aceptar términos y condiciones"
          feedback="Debes aceptar términos y condiciones antes de continuar."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button id="button" type="submit">Registrarse</Button>
    </Form>
  );
}

export default FormSingup;