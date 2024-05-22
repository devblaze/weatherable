import React from 'react';
import '../styles/WeatherCard.css';

const WeatherCard = ({ weather }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
      <div className="weather-card">
        <div className="weather-card-content">
          <div className="weather-text">
            <h2>{weather.temperature}°C</h2>
            <p className="weather-description">{weather.description}</p>
            <p className="weather-location">{weather.location}</p>
            <p className="weather-coords">{weather.coords}</p>
          </div>
          <img
              src={iconUrl}
              className="weather-icon"
              alt={weather.description}
          />
        </div>
      </div>
  );
};

export default WeatherCard;
