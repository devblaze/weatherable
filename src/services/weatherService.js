import { WeatherDTO } from '../dto/WeatherDTO';

export const fetchWeatherData = async (city) => {
    const apiKey = '2b9db91f8d8493f3374df65ee36118ce';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }

        return WeatherDTO(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};
