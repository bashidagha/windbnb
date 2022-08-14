import { useContext } from "react";
import hotelContext from "../../store/hotel-context";
import Icon from "../UI/Icon";
import "./filtermodal.scss";

const FilterModal = () => {
  const ctx = useContext(hotelContext);

  const hide = () => {
    ctx.showModalHandler(false);
  };

  return (
    <>
      <div className="backdrop" onClick={hide}></div>

      <div className="modal">
        <div className="modal-top">
          <h5>Edit your search</h5>
          <Icon name="close" onClick={hide} />
        </div>

        <div className="modal-cities">
          <ul>
            <li>
              <Icon name="location" /> <a>Helsinki, Finland</a>
            </li>
            <li>
              <Icon name="location" /> <a>Turku, Finland</a>
            </li>
            <li>
              <Icon name="location" /> <a>Oulu, Finland</a>
            </li>
            <li>
              <Icon name="location" /> <a>Vaasa, Finland</a>
            </li>
          </ul>
        </div>

        <div className="modal-add-guests">
          <h5>Adults</h5>

          <p>Ages 13 or above</p>

          <h5>Children</h5>

          <p>Ages 2-12</p>
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
