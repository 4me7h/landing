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
                                <Fade triggerOnce direction='right' cascade>
                                    <h1 className="text--title">Landing Pages</h1>
                                    <h2 className="text--subtitle d-none d-md-block">Bienvenido a la solución definitiva para tus necesidades de marketing digital.</h2>
                                    {/* <h3 className='text--slogan'><span className='lighted'>En nuestra plataforma, te ofrecemos las herramientas y la experiencia necesarias para desarrollar landing pages efectivas que</span><span className='lighted lighted--secondary d-none d-md-inline-block'>impulsen tus ventas y potencien el crecimiento de tu negocio.</span></h3> */}
                                </Fade>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='polygon'>
                <div className='polygon__top--left'></div>
            </div>
        </section>
    )
}

export default Hero;