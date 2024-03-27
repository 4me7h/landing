import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from './Cards';
import Banner from './Banner';

import image01 from '../images/img-21.jpg';
import image02 from '../images/img-22.jpg';
import image03 from '../images/img-23.jpg';
import image04 from '../images/img-24.jpg';
import image05 from '../images/img-25.jpg';

export default function Services() {
  return (
    <div className="services">
      <Banner 
        title = "PROPUESTAS"
        subtitle = "Hola, Chiapas! Soy Justo Tomás Hernández y estoy emocionado de presentarles mi plataforma para un Chiapas más próspero y equitativo. Juntos, podemos construir un futuro brillante para nuestra comunidad."
      />
      <Container>
        <Row>
          <Col>
            <div className="services__container">
              <div className="services__content">
                <ul className="services__list">
                  <li className="services__item">
                    <Card 
                      image = {image01}
                      name = "1. Educación para Todos"
                      description = "Garantizaremos acceso universal a una educación de calidad, invirtiendo en infraestructura escolar y programas de capacitación para maestros. Ningún niño chiapaneco se quedará atrás en su búsqueda de conocimiento."
                    />
                  </li>
                  <li className="services__item">
                    <Card 
                      image = {image02}
                      name = "2. Desarrollo Económico Sostenible"
                      description = "Impulsaremos el crecimiento económico mediante el apoyo a pequeñas empresas locales y la promoción de industrias sostenibles. Crearemos oportunidades de empleo para todos, especialmente en las zonas rurales."
                    />
                  </li>
                  <li className="services__item">
                    <Card 
                      image = {image03}
                      name = "3. Salud y Bienestar"
                      description = "Mejoraremos el acceso a servicios de salud de calidad en toda la región, construyendo nuevos centros de salud y fortaleciendo los programas de atención primaria. La salud de nuestros ciudadanos es nuestra prioridad."
                    />
                  </li>
                  <li className="services__item">
                    <Card 
                      image = {image04}
                      name = "4. Preservación del Medio Ambiente"
                      description = "Protegeremos nuestros recursos naturales mediante la implementación de políticas de conservación y la promoción de energías renovables. Salvaguardar el medio ambiente es crucial para las generaciones futuras."
                    />
                  </li>
                  <li className="services__item">
                    <Card 
                      image = {image05}
                      name = "5. Justicia y Seguridad"
                      description = "Fortaleceremos las instituciones de justicia y seguridad para combatir la delincuencia y garantizar la protección de nuestros ciudadanos. Trabajaremos en colaboración con la comunidad para construir un Chiapas más seguro y pacífico."
                    />
                  </li>
                </ul>
              </div>
              <div className='services__footer'>
                <p className='text--body text--body--white'>
                  Chiapas, juntos podemos lograr un cambio positivo. ¡Vota por un futuro mejor, vota por Justo Tomás Hernández!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
