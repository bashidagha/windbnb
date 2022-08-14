import { useContext } from "react";
import hotelContext from "../../store/hotel-context";
import Icon from "../UI/Icon";
import "./navbar.scss";

const Navbar = () => {
  const ctx = useContext(hotelContext);

  const noGuest = ctx.guests > 0 ? false : true;

  return (
    <nav>
      <img src="logo.png" alt="windbnb" className="logo"></img>

      <div className="search-nav">
        <div className="search-nav-city">{ctx.city}</div>
        <div className="search-nav-guests">{noGuest && "Add guests"}</div>
        <div className="search-nav-icon">
          <Icon name="search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
