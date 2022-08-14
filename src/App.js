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

  return (
    <>
      {ctx.showModal && <FilterModal />}

      <Card>
        <Navbar />

        <h1>Stays in Finland</h1>

        <div className="hotels">
          {!ctx.city
            ? hotels.map((hotel) => (
                <HotelItem hotel={hotel} key={hotel.photo} />
              ))
            : hotels
                .filter((hotel) => hotel.city === ctx.city)
                .map((hotel) => <HotelItem hotel={hotel} key={hotel.photo} />)}
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
