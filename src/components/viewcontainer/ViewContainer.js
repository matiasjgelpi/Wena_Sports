import { useParams } from "react-router-dom";
import bgSection from "./bgSection.png";
import Info from "../info/Info";
import Eventos from "../eventos/Eventos";
import Nosotros from "../nosotros/Nosotros";
import Container from "../primitives/Container";
import Heading from "../primitives/Heading";
import Span from "../primitives/Span";

export const ViewContainer = () => {
  const { cat } = useParams();

  return (
    <Container
      className="pt-5 view-container"
      style={{ backgroundImage: `url(${bgSection})` }}
    >
      <Heading level="1" className="view-section">
        {cat === "info" ? "INFORMACIÓN ÚTIL" : cat.toUpperCase()}
      </Heading>
      <Span className="view-span" />

      {(cat === "info" && <Info />) ||
        (cat === "eventos" && <Eventos />) ||
        (cat === "nosotros" && <Nosotros />)}
    </Container>
  );
};
