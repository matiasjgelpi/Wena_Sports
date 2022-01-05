import { Navbar, Container, Nav } from "react-bootstrap";
import LogoNavbar from "./logo-navbar.png";
import LogoResponsive from "./logo-responsive.png";
import { NavLink} from "react-router-dom";
import { useState } from "react";
import { TituloNavResponsive } from "../titulonavresponsive/TituloNavResponsive";



export const NavBar = () => {

  const [titulo, setTitulo] = useState("")


  const menuDropdown = (e) => {
    const toggler = document.getElementById("responsive-navbar-nav")
    toggler.classList.remove("show")
    e.target.innerText === "" ? setTitulo("HOME") : setTitulo(e.target.innerText)
  }

  return (
    <>
      <Navbar id="navbar" className="container-fluid"  collapseOnSelect expand="xl">
        <Container>
          <Navbar.Brand className="brand">
            <NavLink to="/" onClick={menuDropdown}>
              <img
                alt="Home"
                src={LogoNavbar}
                id="logo-navbar"
                className="align-top"
              />
                <img
                alt="Home"
                src={LogoResponsive}
                id="logo-responsive"
                className="align-top"
              />
              {" "}
            </NavLink>
          </Navbar.Brand> 
          <TituloNavResponsive text={titulo}/>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav.Item>
              <NavLink to="/category/eventos" className="nav-link link" onClick={menuDropdown}>
                <p className="link-text">EVENTOS</p>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/category/nosotros" className="nav-link link" onClick={menuDropdown}>
                <p className="link-text">NOSOTROS</p>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/category/info" className="nav-link link" onClick={menuDropdown}>
                <p className="link-text">INFORMACIÓN ÚTIL</p>
              </NavLink>
            </Nav.Item>
            <Nav.Item id="buscar">
              <NavLink to="/category/buscar" className="nav-link" />
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
