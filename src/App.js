import React, { useState } from 'react';
import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import WeatherCard from './components/WeatherCard';
import './styles/style.css';
import { fetchWeatherData } from './services/weatherService';

const App = () => {
    const [weatherData, setWeatherData] = useState([]);

    const addCity = async (city) => {
        try {
            const data = await fetchWeatherData(city);
            setWeatherData([data, ...weatherData]);
        } catch (error) {
            alert(error.message);
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
