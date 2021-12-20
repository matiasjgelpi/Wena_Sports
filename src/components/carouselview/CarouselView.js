import { Container } from "react-bootstrap";
import { CarouselPortada } from "../carouselportada/CarouselPortada";
import { ElementosCarouselGroup } from "../elementoscarouselgroup/ElementosCarouselGroup";


export const CarouselView = () => {
  return (
    <Container id="carousel" className="justify-content-center">
      <CarouselPortada></CarouselPortada>
      <ElementosCarouselGroup />
    </Container>
  );
};
