import "./Navigator.css";
import { Container, Nav, Navbar, Image, NavLink } from "react-bootstrap";

const Navigator =() => {
  return (
    <nav>
      <Navbar expand="lg" className="bg-body-tertiary custom-text">
        <Container>
          <NavLink to="/">
            <Navbar.Brand as="span">
              <Image
                src="public/Logo_Green_Life.png"
                alt="Green Life Logo"
                fluid
              />
              Green life
            </Navbar.Brand>
          </NavLink>

          <Nav className="ml-auto">
            <NavLink to="login">
              <NavLink as="span">
                <h3>logo usuario</h3>
              </NavLink>
            </NavLink>
          </Nav>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>

      <Navbar expand="lg" className="bg-body-tertiary custom-text">
        <Container className="custom-border-container">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto bold-text">
              <NavLink to="/huellaCarbono">
                <Nav.Link as="span" className="mx-5 V">Huella de carbono</Nav.Link>
              </NavLink>
              <NavLink to="/eventos">
                <Nav.Link as="span" className="mx-5">Eventos</Nav.Link>
              </NavLink>
              <NavLink to="/esquejes">
                <Nav.Link as="span" className="mx-5">Esquejes</Nav.Link>
              </NavLink>
              <NavLink to="/comunidad">
                <Nav.Link as="span" className="mx-5">Comunidad</Nav.Link>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
export default Navigator;
