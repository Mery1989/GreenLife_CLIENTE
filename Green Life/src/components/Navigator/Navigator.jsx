import './Navigator.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';


function Navigator(){
    return(
        <nav>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                <Navbar.Brand href="#icon" >
                    <Image src="public/Logo_Green_Life.png" alt="Green Life Logo" fluid />
                    Green life
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#calculator">Huella de carbono</Nav.Link>
                        <Nav.Link href="#events">Eventos</Nav.Link>
                        <Nav.Link href="#plants">Esquejes</Nav.Link>
                        <Nav.Link href="#community">Comunidad</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
}
export default Navigator;