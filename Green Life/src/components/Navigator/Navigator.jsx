import "./Navigator.css";
import { Container, Nav, Navbar, Image, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom"

function Navigator() {
  return (
    <>
      <nav>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#icon">
            <Link to= "/" className="moveComponent link">
              <Image
                src="public/Logo_Green_Life.png"
                alt="Green Life Logo"
              />
              <h1>Green life</h1>
              </Link>
            </Navbar.Brand>

            <Nav className="ml-auto">
              <NavLink href="#span">
                <Link to="/"></Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-user-circle"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
              </NavLink>
            </Nav>
          </Container>
        </Navbar>

        <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-end"/>
          <Container className=" justify-content-end custom-border-container navInferior ">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto bold-text ">
              <Link to= "/huella" className="link">
                <Nav.Link href="#span">
                  Huella de carbono
                </Nav.Link>
                </Link>
                <Link to= "/eventos" className="link">
                <Nav.Link href="#span">
                  Eventos
                </Nav.Link>
                </Link>
                <Link to= "/esquejes" className="link">
                <Nav.Link href="#span">
                Esquejes
                </Nav.Link>
                </Link>
                <Link to= "/esquejes" className="link">
                <Nav.Link href="#span">
                Esquejes
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
                <Navbar>
                  <Container>
                    <Navbar.Brand href="#icon" >
                        <Image className="logo" src="public/Logo_Green_Life.png" alt="Green Life Logo" fluid />
                        Green life          
                    </Navbar.Brand>

                    <Nav className='ml-auto'>
                        <NavLink href='#login'>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user-circle"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          strokeWidth="1"
                          stroke="#000000"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                          <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                        </NavLink>
                    </Nav>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>

            <Navbar expand="lg" className="bg-body-tertiary custom-text">
                <Container className='custom-border-container'>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto bold-text">
                            <Nav.Link href="#calculator" className='mx-5'>Huella de carbono</Nav.Link>
                            <Nav.Link href="#events" className='mx-5'>Eventos</Nav.Link>
                            <Nav.Link href="#plants"className='mx-5'>Esquejes</Nav.Link>
                            <Nav.Link href="#community"className='mx-5'>Comunidad</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </nav>
        </>
    );
}
export default Navigator;
