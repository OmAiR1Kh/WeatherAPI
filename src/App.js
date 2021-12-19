import React, { Component } from "react";

// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import Search from "./components/Search";
import WeatherItem, { CurrentWeather } from "./components/WeatherItem";
import fakeWeather from "./fakeWeatherData.json";
import clear from "./img/weather-icons/clear.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherList: fakeWeather.list,
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <Search/>
        <CurrentWeather discriptions={this.state.weatherList[0].weather[0].description} tempMin={this.state.weatherList[0].main.temp_min}
        tempMax={this.state.weatherList[0].main.temp_max} humidity={this.state.weatherList[0].main.humidity} 
        pressure={this.state.weatherList[0].main.pressure}/>
        <div class="footer">
        {this.state.weatherList.map((item,index) =>{
                  if(index > 0 && index <8){
                    return  < WeatherItem time={item.dt_txt} dayDegree={item.main.temp} />
                  }
                })}
         </div>
        
       
      </div>
    );
  }
}

export default App;


