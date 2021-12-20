import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import Leonas from "./leonas.jpg";
import Rugby from "./rugby.jpg";
import Basket from "./basket.jpg";
import { Paralelogramos } from "../paralelogramos/Paralelogramos";
import { ParalelogramosGroup } from "../paralelogramosgroup/ParalelogramosGroup";

export const CarouselPortada = () => {
  return (
    <Container id="carousel" className="justify-content-center">
      <Row lg="auto">
        <Carousel
          variant="dark"
          controls="false"
          prevIcon={
            <span aria-hidden="true" className="carousel-control-prev-icon" />
          }
        >
          <Carousel.Item>
            <img className="d-block w-100" src={Rugby} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Basket} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Leonas} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Row>
      {/* <Row>
      <div id="rectangulo-rojo">
        </div>

      </Row> */}
      {/* <Row id="paralelogramos-group"   lg="6" className="justify-content-around">
        
        <Col>
          <Paralelogramos
            categoria={"FECHA"}
            dato={"22/11"}
            color_cuadro={"#adf0d1"}
          />
        </Col>
        <Col>
          <Paralelogramos
            categoria={"TORNEOS"}
            dato={"5"}
            color_cuadro={"#f2f2f2"}
          />
        </Col>
        <Col>
          <Paralelogramos
            categoria={"INSCRIPTOS"}
            dato={"160"}
            color_cuadro={"#ffff33"}
          />
        </Col>
        <Col>
          <Paralelogramos
            categoria={"DEPORTES"}
            dato={"4"}
            color_cuadro={"#ff3d2d"}
          />
        </Col>

      </Row> */}
      <ParalelogramosGroup></ParalelogramosGroup>
    </Container>
  );
};
