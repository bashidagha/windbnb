import { useContext } from "react";
import hotelContext from "../../store/hotel-context";
import Icon from "../UI/Icon";
import "./filtermodal.scss";

const FilterModal = () => {
  const ctx = useContext(hotelContext);

  const hide = () => {
    ctx.showModalHandler(false);
  };

  const setCityHandler = (name) => {
    ctx.changeCityHandler(name);
  };

  const noGuest = ctx.guests > 0 ? false : true;

  return (
    <>
      <div className="backdrop" onClick={hide}></div>

      <div className="modal">
        <div className="modal-top">
          <h5>Edit your search</h5>
          <Icon name="close" onClick={hide} />
        </div>

        <div className="modal-select">
          <div>
            <h5>location</h5>
            <p>{!ctx.city ? "Helsinki, Finland" : ctx.city + ", Finland"}</p>
          </div>

          <div>
            <h5>Guests</h5>
            <p>{noGuest ? "Add guests" : ctx.guests}</p>
          </div>
        </div>

        <div className="modal-cities">
          <ul>
            <li onClick={() => setCityHandler("Helsinki")}>
              <Icon name="location" /> <a>Helsinki, Finland</a>
            </li>
            <li onClick={() => setCityHandler("Turku")}>
              <Icon name="location" /> <a>Turku, Finland</a>
            </li>
            <li onClick={() => setCityHandler("Oulu")}>
              <Icon name="location" /> <a>Oulu, Finland</a>
            </li>
            <li onClick={() => setCityHandler("Vaasa")}>
              <Icon name="location" /> <a>Vaasa, Finland</a>
            </li>
          </ul>
        </div>

        <div className="modal-add-guests">
          <h5>Adults</h5>

          <p className="disable">Ages 13 or above</p>

          <p>{ctx.guests}</p>

          <h5>Children</h5>

          <p className="disable">Ages 2-12</p>

          <p>{ctx.guests}</p>
        </div>

        <div className="modal-search-btn">
          <button onClick={hide}>
            <Icon name="search" />
            <div>Search</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterModal;
