import "./Navigator.css";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigator() {
  return (
    <>
      <div>
        <div className="menu1">
          <Container className="order">
          <Link to="/">
              <img
                className="brandIcono"
                src="public/Logo_Green_Life.png"
                alt="Green Life Logo"
              />
            </Link>
            <p>Green life</p>
            <img
            className="loginIcono"
            src=".\public\avatar.png"
            alt="logo Login"
          />
          </Container>
          
        </div>
        

        <div className="menu2">
        <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/huellaCarbono" className="barra-Menu">
              <Nav.Link href="#home">Huella de Carbono</Nav.Link>
            </Link>
            <Link to="/eventos" className="barra-Menu">
              <Nav.Link href="#home">Eventos</Nav.Link>
            </Link>
            <Link to="/esquejes" className="barra-Menu">
              <Nav.Link href="#home">Esquejes</Nav.Link>
            </Link>
            <Link to="/comunidad" className="barra-Menu">
              <Nav.Link href="#home">Comunidad</Nav.Link>
            </Link>
            <Link to="/contactanos" className="barra-Menu">
              <Nav.Link href="#home">Contactanos</Nav.Link>
            </Link>
            <Link to="/sobreNosotros" className="barra-Menu">
              <Nav.Link href="#home">Sobre nosotros</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
      </div>
    </>
  );
}
export default Navigator;
