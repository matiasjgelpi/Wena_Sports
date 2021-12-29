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
import Span from "../primitives/Span";
import Link from "../primitives/Link";
import Button from "../primitives/Button";
import Select from "../primitives/Select";
import Option from "../primitives/Option";

const Info = () => {
  const [visible, setVisible] = useState("rugby");
  console.log(visible);

  return (
    <Container className="info-container">
      <Heading level="3" className="info-title">
        PREGUNTAS FRECUENTES
      </Heading>
      <Container className="info-preguntas">
        <Container className="card-pregunta">
          <Span>01 </Span>{" "}
          <Heading level="4"> ¿cuándo es el próximo evento?</Heading>
          <Text>El 1° evento se realizará el feriado sábado 20/11.</Text>
        </Container>

        <Container className="card-pregunta">
          <Span>02 </Span>{" "}
          <Heading level="4">
            ¿quiénes pueden participar de wena sports?
          </Heading>
          <Text>
            Mujeres, hombres y niños, de 12 a 45 años, que aman los deportes y
            lo innovador.
          </Text>
        </Container>

        <Container className="card-pregunta">
          <Span>03 </Span>{" "}
          <Heading level="4">
            ¿qué deportes competirán en el próximo evento?
          </Heading>
          <Text>Hockey 5, Rugby X, Beach Volley y Fifa 21.</Text>
        </Container>
      </Container>
      <Container className="reglamento-container">
        <Span />
        <Heading level="3">Reglamento</Heading>
        <Text>
          PODES DESCARGAR EL REGLAMENTO PARA LOS TORNEOS DE wena sports
        </Text>

        <Select onChange={(event) => setVisible(event.target.value)}>
          <Option value="rugby">Rugby X</Option>
          <Option value="hockey">Hockey 5</Option>
          <Option value="beach">Beach Volley</Option>
          <Option value="fifa">Fifa 22</Option>
          <Option value="tenis">Tenis</Option>
          <Option value="futbol">Fútbol 5</Option>
          <Option value="padel">Padel</Option>
          <Option value="basket">Basketball</Option>
        </Select>
        <Button>
          {(visible === "rugby" && (
            <Link href={rugby} download={`reglamento${visible}`}>
              Descargar PDF <BiChevronRight />
            </Link>
          )) ||
            (visible === "fifa" && (
              <Link href={fifa} download={`reglamento${visible}`}>
                Descargar PDF <BiChevronRight />
              </Link>
            )) ||
            (visible === "hockey" && (
              <Link href={hockey} download={`reglamento${visible}`}>
                Descargar PDF <BiChevronRight />
              </Link>
            )) ||
            (visible === "beach" && (
              <Link href={beach} download={`reglamento${visible}`}>
                Descargar PDF <BiChevronRight />
              </Link>
            )) ||
            (visible === "basket" && (
              <Link href={basket} download={`reglamento${visible}`}>
                Descargar PDF <BiChevronRight />
              </Link>
            )) ||
            (visible === "futbol" && (
              <Link href={futbol} download={`reglamento${visible}`}>
                Descargar PDF <BiChevronRight />
              </Link>
            )) ||
            (visible === "padel" && (
              <Link href={padel} download={`reglamento${visible}`}>
                Descargar PDF <BiChevronRight />
              </Link>
            )) ||
            (visible === "tenis" && (
              <Link href={tenis} download={`reglamento${visible}`}>
                Descargar PDF <BiChevronRight />
              </Link>
            ))}
        </Button>
      </Container>
    </Container>
  );
};

export default Info;
