import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Gridimg from './Gridimg';

import { Fade } from 'react-awesome-reveal';

const imagePaths01 = [
  require('../images/img-02.jpg'),
  require('../images/img-03.jpg'),
  require('../images/img-04.jpg'),
  require('../images/img-05.jpg'),
  require('../images/img-06.jpg'),
  require('../images/img-07.jpg'),
  require('../images/img-08.jpg'),
  require('../images/img-09.jpg'),
];

export default function About() {
  return (
  <>
    <section className="about">
      <div className="about__header">
        <Container>
          <Row>
            <Col>
              <Fade cascade triggerOnce direction="left">
                <div className='about__header__content'>
                  <h3 className="text--subtitle text-center">Acerca de CLDEV</h3>
                </div>  
                <div className="about__content">
                  <p className='text--body text--white text-center'>
                    Somos un equipo de expertos en marketing digital apasionados por ayudar a las empresas a alcanzar sus objetivos en línea. Con años de experiencia en diseño web y estrategias de conversión, estamos aquí para potenciar tu presencia en línea y maximizar tu retorno de inversión.
                  </p>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='polygon'>
        <div className='polygon__bottom--right'></div>
      </div>
      <section className='about__gallery'>
        <Gridimg 
          imagePaths = {imagePaths01}
        />
      </section>
    </section>
  </>
  )
}
