import { Container } from "react-bootstrap";
import Loginform from "../../components/LoginForm/Loginform";
import { Link } from "react-router-dom";
import "./LoginPages.css";

const AboutUsPages = () => {
  return (
    <Container>
      <div className="top">
        <h2 className="formularioH2">Iniciar sesión en Greenlife</h2>
      </div>
      <Loginform />

      <h6>
        <Link to="/singup"className="regist">Regístrate </Link> si aún no tienes una cuenta.
      </h6>
    </Container>
  );
};

export default AboutUsPages;