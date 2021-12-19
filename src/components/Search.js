import React from "react";

import clear from "../img/weather-icons/clear.svg";
import mostlycloudy from '../img/weather-icons/mostlycloudy.svg'
import partlycloudy from '../img/weather-icons/partlycloudy.svg'
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div>
      <nav class="navbar">
          <form>
            <input type="search" placeholder="type in a city name" />
            <button className="submit">FIND WEATHER</button>
          </form>
        </nav>
      
    </div>
    );
  }
}
export default Search;
