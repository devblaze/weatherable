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
        <div className="weather-form-container">
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
        </div>
    );
};

export default WeatherForm;
