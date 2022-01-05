
import { NavBar } from "../navbar/Navbar";
import { ContactBar } from "../contactbar/ContactBar";

export const Header = () => {
  return (
    <div className="fixed-top">
      <ContactBar />
      <NavBar />
    </div>
  );
};
