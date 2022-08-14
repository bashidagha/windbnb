import { createContext, useState } from "react";

const hotelContext = createContext({
  guests: 0,
  city: "Helsinki, Finland",
});

export function HotelContextProvider(props) {
  const [cityState, setCityState] = useState("Helsinki, Finland");
  const [guestsState, setGuestsState] = useState(0);

  const changeCityHandler = (cityName) => {
    setCityState(cityName);
  };

  const changeGuestsHandler = (guestsNumber) => {
    setGuestsState(guestsNumber);
  };

  const context = {
    guests: guestsState,
    city: cityState,
    changeCityHandler:changeCityHandler,
    changeGuestsHandler:changeGuestsHandler
  };

  return (
    <hotelContext.Provider value={context}>
      {props.children}
    </hotelContext.Provider>
  );
}

export default hotelContext
