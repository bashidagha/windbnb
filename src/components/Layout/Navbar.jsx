import Icon from "../UI/Icon";
import "./navbar.scss";

const Navbar = (props) => {
  const noGuest = props.guests > 0 ? false : true;

  return (
    <nav>
      <img src="logo.png" alt="windbnb" className="logo"></img>

      <div className="search-nav">
        <div className="search-nav-city">
          {props.city}
        </div>
        <div className="search-nav-guests">
          {noGuest && "Add guests"}
        </div>
        <div className="search-nav-icon">
          <Icon name="search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
