import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ViewContainer } from "../viewcontainer/ViewContainer";
import { Container } from "react-bootstrap";

export default function Rutas() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ViewContainer />} />
          <Route path="/category/:cat" exact element={<ViewContainer />} />
        </Routes>
        {/* <Container className="fixed-bottom">
          <Footer />
        </Container> */}
      </Router>
    </>
  );
}
