import Container from "../primitives/Container";
import Heading from "../primitives/Heading";
import Text from "../primitives/Text";
import { useState } from "react";
import basket from "../../descargables/basket.pdf";
import beach from "../../descargables/beach.pdf";
import fifa from "../../descargables/fifa.pdf";
import futbol from "../../descargables/futbol.pdf";
import hockey from "../../descargables/hockey.pdf";
import padel from "../../descargables/padel.pdf";
import rugby from "../../descargables/rugby.pdf";
import tenis from "../../descargables/tenis.pdf";
import { BiChevronRight } from "react-icons/bi";

const Info = () => {
  const [visible, setVisible] = useState("rugby");

  return (
    <Container className="info-container">
      <Heading level="3" className="info-title">
        PREGUNTAS FRECUENTES
      </Heading>
      <Container className="info-preguntas">
        <Container className="card-pregunta">
          <span>01 </span>{" "}
          <Heading level="4"> ¿cuándo es el próximo evento?</Heading>
          <Text>El 1° evento se realizará el feriado sábado 20/11.</Text>
        </Container>

        <Container className="card-pregunta">
          <span>02 </span>{" "}
          <Heading level="4">
            ¿quiénes pueden participar de wena sports?
          </Heading>
          <Text>
            Mujeres, hombres y niños, de 12 a 45 años, que aman los deportes y
            lo innovador.
          </Text>
        </Container>

        <Container className="card-pregunta">
          <span>03 </span>{" "}
          <Heading level="4">
            ¿qué deportes competirán en el próximo evento?
          </Heading>
          <Text>Hockey 5, Rugby X, Beach Volley y Fifa 21.</Text>
        </Container>
      </Container>
      <Container className="reglamento-container">
        <span></span>
        <Heading level="3">Reglamento</Heading>
        <Text>
          PODES DESCARGAR EL REGLAMENTO PARA LOS TORNEOS DE wena sports
        </Text>
        <ul>
          <li onClick={() => setVisible("rugby")}>
            <a href="#rugby" id="rugby">
              Rugby X
            </a>
          </li>
          <li onClick={() => setVisible("fifa")}>
            <a href="#fifa" id="fifa">
              Fifa 21
            </a>
          </li>
          <li onClick={() => setVisible("hockey")}>
            <a href="#hockey" id="hockey">
              Hockey 5
            </a>
          </li>
          <li onClick={() => setVisible("beach")}>
            <a href="#beach" id="beach">
              Beach Volley
            </a>
          </li>
          <li onClick={() => setVisible("basket")}>
            <a href="#basket" id="basket">
              Basketball
            </a>
          </li>
          <li onClick={() => setVisible("futbol")}>
            <a href="#futbol" id="futbol">
              Futbol 5
            </a>
          </li>
          <li onClick={() => setVisible("padel")}>
            <a href="#padel" id="padel">
              Padel
            </a>
          </li>
          <li onClick={() => setVisible("tenis")}>
            <a href="#tenis" id="tenis">
              Tenis
            </a>
          </li>
        </ul>
        <button>
          {(visible === "rugby" && (
            <a href={rugby} download={`reglamento${visible}`}>
              Descargar PDF <BiChevronRight />
            </a>
          )) ||
            (visible === "fifa" && (
              <a href={fifa} className={``} download={`reglamento${visible}`}>
                Descargar PDF <BiChevronRight />
              </a>
            )) ||
            (visible === "hockey" && (
              <a href={hockey} download={`reglamento${visible}`}>
                Descargar PDF <BiChevronRight />
              </a>
            )) ||
            (visible === "beach" && (
              <a href={beach} download={`reglamento${visible}`}>
                Descargar PDF <BiChevronRight />
              </a>
            )) ||
            (visible === "basket" && (
              <a href={basket} download={`reglamento${visible}`}>
                Descargar PDF <BiChevronRight />
              </a>
            )) ||
            (visible === "futbol" && (
              <a href={futbol} download={`reglamento${visible}`}>
                Descargar PDF <BiChevronRight />
              </a>
            )) ||
            (visible === "padel" && (
              <a href={padel} download={`reglamento${visible}`}>
                Descargar PDF <BiChevronRight />
              </a>
            )) ||
            (visible === "tenis" && (
              <a href={tenis} download={`reglamento${visible}`}>
                Descargar PDF <BiChevronRight />
              </a>
            ))}
        </button>
      </Container>
    </Container>
  );
};

export default Info;
