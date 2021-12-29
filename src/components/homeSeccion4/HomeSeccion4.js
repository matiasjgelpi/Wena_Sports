import { Carousel, Row, Col, Image } from "react-bootstrap";
import ImgPartido from "./partido.jpg";
import ImgEquipo from "./equipo.jpg";
import ImgPileta from "./pileta.jpg";
import ImgClub from "./club.jpg";

export const HomeSeccion4 = () => {
  return (
    <Row className="home seccion4">
      <Col id="col-titulo" className="" lg={"6"}>
        <div className="rectangulo-amarillo"></div>
        <h3>VENUE 2021/2022</h3>
        <h4>DONDE TOMARÁ LUGAR</h4>
      </Col>
      <Col id="col-carousel" className="" lg={"6"}>
        <p>
          La sede de WENA Sports en 21/22 será{" "}
          <b>“La Villa” del Club Atlético Tostado</b>, ubicada en Tostado, Santa
          Fé. Será sede de dos eventos, compuesto por 8 deportes, y más de 800
          participantes, en los que se encuentran atletas, espectadores, agentes
          externos y organizadores..
        </p>
        <Carousel
          className="carousel-s4"
          indicators=""
          prevIcon={
            <span aria-hidden="true" className="prev-icon" />
          }
          nextIcon={
            <span aria-hidden="true" className="next-icon" />
          }
        >
          <Carousel.Item className="carousel-item">
            <img className="d-block w-100" src={ImgClub} alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={ImgPartido} alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={ImgPileta} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={ImgEquipo} alt="fourth slide" />
          </Carousel.Item>
        </Carousel>
        <p id="direccion">Av. Rivadavia 1145, Tostado, Santa Fe</p>
      </Col>
    </Row>
  );
};
