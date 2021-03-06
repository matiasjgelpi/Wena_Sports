import { Row, Col } from "react-bootstrap";

export const HomeSeccion3 = () => {
  return (
    <Row className="home cobertura">
      <Col id="" className="" lg={"6"}>
        <div className="rectangulo-amarillo"></div>
        <h3>COBERTURA</h3>
        <h4>
          SEGUÍ EL EVENTO EN LO MEDIOS Y
          <br /> REDES SOCIALES
        </h4>
      </Col>

      <Row id="medios">
        <Col lg={2} className="medios-cobertura-container">
          <div
            className="iconos"
            src="./antena.png"
            id="antena"
            alt=""
          />
          <p className="titulo-iconos ">Radio y TV</p>
          <p className="texto-iconos">
            Max Maxima 95.5 <br/> FM Tostado Cable
          </p>
        </Col>
        <Col lg={2} className="medios-cobertura-container">
          <div className="iconos" src="./instagram.png" id="instagram" alt="" />
          <p className="titulo-iconos">Instagram</p>
          <p className="texto-iconos">
            @atleticotostado @kimika @jazminarmando @ignacio.marmol @berlin
          </p>
        </Col>
        <Col lg={2} className="medios-cobertura-container">
          <div className="iconos" src="./tiktok.png" id="tiktok" alt="" />
          <p className="titulo-iconos">TikTok</p>
          <p className="texto-iconos">@jazminarmando</p>
        </Col>
        <Col lg={2} className="medios-cobertura-container">
          <div className="iconos" src="./facebook.png" id="facebook" alt="" />
          <p className="titulo-iconos">Facebook</p>
          <p className="texto-iconos">@atleticotostado1989</p>
        </Col>
        <Col lg={2} className="medios-cobertura-container">
          <div className="iconos" src="./twitch.png" id="twitch" alt="" />
          <p className="titulo-iconos">Twitch</p>
          <p className="texto-iconos">@el_ignaaa</p>
        </Col>
      </Row>
    </Row>
  );
};
