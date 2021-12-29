import { Container, Nav} from "react-bootstrap";

export const ContactBar = () => {
  return (

 
    <Nav className="justify-content-around container fixed-top" id="contact-bar" >

      <Nav.Item> 
        <Nav.Link href="https://www.facebook.com/Wena-Sports-109830381406546" target={"_blank"}> <img src="./facebook.png" id="facebook" alt="" /> wenasports</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://www.instagram.com/wenasports/" target={"_blank"}><img src="./instagram.png" id="instagram" alt=""/>wenasports</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://wa.me/541154702118" target={"_blank"}><img src="./whatsapp.png" id="whatsapp" alt=""/>11 54702118</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://mail.google.com/mail/u/1/?hl=es#inbox" target={"_blank"}><img src="./gmail.png" id="gmail" alt=""/>sionproductorax@gmail.com</Nav.Link>
      </Nav.Item>

    </Nav>
   
  );
};
  