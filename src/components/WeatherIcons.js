import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import FakeWeather from "../fakeWeatherData.json"

class WeatherIcons extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
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

export default WeatherIcons;