import { LogoFondoCarousel } from "../logofondocarousel/LogoFondoCarousel";
import { ParalelogramosGroup } from "../paralelogramosgroup/ParalelogramosGroup";
import { RectanguloRojoCarousel } from "../rectangulorojocarusel/RectanguloRojoCarousel";
import { SubtituloCarousel } from "../subtitulocarousel/SubtituloCarousel";

export const ElementosCarouselGroup = () => {
  return (
    <>
      <RectanguloRojoCarousel />
      <ParalelogramosGroup />
      <LogoFondoCarousel />
      <SubtituloCarousel />
    </>
  );
};
