import React from "react";
import { Carousel, Row } from "react-bootstrap";
import Leonas from "./leonas.jpg";
import Rugby from "./rugby.jpg";
import Basket from "./basket.jpg";

export const CarouselPortada = () => {
  return (
    <div id="carousel-portada" className="no-gutters">
      <Carousel
        id="carousel-portada"
        indicators=""
        prevIcon={
          <span aria-hidden="true" className="carousel-control-prev-icon" />
        }
        nextIcon={
          <span aria-hidden="true" className="carousel-control-next-icon" />
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
    </div>
  );
};
