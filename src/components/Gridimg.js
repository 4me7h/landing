import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import { Fade } from 'react-awesome-reveal';

const imagePaths = [
    require('../images/img-02.jpg'),
    require('../images/img-20.jpg'),
    require('../images/img-03.jpg'),
    require('../images/img-04.jpg'),
    require('../images/img-05.jpg'),
    require('../images/img-07.jpg'),
    require('../images/img-08.jpg'),
    require('../images/img-09.jpg'),
    require('../images/img-10.jpg'),
];

const Gridimg = () => {

    const images = imagePaths.map((path, index) => ({
        id: index +1,
        src: path,
        alt: `image-${index+1}`,
    }));

    return(
        <section className="gridimg">
            <Container>
                <Row>
                    <Col>
                        <div className="gridimg__container">
                            <div className="gridimg__content">
                                <Fade cascade>
                                <ul className="gridimg__list">
                                    {images.map((image) =>(
                                        <li key={image.id} className="gridimg__item">
                                            <img className="gridimg__img" src={image.src} alt={image.alt} />
                                        </li>
                                    ))}
                                </ul>
                                </Fade>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Gridimg;