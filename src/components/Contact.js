import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Fade } from 'react-awesome-reveal';

const Contact = () => {
    return(
        <section className='contact'>
            <Container>
                <Row>
                    <Col>
                        <div className="headercontent__container">
                            <div className="headercontent__header">
                                <Fade cascade triggerOnce direction="up"> 
                                <div className='headercontent__header__content'>
                                    <h3 className="text--subtitle">Contáctanos</h3>
                                    <hr className='hr--basic'/>
                                </div>  
                                <div className="headercontent__content">
                                    <p className="text--lead text-uppercase">
                                        Ponte en contacto y déjanos saber como podemos ayudarte
                                    </p>    
                                </div>
                                <div className='headercontent__content'>
                                    <p className='text--small'>
                                        Queremos presentarte a las personas detrás de nuestra visión.
                                    </p>
                                </div>
                                </Fade>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;