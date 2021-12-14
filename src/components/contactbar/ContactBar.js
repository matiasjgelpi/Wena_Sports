import { Nav } from "react-bootstrap";

export const ContactBar = () => {
  return (
    <Nav className="justify-content-around" id="contact-bar">
      <Nav.Item>  
        <Nav.Link><img src="./facebook.png" id="facebook" alt="" />wenasports</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><img src="./instagram.png" id="instagram" alt=""/>wenasports</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><img src="./whatsapp.png" id="whatsapp" alt=""/>11 54702118</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><img src="./gmail.png" id="gmail" alt=""/>sionproductorax@gmail.com</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
