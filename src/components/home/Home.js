import { Row, Col } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";

export const Home = () => {
  return (
    <Row className="home">
      <Col id="col1" className="" lg={"6"}>
        <div className="rectangulo-amarillo"></div>
        <h3>SÉ PARTE DEL GRAN EVENTO <br/> DEPORTIVO</h3>
        <h4>PORQUÉ CREEMOS QUE DEBERÍAS<br/> ESTAR</h4>
      </Col>
      <Col id="col2" className="" lg={"6"}>
        <p>
          Buscamos despertar emociones e incentivar a la sociedad a <b>vivir nuevas
          experiencias</b>, a través de eventos deportivos adaptados que toman como
          principales características el dinamismo, y la rapidez.
        </p>

        <p>
          <b>Creemos que tu participación en nuestro evento es beneficiosa para
          vos</b>. El proyecto es totalmente innovador en la región y se organiza en
          Tostado, una ciudad que es apasionada por el deporte y, junto a los 2
          clubes que están aquí, constantemente organizan eventos de todo tipo
          donde frecuentemente vienen participantes de toda la región,
          provincias aledañas e incluso de otros países.
        </p>
        <button>
            Inscribirme <BiChevronRight />{" "}
        </button>
      </Col>
    </Row>
  );
};
