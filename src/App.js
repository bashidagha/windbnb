import Card from "./components/UI/Card";
import HotelItem from "./components/Layout/HotelItem";
import hotels from "./stays.json";
import Navbar from "./components/Layout/Navbar";
import "./index.scss";
import FilterModal from "./components/Layout/FilterModal";
import { useContext } from "react";
import hotelContext from "./store/hotel-context";

function App() {
  const ctx = useContext(hotelContext);

  let filteredHotel = !ctx.city
    ? hotels
    : hotels.filter((hotel) => hotel.city === ctx.city);

  return (
    <>
      {ctx.showModal && <FilterModal />}

      <Card>
        <Navbar />

        <div className="stay-title">
          <h1>Stays in Finland</h1>

          <div className="disable">
            {filteredHotel.length + "+ stays"}
            </div>          
        </div>

        <div className="hotels">
          {filteredHotel.map((hotel) => (
            <HotelItem hotel={hotel} key={hotel.photo} />
          ))}
        </div>

        <footer>
          created by <a href="https://github.com/bashidagha">bashidagha</a> -
          devChallenges.io
        </footer>
      </Card>
    </>
  );
}

export default App;
