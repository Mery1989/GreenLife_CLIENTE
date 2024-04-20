import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import loginService from '../../services/LoginService';


function Loginform() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Realizar la solicitud de inicio de sesión
      await loginService.sendSignup({ username, password });

      window.location.href = `http://127.0.0.1:5173/user/${username}/profile`;
      
     
    } catch (error) {
      // Si hay un error en la solicitud, mostrar el mensaje de error
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Error desconocido");
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <p className="error-message">{error}</p>}
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control
          type="text"
          placeholder="Introduzca su nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Introduzca su contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button id="button" type="submit">Enviar</Button>
    </Form>
  );
}

export default Loginform;
