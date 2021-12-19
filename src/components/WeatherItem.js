import React, { Component } from "react";
import { render } from "react-dom";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import clear from '../img/weather-icons/clear.svg';



export default class WeatherItem extends Component {
  render() {
    return (
      <div class="footerA">
      <p>{this.props.time.split(" ")[1].substring(0,5)}</p>
      <img src={partlycloudy} alt="partlycloudy icon" className="partly"/>
      <p>{Math.round(this.props.dayDegree-273.15)} ْC</p>
    </div>
    );
  }
}
export class CurrentWeather extends Component {
  render() {
    return (
      <div className="content">
      <img src={clear} alt="clear icon" className=" main"/>
      <h3>{this.props.discriptions}</h3>
      <p><span class="temp">Temperature </span>{Math.round(this.props.tempMin-273.15)} ْ to {Math.round(this.props.tempMax-273.15)} ْC</p>
      <p><span class="A">Humidity</span> {this.props.humidity}% <span class="A">Pressure</span> {this.props.pressure}</p>
    </div>
    );
  }
}

