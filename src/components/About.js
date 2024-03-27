import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Gridimg from './Gridimg';

import { Fade } from 'react-awesome-reveal';

const imagePaths01 = [
  require('../images/img-02.jpg'),
  require('../images/img-20.jpg'),
  require('../images/img-03.jpg'),
  require('../images/img-12.jpg'),
  require('../images/img-18.jpg'),
  require('../images/img-14.jpg'),
];

const imagePaths02 = [
  require('../images/img-04.jpg'),
  require('../images/img-05.jpg'),
  require('../images/img-07.jpg'),
];

const imagePaths03 = [
  require('../images/img-08.jpg'),
  require('../images/img-09.jpg'),
  require('../images/img-10.jpg'),
]

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
                  <h3 className="text--subtitle text--subtitle--white text-center">BIOGRAFÍA</h3>
                </div>  
                <div className="about__content">
                  <p className='about__paragraph text--body text--body--white'>
                    <strong>Justo Tomás Hernández</strong> es un dedicado líder comunitario con profundos vínculos en Chiapas. Graduado con honores en Ciencias Políticas por la <a className="link-white" href="https://www.unach.mx/">Universidad Autónoma de Chiapas</a>, Justo ha dedicado su vida a servir a su comunidad desde una edad temprana.
                  </p>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      <section className='about__gallery'>
        <Gridimg 
          imagePaths = {imagePaths01}
        />
      </section>
      <div className="about__container">
        <Container>
          <Row>
            <Col>
              <Fade cascade triggerOnce direction="left">
              <div className="about__content">
                <p className='about__paragraph text--body'>
                  Proveniente de una familia comprometida con la <span className='lighted lighted--secondary'>justicia social,</span> Justo ha trabajado incansablemente en proyectos locales para mejorar las condiciones de vida de sus conciudadanos. 
                </p>
                <p className='about__paragraph text--body'>
                  Su trayectoria profesional incluye roles destacados en organizaciones no gubernamentales, donde ha liderado iniciativas exitosas para promover la <span className="lighted lighted--secondary">igualdad de oportunidades</span> y la participación ciudadana.
                </p>
              </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      <section className='about__gallery d-none d-md-block'>
        <Gridimg 
          imagePaths = {imagePaths02}
        />
      </section>
      <div className="about__container">
        <Container>
          <Row>
            <Col>
              <Fade cascade triggerOnce direction="left">
              <div className="about__content">
                <p className='about__paragraph text--body'>
                  Como defensor de los derechos humanos y la inclusión, Justo se ha destacado en la lucha por la equidad de género y el respeto a la <span className="lighted lighted--secondary">diversidad cultural en Chiapas</span>. 
                </p>
                <p className='about__paragraph text--body'>
                  Su visión de un estado más justo y próspero lo impulsa a postularse para la presidencia, donde busca implementar <span className="lighted lighted--secondary">políticas inclusivas</span> que beneficien a todos los habitantes de la región.
                </p>
              </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      <section className='about__gallery d-none d-md-block'>
        <Gridimg 
          imagePaths = {imagePaths03}
        />
      </section>
    </section>
  </>
  )
}
