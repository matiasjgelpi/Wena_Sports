import { Container, Row } from "react-bootstrap";
import { NavBar } from "../navbar/Navbar";
import { ContactBar } from "../contactbar/ContactBar";

export const Header = () => {
  return (
    <>
      <ContactBar />
      <NavBar />
    </>
  );
};
