import { useState } from "react";
import Container from "../primitives/Container";
import Heading from "../primitives/Heading";
import Text from "../primitives/Text";
import { BiChevronRight } from "react-icons/bi";

import Span from "../primitives/Span";
import Input from "../primitives/Input";
// import Link from "../primitives/Link";
import Button from "../primitives/Button";
import Form from "../primitives/Form";
import Select from "../primitives/Select";
import Option from "../primitives/Option";

const Eventos = () => {
  const [ setVisible] = useState("");

  return (
    <Container className="eventos-container">
      <Heading level="3">TABLA DE POSICIONES</Heading>
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
