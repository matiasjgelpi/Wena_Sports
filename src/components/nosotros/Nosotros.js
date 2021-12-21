import { useState } from "react";
import Container from "../primitives/Container";
import Heading from "../primitives/Heading";
import Text from "../primitives/Text";
import Carousel from "react-bootstrap/Carousel";

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

      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src={canterbury} height="65px" width="150px" alt="" />
          </div>
          <div class="slide">
            <img src={cat} height="65px" width="150px" alt="" />
          </div>
          <div class="slide">
            <img src={deva} height="65px" width="150px" alt="" />
          </div>
          <div class="slide">
            <img src={gilbert} height="65px" width="150px" alt="" />
          </div>
          <div class="slide">
            <img src={imperial} height="65px" width="150px" alt="" />
          </div>
          <div class="slide">
            <img src={paty} height="65px" width="150px" alt="" />
          </div>
          <div class="slide">
            <img src={powerade} height="65px" width="150px" alt="" />
          </div>
          <div class="slide">
            <img src={sancor} height="65px" width="150px" alt="" />
          </div>
          <div class="slide">
            <img src={tcl} height="65px" width="150px" alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Nosotros;
