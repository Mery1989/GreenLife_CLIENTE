
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './ContactForm.css';
import React, { useState } from 'react';


function contactForm() {
  const [validated, setValidated] = useState(false);
 
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } 

    setValidated(true);
  };
  return (
    <Form className="contactForm " noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 formulario">
        <Form.Group className="Nombre" as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre completo:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre y apellido"
          />
          <Form.Control.Feedback type="invalid">
          Por favor, introduce tu nombre y apellidos.
            </Form.Control.Feedback>
       
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04 correo">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Email" required />
          <Form.Control.Feedback type="invalid">
            Email no válido
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="Nombre" as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Asunto:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Explica brevemente tu mensaje"
          />
          <Form.Control.Feedback type="invalid">
          Por favor, el asunto del mensaje
            </Form.Control.Feedback>
       
        </Form.Group>
        <Form.Group className="Nombre" as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Número de Teléfono:</Form.Label>
          <Form.Control
            
            type="number"
            placeholder="Introduzca su número si lo desea"
          />
          <Form.Control.Feedback type="invalid">
          Por favor introduzca sólamente números
            </Form.Control.Feedback>
       
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Hola estoy interesado en...</Form.Label>
        <Form.Control as="textarea" rows={3}
       />
      </Form.Group>
      
     </Row>
      <Button id="button" type="submit">Enviar </Button>
    </Form>
  );
  
}

export default contactForm;