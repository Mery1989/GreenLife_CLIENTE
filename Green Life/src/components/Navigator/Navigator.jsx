import './Navigator.css';
import {Container, Nav, Navbar, Image, NavLink} from 'react-bootstrap';



function Navigator(){
    return(
        <nav>
            
            <Navbar expand="lg" className="bg-body-tertiary custom-text">
                <Container>

                    <Navbar.Brand href="#icon" >
                        <Image src="public/Logo_Green_Life.png" alt="Green Life Logo" fluid />
                        Green life          
                    </Navbar.Brand>

                    <Nav className='ml-auto'>
                        <NavLink href='#login'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="40" height="40"
                                viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
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
                            <Nav.Link href="#calculator" className='mx-5 V'>Huella de carbono</Nav.Link>
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