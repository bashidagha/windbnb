import Card from "./components/UI/Card";
import HotelItem from "./components/Layout/HotelItem";
import hotels from "./stays.json";
import Navbar from "./components/Layout/Navbar";
import { useState } from "react";
import "./index.scss";

function App() {
  const [city, setCity] = useState("Helsinki, Finland");
  const [guests, setGuests] = useState(0);

  return (
    <>
      <Card>
        <Navbar city={city} guests={guests} />

        <h1>Stays in Finland</h1>

        <div className="hotels">
          {hotels.map((hotel) => (
            <HotelItem hotel={hotel} key={hotel.city} />
          ))}
        </div>

        <footer>
          created by <a href="https://github.com/bashidagha">bashidagha</a> - devChallenges.io
        </footer>
      </Card>
    </>
  );
}

export default App;
