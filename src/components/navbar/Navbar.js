import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <Nav className="navbar justify-content-between" id="navbar" activeKey="/home">
      <Nav.Item>
        <NavLink to="/" className="nav-link" id="logo-navbar" />
      </Nav.Item>

      <Nav.Item>
        <NavLink to="/category/eventos" className="nav-link link">
          <span>EVENTOS</span>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/category/nosotros" className="nav-link link">
          NOSOTROS
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/category/info" className="nav-link link">
          INFORMACIÓN ÚTIL
        </NavLink>
      </Nav.Item>
      <Nav.Item id="buscar">
        <NavLink to="/category/buscar" className="nav-link" />
      </Nav.Item>
    </Nav>
  );
};
