import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import image02 from '../images/img-02.jpg';
import image03 from '../images/img-03.jpg';
import image04 from '../images/img-04.jpg';

import image05 from '../images/img-05.jpg';
import image06 from '../images/img-06.jpg';
import image07 from '../images/img-07.jpg';

export default function About() {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col>
            <div className="about__container">
              <div className="about__header">
                <h3 className="text--subtitle">Acerca de</h3>
              </div>
              <div className="about__lead">
                <p className="text--lead">
                  <span className="lighted">Descubre un mundo de experiencias únicas y eventos inolvidables con [Nombre de tu Empresa/Evento]</span>. Nos especializamos en la creación y ejecución de eventos que dejan huella, ya sea una boda, conferencia, concierto o cualquier celebración especial. 
                </p>
              </div>
              <div className="about__images-grid">
                <img className="about__images-grid__item" alt="image" src={image02}/>
                <img className="about__images-grid__item" alt="image1" src={image03}/>
                <img className="about__images-grid__item" alt="image2" src={image04}/>
              </div>
              <div className="about__content">
                <p className="text--body">
                  <span className='lighted'>¡Explora nuestras ofertas y haz de tu próximo evento algo extraordinario!</span> 
                </p>
                <p className="text--body">
                  En [Nombre de tu Empresa/Evento], creemos que cada momento merece ser celebrado de manera única. Nuestra historia comenzó con la pasión por la creación de eventos que van más allá de las expectativas.
                </p>
              </div>  
              <div className="about__images-grid">
                <img className="about__images-grid__item" alt="image" src={image05}/>
                <img className="about__images-grid__item" alt="image1" src={image06}/>
                <img className="about__images-grid__item" alt="image2" src={image07}/>
              </div>
              <div className="about__content">
                <p className="text--body">
                  Nos enorgullece contar con un equipo de profesionales apasionados y dedicados que trabajan incansablemente para convertir tus sueños en realidad.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
