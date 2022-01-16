
import { NavBar } from "../navbar/Navbar";
import { ContactBar } from "../contactbar/ContactBar";

export const Header = () => {
  return (
    <div className="header">
      <ContactBar />
      <NavBar />
    </div>
  );
};
