import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div className="app">
        <nav class="navbar">
          <form>
            <input type="search" placeholder="Enter city name"/>
            <button className="submit">FIND WEATHER</button>
          </form>
        </nav>
      </div>
    );
  }
}
export default Search;
