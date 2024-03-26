import React, { useState, useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

function contactForm() {
  const formRef = useRef();
  const [validated, setValidated] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null); // Estado para almacenar errores de envío

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true); // Marca el formulario como validado para mostrar los mensajes de error
      return;
    }

    const serviceId = "service_8t7sdmp";
    const templateId = "template_8q3f11k";
    const apikey = "rp-HaLk6JrgnzOlrk";
    
    emailjs.sendForm(serviceId, templateId, formRef.current, apikey)
      .then(result => {
        console.log(result.text);
        setSubmitSuccess(true);
        setSubmitError(null); // Limpia el error si el envío es exitoso
        setTimeout(() => window.location.reload(), 3000);
      })
      .catch(error => {
        console.error(error);
        setSubmitError("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.");
      });
  };

  const handlePhoneChange = (event) => {
    let phone = event.target.value.replace(/\D/g, '');
    phone = phone.slice(0, 9);
    event.target.value = phone;

    if (phone.length !== 9) {
      event.target.setCustomValidity('El número de teléfono debe tener exactamente 9 dígitos.');
    } else {
      event.target.setCustomValidity('');
    }
  };

  return (
    <Form className="contactForm " ref={formRef} noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 formulario">
        <Form.Group className="Nombre" as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre completo:*</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre y apellido"
            name='name'
          />
          <Form.Control.Feedback type="invalid">
            Por favor, introduce tu nombre y apellidos.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04 correo">
          <Form.Label>Email:*</Form.Label>
          <Form.Control name='email' type="email" placeholder="Email" required />
          <Form.Control.Feedback type="invalid">
            Email no válido
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="Nombre" as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Asunto:*</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Explica brevemente tu mensaje"
            name='asunto'
            
          />
          <Form.Control.Feedback type="invalid">
            Por favor, el asunto del mensaje
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="Nombre" as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Número de Teléfono:</Form.Label>
          <Form.Control
            name='telefono'
            type="text" 
            placeholder="Introduzca su número si lo desea"
            onChange={handlePhoneChange}
          />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcion">
          <Form.Label>Hola estoy interesado en...*</Form.Label>
          <Form.Control as="textarea" rows={3} required name='message' />
        </Form.Group>
        </Row>
      <Button id="button" type="submit">Enviar</Button>
      {submitSuccess && <p>¡El mensaje se envió correctamente! La página se actualizará en unos segundos.</p>}
    </Form>
  );
}

export default contactForm;
