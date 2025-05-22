import React from "react";
import "./Weather.css";
import { CiSearch } from "react-icons/ci";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";

const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="search" />
        <CiSearch className="search-icon" />
      </div>
      <div>
        <TiWeatherPartlySunny className="weather-icon" />
        <p className="temperature">30°c</p>
        <p className="location">London</p>
      </div>
      <div className="weather-data">
        <div className="col">
          <WiHumidity className="icon" />
          <div className="humidity">
            <p>64%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <FiWind className="icon" />
          <div>
            <p>3.6 Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
