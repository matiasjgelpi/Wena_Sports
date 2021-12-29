import logoFooter from "./logo-footer.png";
import bgFooter from "./bg-footer.png";
import { BiChevronRight } from "react-icons/bi";
import Container from "../primitives/Container";
import Image from "../primitives/Img";
import Text from "../primitives/Text";
import Heading from "../primitives/Heading";
import Span from "../primitives/Span";
import Input from "../primitives/Input";
import Button from "../primitives/Button";

export const Footer = () => {

  return (
    <Container
      as="footer"
      className="footer-container"
      style={{ backgroundImage: `url(${bgFooter})` }}
    >
      <Container className="description-container">
        <Image src={logoFooter} alt="" />
        <Text>
          Somos SION, una productora enfocada en la organización de eventos
          deportivos, donde buscamos fomentar el deporte en la sociedad, por
          medio de nuestros valores: pasión, respeto y compromiso.
        </Text>
      </Container>
      <Container className="newsletter-container">
        <Heading level="3" className="title">
          newsletter
        </Heading>
        <Span>suscribite para saber todas las novedades de wena sports</Span>
        <Input type="email" placeholder="Mail"></Input>
        <Button>
          Suscribirme <BiChevronRight />{" "}
        </Button>
      </Container>
    </Container>
  );
};
