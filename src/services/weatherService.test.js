import fetchMock from 'fetch-mock';
import { fetchWeatherData } from '../services/weatherService';
import { WeatherDTO } from '../dto/WeatherDTO';

describe('fetchWeatherData', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should return formatted weather data from the API', async () => {
        const city = 'London';
        const mockApiResponse = {
            weather: [{ icon: '01d', main: 'Clear' }],
            main: { temp: 21.0 },
            name: 'London',
            sys: { country: 'GB' },
            coord: { lat: 51.5074, lon: -0.1278 }
        };

        const expectedFormattedData = WeatherDTO(mockApiResponse);

        fetchMock.getOnce(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b9db91f8d8493f3374df65ee36118ce&units=metric`,
            {
                body: mockApiResponse,
                headers: { 'content-type': 'application/json' }
            }
        );

        const result = await fetchWeatherData(city);
        expect(result).toEqual(expectedFormattedData);
    });

    it('should throw an error when the API response is not ok', async () => {
        const city = 'InvalidCity';
        const errorMessage = 'city not found';

        fetchMock.getOnce(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b9db91f8d8493f3374df65ee36118ce&units=metric`,
            {
                status: 404,
                body: { message: errorMessage },
                headers: { 'content-type': 'application/json' }
            }
        );

        await expect(fetchWeatherData(city)).rejects.toThrow(errorMessage);
    });
});
