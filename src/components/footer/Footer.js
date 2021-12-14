import logoFooter from "./logo-footer.png";
import bgFooter from "./bg-footer.png";
import { BiChevronRight } from "react-icons/bi";

const Footer = () => {
  return (
    <div
      className="footer-container"
      style={{ backgroundImage: `url(${bgFooter})` }}
    >
      <div className="description-container">
        <img src={logoFooter} alt="" />
        <p>
          Somos SION, una productora enfocada en la organización de eventos
          deportivos, donde buscamos fomentar el deporte en la sociedad, por
          medio de nuestros valores: pasión, respeto y compromiso.
        </p>
      </div>
      <div className="newsletter-container">
        <h3 className="title">newsletter</h3>
        <span>suscribite para saber todas las novedades de wena sports</span>
        <input type="email" placeholder="Mail"></input>
        <button>
          Suscribirme <BiChevronRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default Footer;
