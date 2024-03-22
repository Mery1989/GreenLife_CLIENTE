import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Description.css';

function Description() {
    return (
        <>

            <Container className='containerDescription'>

                <Row className='column'>
                    <Col sm>
                        <h4 className='titlesDescription'>Historia y Orígenes</h4>
                        <p className='contentDescription'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </Col>
                    <Col sm>
                        <h4 className='titlesDescription'>Misión y Visión</h4>
                        <p className='contentDescription'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </Col>
                    <Col sm>
                        <h4 className='titlesDescription'>Valores Fundamentales</h4>
                        <p className='contentDescription'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </Col>
                </Row>

                <Row className='column'>
                    <Col sm>
                        <h4 className=''>Equipo y Fundadores</h4>
                        <p className='contentDescription'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </Col>
                    <Col sm>
                        <h4 className='titleGreen titlesDescription'>Compromiso con la Sostenibilidad</h4>
                        <p className='contentDescription'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </Col>
                    <Col sm>
                        <h4 className='titlesDescription'>Colaboraciones y Alianzas</h4>
                        <p className='contentDescription'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </Col>
                </Row>

            </Container>


        </>
    );
}

export default Description;