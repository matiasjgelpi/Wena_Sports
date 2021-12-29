import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../header/Header";
import { ViewContainer } from "../viewcontainer/ViewContainer";
import { Home } from "../home/Home"


export default function Rutas() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          {/* <Route path="/category/:cat" exact element={<ViewContainer />} /> */}
        </Routes>
      </Router>{" "}
      <Footer />
    </>
  );
}
