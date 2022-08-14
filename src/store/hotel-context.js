import { createContext, useState } from "react";

const hotelContext = createContext({
  guests: 0,
  city: null,
  showModal: false,
});

export function HotelContextProvider(props) {
  const [cityState, setCityState] = useState(null);
  const [guestsState, setGuestsState] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const changeCityHandler = (cityName) => {
    setCityState(cityName);
  };

  const changeGuestsHandler = (guestsNumber) => {
    setGuestsState(guestsNumber);
  };

  const showModalHandler = (state) => {
    setShowModal(state);
  };

  const context = {
    guests: guestsState,
    city: cityState,
    changeCityHandler: changeCityHandler,
    changeGuestsHandler: changeGuestsHandler,
    showModal: showModal,
    showModalHandler: showModalHandler,
  };

  return (
    <hotelContext.Provider value={context}>
      {props.children}
    </hotelContext.Provider>
  );
}

export default hotelContext;
