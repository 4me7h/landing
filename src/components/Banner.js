import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import imgBackground from '../images/img-07.jpg';

import { useParallax } from 'react-scroll-parallax';

const Banner = ({title, subtitle}) => {
    const backgroundImage = `url(${imgBackground})`;
    const { ref } = useParallax({ speed: 10 });

    return (
        
        <section className="banner--img" style={{backgroundImage: `${backgroundImage}`}}>
            <div className="banner__overlay"></div>
            <Container>
                <Row>
                    <Col>
                        <div ref={ref} className="banner__content">
                            <h1 className="text--title">{title}</h1>
                            <h2 className="text--slogan">{subtitle}</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;