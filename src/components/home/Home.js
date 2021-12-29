import { Container } from "react-bootstrap";
import { CarouselView } from "../carouselview/CarouselView";
import { HomeSeccion2 } from "../homeSeccion2/HomeSeccion2";
import { HomeSeccion3 } from "../homeSeccion3/HomeSeccion3";
import { HomeSeccion4 } from "../homeSeccion4/HomeSeccion4";
import { Footer } from "../footer/Footer";

export const Home = () => {
  return (
    <Container id="home-container" className="justify-content-center">
      <CarouselView></CarouselView>
      <HomeSeccion2></HomeSeccion2>
      <HomeSeccion3></HomeSeccion3>
      <HomeSeccion4></HomeSeccion4>
      <Footer></Footer>
    </Container>
  );
};
