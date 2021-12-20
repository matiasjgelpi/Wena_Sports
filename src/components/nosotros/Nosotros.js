import Container from "../primitives/Container";
import Heading from "../primitives/Heading";
import Text from "../primitives/Text";

const Nosotros = () => {
  return (
    <Container className="nosotros-container">
      <Heading level="3">QUIÉNES SOMOS</Heading>
      <Text>
        Somos SION, una productora enfocada en la organización de eventos
        deportivos, donde buscamos fomentar el deporte en la sociedad, por medio
        de nuestros valores: pasión, respeto y compromiso. Desde 2018 como
        estudiantes y apasionados del deporte, hemos adquirido experiencias y
        habilidades, trabajando en conjunto con reconocidas instituciones y
        personalidades, organizando y participando en eventos deportivos de
        reconocimiento nacional e internacional.
      </Text>
    </Container>
  );
};

export default Nosotros;
