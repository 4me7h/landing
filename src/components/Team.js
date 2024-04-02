import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardTeam from './CardTeam';

import image01 from '../images/img-21.jpg';

import { Fade } from 'react-awesome-reveal';

const Team = () => {
    return(
        <div className="team">
            <Container>
                <Row>
                    <Col>
                        <div className="team__container">
                            <div className="team__header">
                                <Fade cascade triggerOne direction="up"> 
                                <div className='team__header__content'>
                                    <h3 className="text--subtitle">Conoce a Nuestro Equipo</h3>
                                    <hr className='hr--basic'/>
                                </div>  
                                <div className="team__content">
                                    <p className="text--lead text-uppercase">
                                        Unidos por nuestra comunidad,<br />guiados por nuestro compromiso.
                                    </p>    
                                </div>
                                <div className='team__content'>
                                    <p className='text--small'>
                                        Queremos presentarte a las personas detrás de nuestra visión. Cada miembro de nuestro equipo está comprometido con el bienestar de nuestra comunidad y dedicado a trabajar incansablemente para lograr un Chiapas más próspero y equitativo. Descubre a quienes lideran el cambio y se comprometen con la excelencia en cada paso del camino.
                                    </p>
                                </div>
                                </Fade>
                            </div>
                            <ul className='team__list'>
                                <li className='team__list__item'>
                                    <CardTeam 
                                        image = {image01}
                                        name = "Lic. Justo Tomás Hernández"
                                        description = "Presidente"
                                    />
                                </li>
                                <li className='team__list__item'>
                                    <CardTeam 
                                        image = {image01}
                                        name = "Lic. Justo Tomás Hernández"
                                        description = "Presidente"
                                    />
                                </li>
                                <li className='team__list__item'>
                                    <CardTeam 
                                        image = {image01}
                                        name = "Lic. Justo Tomás Hernández"
                                        description = "Presidente"
                                    />
                                </li>
                                <li className='team__list__item'>
                                    <CardTeam 
                                        image = {image01}
                                        name = "Lic. Justo Tomás Hernández"
                                        description = "Presidente"
                                    />
                                </li>
                                <li className='team__list__item'>
                                    <CardTeam 
                                        image = {image01}
                                        name = "Lic. Justo Tomás Hernández"
                                        description = "Presidente"
                                    />
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team;