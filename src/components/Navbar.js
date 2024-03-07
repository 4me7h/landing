import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

import { useState } from "react";
import {Link} from 'react-scroll';

const Navbar = () => {

    const [visible, setVisible] = useState(true);
    const toggleNavbar = () => {
        setVisible(!visible);
    }

    return (
        <nav className="navBar">
            <Container>
                <Row>
                    <Col>
                        <div className="navBar__container">
                            <div className="navBar__col">
                                <Link href="#" to="hero" smooth={true} duration={500} className="navBar__brand">#seamosjustos</Link>
                            </div>
                            <div className="navBar__col">
                                <button className="navBar__toggle" onClick={toggleNavbar}>
                                    <span className="navBar__toggle__icon"></span>
                                    <span className="navBar__toggle__icon"></span>
                                    <span className="navBar__toggle__icon"></span>
                                </button>
                            </div>
                            <div className="navBar__col">
                                <ul className={`navBar__nav ${visible ? 'visible' : ''}`}>
                                    <li className="navBar__nav__item"><Link href="#" to="hero" smooth={true} duration={500}  activeClassName="active">Inicio</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="about" smooth={true} duration={500}>Biografía</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="services" smooth={true} duration={500}>Propuestas</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="team" smooth={true} duration={500}>Equipo</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="contact" smooth={true} duration={500}>Contacto</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </nav>
    ) 
}
export default Navbar;