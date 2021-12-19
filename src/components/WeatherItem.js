import React, { Component } from "react";
import { render } from "react-dom";

import storm from "../img/weather-icons/storm.svg";
import drizzle from '../img/weather-icons/drizzle.svg'
import clear from '../img/weather-icons/clear.svg'
import cloudy from '../img/weather-icons/cloudy.svg'
import fog from '../img/weather-icons/fog.svg'
import partlycloudy from '../img/weather-icons/partlycloudy.svg'
import rain from '../img/weather-icons/rain.svg'
import snow from '../img/weather-icons/snow.svg'
import unknown from '../img/weather-icons/unknown.svg'

import mostlycloudy from '../img/weather-icons/mostlycloudy.svg'

export default class WeatherItem extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <img src={mostlycloudy} alt="mostlycloudy icon" className=" main"/>
          <h3>overcast cloud</h3>
          <p><span class="temp">Temparuture </span>10 ْto 11 ْC</p>
          <p><span class="A">Humidity</span> 78% <span class="A">Pressure</span> 1008.48</p>
        </div>
      </div>
    )
  }
}
