import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import imgBackground from '../images/img-07.jpg';

const Banner = () => {
    const backgroundImage = `url(${imgBackground})`;

    return (
        
        <section className="banner--img" style={{backgroundImage: `${backgroundImage}`}}>
            <div className="banner__overlay"></div>
            <Container>
                <Row>
                    <Col>
                        <div className="banner__content">
                            <h1 className="text--title">Vepo</h1>
                            <h2 className="text--slogan">Cultivando sustentabilidad, cosechando bienestar, donde tú eres nuestra prioridad.</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;