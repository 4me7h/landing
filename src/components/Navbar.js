import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

import { useState } from "react";
import {Link} from 'react-scroll';

import logo from "../images/logo-blanco.png";

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
                                <img className="navBar__logo" src={logo} alt="logo" />
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
                                    <li className="navBar__nav__item"><Link href="#" to="inicio" smooth={true} duration={500}  activeClassName="active">inicio</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="nosotros" smooth={true} duration={500}>nosotros</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="servicios" smooth={true} duration={500}>servicios</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="galeria" smooth={true} duration={500}>galeria</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="contacto">contacto</Link></li>
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