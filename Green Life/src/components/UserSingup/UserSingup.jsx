
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './UserSingup.css';
import { useState, useEffect  } from 'react';
import userService from "../../services/UserService";
function FormSingup() {
  const [validated, setValidated] = useState(false);
  const [redirectTo, setRedirectTo] = useState(null);
  const redirectUrl = '/';
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      const formData = {
        name: form.elements.validationCustom01.value,
        email: form.elements.validationCustom04.value,
        username: form.elements.validationCustomUsername.value,
        password: form.elements.formBasicPassword.value,
        datebirth: form.elements.validationCustom05.value,
        gender: form.elements.validationCustomGender.value,
        location: form.elements.validationCustom06.value, 
        description: form.elements.descripcion.value,
      };

      try {
  
        await userService.sendSingup(formData);

        setValidated(false);
        setRedirectTo(redirectUrl);
      } catch (error) {
        console.error('Error al enviar el formulario:', error.response.data);
      }
    }

    setValidated(true);
  };
  useEffect(() => {
    if (redirectTo) {
      window.location.href = redirectTo; 
    }
  }, [redirectTo]);

  return (
    <Form className="nombre"noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre completo:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre y apellido"
          />
          <Form.Control.Feedback type="invalid">
              Introduce tu nombre y apellidos
            </Form.Control.Feedback>
       
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Email" required />
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
              placeholder="Nombre de usuario"
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
        <Form.Control type="password" placeholder="Debe contener al menos 8 caracteres, una mayúscula, una minúscula y un carácter especial. " />
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
        <Form.Group as={Col} md="4" controlId="validationCustom06">
          <Form.Label>Localización</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Introduce tu localización"
          />
          <Form.Control.Feedback type="invalid">
              Introduce tu Localización
            </Form.Control.Feedback>
       
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Check className="check"
          required
          label="Aceptar términos y condiciones"
          feedback="Debes aceptar términos y condiciones antes de continuar."
          feedbackType="invalid"
        />
      </Form.Group></Row>
      <Button id="button" type="submit">Registrarse</Button>
    </Form>
  );
  
}

export default FormSingup;