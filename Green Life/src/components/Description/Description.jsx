import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import './Description.css';

function Description() {
    return (
        <>
        
            <Container className='containerDescription'>

                <Row className='column'>
                   <Col sm={12} md={4}>
                        <h4 className='titlesDescription'>Historia y Orígenes</h4>
                        <p className='contentDescription'>GreenLife ha nacido para mejorar las costumbres de todas las personas y hacer un mundo mejor. </p>
                    </Col>
                   <Col sm={12} md={4}>
                        <h4 className='titlesDescription'>Misión y Visión</h4>
                        <p className='contentDescription'>Mejorar las costumbres ambientales de las personas promoviendo una vida sostenible. </p>
                    </Col>
                   <Col sm={12} md={4}>
                        <h4 className='titlesDescription'>Valores Fundamentales</h4>
                        <p className='contentDescription'>Con una serie de pequeñas acciones entre todos podemos hacer una civilización mas ecológica. </p>
                    </Col>
                </Row>

                <Row className='column'>
                   <Col sm={12} md={4}>
                        <h4 className='titlesDescription'>Equipo y Fundadores</h4>
                        <p className='contentDescription'>Somos cuatro personas trabajadoras buscando crear un mundo mejor. </p>
                    </Col>
                   <Col sm={12} md={4}>
                        <h4 className='titleGreen titlesDescription'>Compromiso con la Sostenibilidad</h4>
                        <p className='contentDescription'>Mejoraremos todas las costumbres de nuestros usuarios provocando una mejora en su huella de carbono. </p>
                    </Col>
                   <Col sm={12} md={4}>
                        <h4 className='titlesDescription'>Colaboraciones y Alianzas</h4>
                        <p className='contentDescription'>Empresas con el deseo de mostrar al mundo que buscan ser mejores ambientalmente hablando y que quieren participar en el proceso. </p>
                    </Col>
                </Row>

                <Carousel className='d-md-none' interval={7000}>
                    <Carousel.Item >
                        <Row className='section'>
                            <Col sm={12} md={4}>
                                <h4 className='titlesDescription'>Historia y Orígenes</h4>
                                <p className='contentDescription'>GreenLife ha nacido para mejorar las costumbres de todas las personas y hacer un mundo mejor.  </p>
                            </Col>
                            <Col sm={12} md={4}>
                                <h4 className='titlesDescription'>Misión y Visión</h4>
                                <p className='contentDescription'>Mejorar las costumbres ambientales de las personas promoviendo una vida sostenible. </p>
                            </Col>
                            <Col sm={12} md={4}>
                                <h4 className='titlesDescription'>Valores Fundamentales</h4>
                                <p className='contentDescription'>Con una serie de pequeñas acciones entre todos podemos hacer una civilización mas ecológica. </p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Row className='section'>
                            <Col sm={12} md={4}>
                                <h4 className='titlesDescription'>Equipo y Fundadores</h4>
                                <p className='contentDescription'>Somos cuatro personas trabajadoras buscando crear un mundo mejor.  </p>
                            </Col>
                            <Col sm={12} md={4}>
                                <h4 className='titlesDescription titleGreen'>Compromiso con la Sostenibilidad</h4>
                                <p className='contentDescription'>Mejorar las costumbres ambientales de las personas promoviendo una vida sostenible. </p>
                            </Col>
                            <Col sm={12} md={4}>
                                <h4 className='titlesDescription'>Colaboraciones y Alianzas</h4>
                                <p className='contentDescription'>Con una serie de pequeñas acciones entre todos podemos hacer una civilización mas ecológica. </p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>

            </Container>


        </>
    );
}

export default Description;