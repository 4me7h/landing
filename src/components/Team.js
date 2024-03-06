import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Team = () => {
    return(
        <div className="team">
            <Container>
                <Row>
                    <Col>
                        <div className="team__container">
                            <div className="team__header">
                                <h2 className="text--subtitle">Equipo</h2>
                            </div>
                            <div className="team__content">
                                <p className="text--body">
                                    ¿Tienes preguntas o deseas obtener más información sobre nuestros servicios? Estamos aquí para ayudarte. Completa el formulario a continuación, y nos pondremos en contacto contigo lo antes posible.
                                </p>
                                <p className="text--body">
                                    Gracias por considerar [Nombre de tu Empresa/Evento] para tu próximo evento especial. ¡Esperamos trabajar contigo para crear recuerdos que perduren toda la vida!
                                </p>                          
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team;