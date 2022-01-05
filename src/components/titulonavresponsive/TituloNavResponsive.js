// import { Navbar, Container, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";


export const TituloNavResponsive = () => {

    const { cat } = useParams();
    console.log(cat)

  return (
    <div className="titulo-responsive-nav">
      <p className="titulo-responsive-nav-text"></p>
    </div>
  );
};
