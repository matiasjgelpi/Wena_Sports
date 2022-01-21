import {Col } from "react-bootstrap";
import { Paralelogramos } from "../paralelogramos/Paralelogramos";

export const ParalelogramosGroup = () => {
  return (
    <>
      <div id="paralelogramos-group" className="no-gutters">
        <Col className="elemento-paralelogramos-group">
          <Paralelogramos
            categoria={"FECHA"}
            dato={"21/11"}
            color_cuadro={"#adf0d1"}
          />
        </Col>
        <Col className="elemento-paralelogramos-group">
          <Paralelogramos
            categoria={"TORNEOS"}
            dato={"5"}
            color_cuadro={"#f2f2f2"}
          />
        </Col>
        <Col className="elemento-paralelogramos-group">
          <Paralelogramos
            categoria={"INSCRIPTOS"}
            dato={"160"}
            color_cuadro={"#ffff33"}
          />
        </Col>
        <Col className="elemento-paralelogramos-group">
          <Paralelogramos
            categoria={"DEPORTES"}
            dato={"4"}
            color_cuadro={"#ff3d2d"}
          />
        </Col>
      </div>
    </>
  );
};
