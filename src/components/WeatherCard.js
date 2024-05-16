import React from 'react';
import '../styles/WeatherCard.css';

const WeatherCard = ({ weather }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <div className="weather-card-content">
        <div className="weather-text">
          <h2>{weather.main.temp.toFixed(1)}°C</h2>
          <p className="weather-description">{weather.weather[0].main}</p>
          <p className="weather-location">{weather.name}, {weather.sys.country}</p>
          <p className="weather-coords">{weather.coord.lat.toFixed(4)}° N, {weather.coord.lon.toFixed(4)}° W</p>
        </div>
        <img
          src={iconUrl}
          className="weather-icon"
          alt={weather.weather[0].description}
        />
      </div>
    </div>
  );
};

export default WeatherCard;
