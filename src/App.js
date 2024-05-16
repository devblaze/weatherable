import React, { useState } from 'react';
import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import WeatherCard from './components/WeatherCard';
import './styles/style.css';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);

  const addCity = async (city) => {
    const apiKey = '2b9db91f8d8493f3374df65ee36118ce';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (response.ok) {
        setWeatherData([data, ...weatherData]);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('Error fetching weather data');
    }
  };

  return (
    <div className="container">
      <Header />
      <WeatherForm addCity={addCity} />
      <main className="weather-cards">
        {weatherData.map((weather, index) => (
          <WeatherCard key={index} weather={weather} />
        ))}
      </main>
    </div>
  );
};

export default App;
