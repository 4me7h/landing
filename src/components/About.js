import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col>
            <div className="about__container">
              <div className="about__header">
                <h3 className="text--subtitle text-center">Biografía</h3>
              </div>
              <div className="about__content">
                <p className='about__paragraph text-body'>
                  <strong>Justo Tomás Hernández</strong> es un dedicado líder comunitario con profundos vínculos en Chiapas. Graduado con honores en Ciencias Políticas por la <a href="https://www.unach.mx/">Universidad Autónoma de Chiapas</a>, Justo ha dedicado su vida a servir a su comunidad desde una edad temprana.
                </p>
                <p className='about__paragraph text-body'>
                  Proveniente de una familia comprometida con la justicia social, Justo ha trabajado incansablemente en proyectos locales para mejorar las condiciones de vida de sus conciudadanos. Su trayectoria profesional incluye roles destacados en organizaciones no gubernamentales, donde ha liderado iniciativas exitosas para promover la igualdad de oportunidades y la participación ciudadana.
                </p>
              </div>
              <div className="gallery">
                <ul className="gallery__container">
                  <li className="gallery__item"></li>
                  <li className="gallery__item"></li>
                  <li className="gallery__item"></li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
