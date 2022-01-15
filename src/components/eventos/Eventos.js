import { useState } from "react";
import Container from "../primitives/Container";
import Heading from "../primitives/Heading";
import Text from "../primitives/Text";
import { BiChevronRight } from "react-icons/bi";

import Span from "../primitives/Span";
import Input from "../primitives/Input";
import Link from "../primitives/Link";

import Button from "../primitives/Button";
import Form from "../primitives/Form";
import Select from "../primitives/Select";
import Option from "../primitives/Option";
<<<<<<< HEAD

=======
>>>>>>> primera_version_funcional
import Image from "../primitives/Img";

import fixture4desktop from "./fixtures/desktop_fixturex4.png";
import fixture8desktop from "./fixtures/desktop_fixturex8.png";
import fixture16desktop from "./fixtures/desktop_fixturex16.png";
import fixture32desktop from "./fixtures/desktop_fixturex32.png";
import fixture4mobile from "./fixtures/mobile_fiturex4.png";
import fixture8mobile from "./fixtures/mobile_fixturex8.png";
import fixture16mobile from "./fixtures/mobile_fixturex16.png";
import fixture32mobile from "./fixtures/mobile_fixturex32.png";

const Eventos = () => {
  const [visible, setVisible] = useState("4");
  let array = [];
  const creoArrayEquipos = (cant) => {
    for (let i = 1; i <= cant; i++) {
      array.push(i);
    }
    return array;
  };

  return (
    <Container className="eventos-container">
      <Heading level="3">TABLA DE POSICIONES</Heading>
      <Select onChange={(event) => setVisible(event.target.value)}>
        <Option value="4">Rugby X</Option>
        <Option value="8">Hockey 5</Option>
        <Option value="8">Beach Volley</Option>
        <Option value="32">Fifa 22</Option>
        <Option value="4">Tenis</Option>
        <Option value="16">Fútbol 5</Option>
        <Option value="8">Padel</Option>
        <Option value="16">Basketball</Option>
      </Select>
      <Container className="image-container">
        {" "}
        <Image
          className={
            (visible === "4" && "image-desktop x4") ||
            (visible === "8" && "image-desktop x8") ||
            (visible === "16" && "image-desktop x16") ||
            (visible === "32" && "image-desktop x32")
          }
          src={
            (visible === "4" && fixture4desktop) ||
            (visible === "8" && fixture8desktop) ||
            (visible === "16" && fixture16desktop) ||
            (visible === "32" && fixture32desktop)
          }
        />
        <Image
          className={
            (visible === "4" && "image-mobile x4") ||
            (visible === "8" && "image-mobile x8") ||
            (visible === "16" && "image-mobile x16") ||
            (visible === "32" && "image-mobile x32")
          }
          src={
            (visible === "4" && fixture4mobile) ||
            (visible === "8" && fixture8mobile) ||
            (visible === "16" && fixture16mobile) ||
            (visible === "32" && fixture32mobile)
          }
        />
      </Container>
      <ul>
        {creoArrayEquipos(parseInt(visible)).map((e) => (
          <li>
            <span></span>
            Nombre de equipo {e}
          </li>
        ))}
      </ul>

      <Container className="form-container">
        <Container className="info">
          <Span />
          <Heading level="4">Suscripciones</Heading>
          <Text>
            ingresá tus datos para recibir un mail con información y/o
            confirmación de la suscripción
          </Text>
        </Container>
        <Container className="form">
          <Form>
            <Input placeholder="Nombre"></Input>
            <Input placeholder="Edad"></Input>
            <Input placeholder="Mail"></Input>
            <Input placeholder="Deporte"></Input>
          </Form>{" "}
          <Button>
            Aceptar <BiChevronRight />
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default Eventos;
