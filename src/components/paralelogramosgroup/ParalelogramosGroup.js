import { Row, Col } from "react-bootstrap";
import { Paralelogramos } from "../paralelogramos/Paralelogramos";

export const ParalelogramosGroup = () => {
  return (
    <>
      <Row
        id="paralelogramos-group"
        lg="5"
        className="justify-content-around align-items-center"
      >
        <Col>
          <Paralelogramos
            categoria={"FECHA"}
            dato={"22/11"}
            color_cuadro={"#adf0d1"}
          />
        </Col>
        <Col>
          <Paralelogramos
            categoria={"TORNEOS"}
            dato={"5"}
            color_cuadro={"#f2f2f2"}
          />
        </Col>
        <Col>
          <Paralelogramos
            categoria={"INSCRIPTOS"}
            dato={"160"}
            color_cuadro={"#ffff33"}
          />
        </Col>
        <Col>
          <Paralelogramos
            categoria={"DEPORTES"}
            dato={"4"}
            color_cuadro={"#ff3d2d"}
          />
        </Col>
      </Row>
    </>
  );
};
