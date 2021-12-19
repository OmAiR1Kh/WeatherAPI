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
import WeatherItem  from "./components/WeatherItem";
import WeatherIcons from "./components/WeatherIcons";

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

        <WeatherItem />
        
        <WeatherIcons />
      </div>
    );
  }
}

export default App;