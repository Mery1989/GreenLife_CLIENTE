import './Navigator.css';
import {Container, Nav, Navbar, Image, NavLink} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';




function Navigator(){
    return(
        <nav>
            
            <Navbar expand="lg" className="bg-body-tertiary custom-text">
                <Container>

                    <Navbar.Brand href="#icon" >
                        <Image className="logo" src="public/Logo_Green_Life.png" alt="Green Life Logo" fluid />
                        Green life          
                    </Navbar.Brand>

                    <Nav className='ml-auto'>
                        <NavLink href='#login'>
                            <FontAwesomeIcon icon="fa-thin fa-user" /> 
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
    );
}
export default Navigator;