import { Container } from "react-bootstrap";
import Rugby from "./rugby-mobile.jpg";
// import { CarouselView } from "../carouselview/CarouselView";
// import { HomeSeccion2 } from "../homeSeccion2/HomeSeccion2";
// import { HomeSeccion3 } from "../homeSeccion3/HomeSeccion3";
// import { HomeSeccion4 } from "../homeSeccion4/HomeSeccion4";



export const HomeResponsive = () => {

  
  return  (
    <Container fluid id="home-container" className="no-gutters">
        <div className="home-responsive-container">
        <img src={Rugby} alt=""/>
        </div>
        


    </Container>
  );
};
