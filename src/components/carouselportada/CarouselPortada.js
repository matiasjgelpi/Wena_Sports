import React from "react";
import { Carousel, Row} from "react-bootstrap";
import Leonas from "./leonas.jpg";
import Rugby from "./rugby.jpg";
import Basket from "./basket.jpg";


export const CarouselPortada = () => {
  return (

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

  );
};
