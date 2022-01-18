
import { CarouselPortada } from "../carouselportada/CarouselPortada";
import { ElementosCarouselGroup } from "../elementoscarouselgroup/ElementosCarouselGroup";
import { PortadaMobile } from "../portadamobile/PortadaMobile";

export const CarouselView = () => {
  return (
    <>
      <CarouselPortada/>
      <PortadaMobile/>
      <ElementosCarouselGroup />
    </>
  );
};
