import "./Navigator.css";
import { Container, Nav, Navbar, Image, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <nav>
      <Navbar expand="lg" className="bg-body-tertiary custom-text">
        <Container>
          <Link to="/" className="link">
            <Navbar.Brand href="#icon">
              <Image
                src="public/Logo_Green_Life.png"
                alt="Green Life Logo"
                fluid
              />
              Green life
            </Navbar.Brand>
          </Link>

          <Nav className="ml-auto">
            <Link to="/" className="link">
              <NavLink as="span">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-user-circle"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
              </NavLink>
            </Link>
          </Nav>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <Nav className="mx-auto bold-text">
              <Link to="/eventos" className="link">
                <Nav.Link as="span" className="mx-5 V">
                  Huella de carbono
                </Nav.Link>
              </Link>
              <Link to="/eventos" className="link">
                <Nav.Link as="span" className="mx-5">
                  Eventos
                </Nav.Link>
              </Link>
              <Link to="/eventos" className="link">
                <Nav.Link as="span" className="mx-5">
                  Esquejes
                </Nav.Link>
              </Link>
              <Link to="/eventos" className="link">
                <Nav.Link as="span" className="mx-5">
                  Comunidad
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Toggle>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="bg-body-tertiary custom-text">
        <Container className="custom-border-container">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto bold-text">
              <Link to="/eventos" className="link">
                <Nav.Link as="span" className="mx-5 V">
                  Huella de carbono
                </Nav.Link>
              </Link>
              <Link to="/eventos" className="link">
                <Nav.Link as="span" className="mx-5">
                  Eventos
                </Nav.Link>
              </Link>
              <Link to="/eventos" className="link">
                <Nav.Link as="span" className="mx-5">
                  Esquejes
                </Nav.Link>
              </Link>
              <Link to="/eventos" className="link">
                <Nav.Link as="span" className="mx-5">
                  Comunidad
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};
export default Navigator;
