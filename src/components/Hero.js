import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgBackground from '../images/img-01.jpg';

import { Fade } from 'react-awesome-reveal';
import { useParallax } from 'react-scroll-parallax';

const Hero = () => {
    const backgroundImage = `url(${imgBackground})`;
    const { ref } = useParallax({ speed: 10 });
    return (
        <section className="hero--img" style={{backgroundImage: `${backgroundImage}`}}>
            <div className="hero__overlay"></div>
            <Container>
                <Row>
                    <Col>
                        <div ref={ref} className="hero__content">
                            <div className='hero__content__header'>
                                <Fade direction='right' cascade>
                                    <h1 className="text--title"><span className='lighted lighted--secondary'>#</span><span className='lighted'>seamosjustos</span></h1>
                                    <h2 className="text--subtitle">Podemos <span className='lighted'>Mover a Chiapas</span></h2>
                                    <h3 className='text--slogan'><span className='lighted'>Lic. Justo Tomás </span><span className='lighted lighted--secondary'>Hernández</span></h3>
                                </Fade>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero;