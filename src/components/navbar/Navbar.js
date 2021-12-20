import { Navbar, Container, Nav } from "react-bootstrap";
import LogoNavbar from "./logo-navbar.png";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Navbar id="navbar" fixed="top" expand="lg">
        <Container fluid>
          {/* <Navbar.Collapse> */}

          <Navbar.Brand className="">
            <NavLink to="/">
              <img
                alt=""
                src={LogoNavbar}
                id="logo-navbar"
                className="d-inline-block align-top"
              />{" "}
            </NavLink>
          </Navbar.Brand>

          <Nav.Item>
            <NavLink to="/category/eventos" className="nav-link link">
              <p className="link-text">EVENTOS</p>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/category/nosotros" className="nav-link link">
              <p className="link-text">NOSOTROS</p>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/category/info" className="nav-link link">
              <p className="link-text">INFORMACIÓN ÚTIL</p>
            </NavLink>
          </Nav.Item>
          <Nav.Item id="buscar">
            <NavLink to="/category/buscar" className="nav-link" />
          </Nav.Item>

          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
};
