import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgBackground from '../images/img-07.jpg';

const Hero = () => {
    const backgroundImage = `url(${imgBackground})`;

    return (
        
        <section className="hero--img" style={{backgroundImage: `${backgroundImage}`}}>
            <div className="hero__overlay"></div>
            <Container>
                <Row>
                    <Col>
                        <div className="hero__content">
                            <h1 className="text--title">#seamos justos</h1>
                            <h2 className="text--slogan">Justo Tomás Hernández</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero;