import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../header/Header";
import { Home } from "../home/Home";
import { SectionContainer } from "../sectionContainer/SectionContainer";
import { Footer } from "../footer/Footer";
import { HomeResponsive} from "../home/HomeResponsive";


export default function Rutas() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomeResponsive/>} />
          <Route path="/category/:cat" exact element={<SectionContainer />} />
        </Routes>
      </Router>{" "}
      <Footer />
    </>
  );
}
