import React, { Component } from "react";
import storm from "./img/weather-icons/storm.svg";
import drizzle from './img/weather-icons/drizzle.svg'
import clear from './img/weather-icons/clear.svg'
import cloudy from './img/weather-icons/cloudy.svg'
import fog from './img/weather-icons/fog.svg'
import mostlycloudy from './img/weather-icons/mostlycloudy.svg'
import partlycloudy from './img/weather-icons/partlycloudy.svg'
import rain from './img/weather-icons/rain.svg'
import snow from './img/weather-icons/snow.svg'
import unknown from './img/weather-icons/unknown.svg'

import "./App.css";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Omair and Rabih"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <Search />
        <div className="content">
          <img src={mostlycloudy} alt="mostlycloudy icon" className=" main"/>
          <h3>overcast cloud</h3>
          <p><span class="temp">Temparuture </span>10 ْto 11 ْC</p>
          <p><span class="A">Humidity</span> 78% <span class="A">Pressure</span> 1008.48</p>
        </div>
        <div class="footer">
          <div class="footerA">
            <p>03:00</p>
            <img src={mostlycloudy} alt="mostlycloudy icon" className="mostly"/>
            <p>8 ْC</p>
          </div>
          <div class="footerA">
          <p>06:00</p>
            <img src={mostlycloudy} alt="mostlycloudy icon" className="mostly"/>
            <p>9 ْC</p>
          </div>
          <div class="footerA">
          <p>09:00</p>
            <img src={clear} alt="clear icon" className="mostly"/>
            <p>14 ْC</p>
          </div>
          <div class="footerA">
          <p>12:00</p>
            <img src={clear} alt="clear icon" className="mostly"/>
            <p>17 ْC</p>
          </div>
          <div class="footerA">
          <p>15:00</p>
            <img src={clear} alt="clear icon" className="mostly"/>
            <p>18 ْC</p>
          </div>
          <div class="footerA">
          <p>18:00</p>
            <img src={clear} alt="clear icon" className="mostly"/>
            <p>16 ْC</p>
          </div>
          <div class="footerA">
          <p>21:00</p>
          <img src={mostlycloudy} alt="mostlycloudy icon" className="mostly"/>
            <p>13 ْC</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;