import "./Navigator.css";
import { Container, Nav, Navbar, Image, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom"

const Navigator =() => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary custom-text">
        <Container>
          <Link to="/" className="link">
            <Navbar.Brand as="span">
              <Image
                src="public/Logo_Green_Life.png"
                alt="Green Life Logo"
                fluid
              />
              Green life
            </Navbar.Brand>
          </Link>

          <Nav className="ml-auto">
            <Link to="login" className="link">
              <NavLink as="span">
                <h3>logo usuario</h3>
              </NavLink>
            </Link>
          </Nav>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>

      {/*  por si teniais dudas de como se comentaba*/}

      <Navbar expand="lg" className="bg-body-tertiary custom-text">
        <Container className="custom-border-container">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto bold-text">
              <Link to="/huellaCarbono" className="link">
                <Nav.Link as="span" className="mx-5 V">Huella de carbono</Nav.Link>
              </Link>
              <Link to="/eventos" className="link">
                <Nav.Link as="span" >Eventos</Nav.Link>
              </Link>
              <Link to="/esquejes" className="link">
                <Nav.Link as="span" className="mx-5">Esquejes</Nav.Link>
              </Link>
              <Link to="/comunidad"className="link">
                <Nav.Link as="span" className="mx-5">Comunidad</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    </>
 
  );
}
export default Navigator;
