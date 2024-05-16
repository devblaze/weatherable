import React from 'react';
import { render } from '@testing-library/react';
import WeatherCard from './WeatherCard';

const mockWeatherData = {
  main: { temp: 14 },
  weather: [{ main: 'Clear sky', description: 'clear sky', icon: '01d' }],
  name: 'Athens',
  sys: { country: 'GR' },
  coord: { lat: 37.9838, lon: 23.7275 },
};

test('renders weather card with correct data', () => {
  const { getByText, getByAltText } = render(<WeatherCard weather={mockWeatherData} />);
  expect(getByText(/14.0°C/i)).toBeInTheDocument();
  expect(getByText(/Clear sky/i)).toBeInTheDocument();
  expect(getByText(/Athens, GR/i)).toBeInTheDocument();
  expect(getByText(/37.9838° N, 23.7275° W/i)).toBeInTheDocument();
  expect(getByAltText(/clear sky/i)).toBeInTheDocument();
});
