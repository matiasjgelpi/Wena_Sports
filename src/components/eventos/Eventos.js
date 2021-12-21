import { useState } from "react";
import Container from "../primitives/Container";
import Heading from "../primitives/Heading";
import Text from "../primitives/Text";
import { BiChevronRight } from "react-icons/bi";

const Eventos = () => {
  const [visible, setVisible] = useState("");

  return (
    <Container className="eventos-container">
      <Heading level="3">TABLA DE POSICIONES</Heading>
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
      <Container className="form-container">
        <Container className="info">
          <span></span>
          <Heading level="4">Suscripciones</Heading>
          <Text>
            ingresá tus datos para recibir un mail con información y/o
            confirmación de la suscripción
          </Text>
        </Container>
        <Container className="form">
          <form>
            <input placeholder="Nombre"></input>
            <input placeholder="Edad"></input>
            <input placeholder="Mail"></input>
            <input placeholder="Deporte"></input>
          </form>{" "}
          <button>
            Aceptar <BiChevronRight />
          </button>
        </Container>
      </Container>
    </Container>
  );
};

export default Eventos;
