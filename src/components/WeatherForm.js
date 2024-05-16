import React, { useState } from 'react';
import '../styles/WeatherForm.css';

const WeatherForm = ({ addCity }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      addCity(city);
      setCity('');
    }
  };

  return (
    <form className="weather-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Example: New York, United States"
        className="city-input"
      />
      <button type="submit" className="add-city-button">Submit</button>
    </form>
  );
};

export default WeatherForm;
