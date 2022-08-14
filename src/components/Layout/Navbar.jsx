import { useContext } from "react";
import hotelContext from "../../store/hotel-context";
import Icon from "../UI/Icon";
import "./navbar.scss";

const Navbar = () => {
  const ctx = useContext(hotelContext);

  const noGuest = ctx.guests > 0 ? false : true;

  const show = () =>{
    ctx.showModalHandler(true)
  }

  return (
    <nav>
      <img src="logo.png" alt="windbnb" className="logo"></img>

      <div className="search-nav" onClick={show}>
        <div className="search-nav-city">{!ctx.city ? "Helsinki, Finland" : ctx.city + ", Finland"}</div>
        <div className="search-nav-guests">{noGuest && "Add guests"}</div>
        <div className="search-nav-icon">
          <Icon name="search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
