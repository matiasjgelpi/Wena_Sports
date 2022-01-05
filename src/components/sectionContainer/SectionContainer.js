import { useParams } from "react-router-dom";
import bgSection from "./bgSection.png";
import Info from "../info/Info";
import Eventos from "../eventos/Eventos";
import Nosotros from "../nosotros/Nosotros";
import Container from "../primitives/Container";
import Heading from "../primitives/Heading";
import Span from "../primitives/Span";



export const SectionContainer = () => {
  const { cat } = useParams();

  return (
    <Container
      className="section-container"
      style={{ backgroundImage: `url(${bgSection})` }}
    >
      <Container className="section-info">
        <Heading level="1" className="section-title">
          {cat !== undefined &&
            (cat === "info" ? "INFORMACIÓN ÚTIL" : cat.toUpperCase())}
        </Heading>
        <Span className="section-span" />
      </Container>

      {(cat === "info" && <Info />) ||
        (cat === "eventos" && <Eventos />) ||
        (cat === "nosotros" && <Nosotros />)}
    </Container>
  );
};
