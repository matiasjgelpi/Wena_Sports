import Container from "../primitives/Container";
import Heading from "../primitives/Heading";
import Text from "../primitives/Text";
import Image from "../primitives/Img";

import canterbury from "./canterbury.png";
import cat from "./cat.png";
import deva from "./deva.png";
import gilbert from "./gilbert.png";
import imperial from "./imperial.png";
import paty from "./paty.png";
import powerade from "./powerade.png";
import sancor from "./sancor.png";
import tcl from "./tcl.png";

const Nosotros = () => {
  return (
    <Container className="nosotros-container">
      <Container className="nosotros-info">
        <Heading level="3">QUIÉNES SOMOS</Heading>{" "}
        <Text>
          Somos SION, una productora enfocada en la organización de eventos
          deportivos, donde buscamos fomentar el deporte en la sociedad, por
          medio de nuestros valores: pasión, respeto y compromiso.
          <br />
          <br />
          Desde 2018 como estudiantes y apasionados del deporte, hemos adquirido
          experiencias y habilidades, trabajando en conjunto con reconocidas
          instituciones y personalidades, organizando y participando en eventos
          deportivos de reconocimiento nacional e internacional.
        </Text>
      </Container>

      <Container class="slider">
        <Container class="slide-track">
          <Container class="slide">
            <Image src={canterbury} height="65px" width="150px" alt="" />
          </Container>
          <Container class="slide">
            <Image src={cat} height="65px" width="150px" alt="" />
          </Container>
          <Container class="slide">
            <Image src={deva} height="65px" width="150px" alt="" />
          </Container>
          <Container class="slide">
            <Image src={gilbert} height="65px" width="150px" alt="" />
          </Container>
          <Container class="slide">
            <Image src={imperial} height="65px" width="150px" alt="" />
          </Container>
          <Container class="slide">
            <Image src={paty} height="65px" width="150px" alt="" />
          </Container>
          <Container class="slide">
            <Image src={powerade} height="65px" width="150px" alt="" />
          </Container>
          <Container class="slide">
            <Image src={sancor} height="65px" width="150px" alt="" />
          </Container>
          <Container class="slide">
            <Image src={tcl} height="65px" width="150px" alt="" />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Nosotros;
