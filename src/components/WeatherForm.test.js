import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import WeatherForm from './WeatherForm';

test('renders input and submit button', () => {
  const { getByPlaceholderText, getByText } = render(<WeatherForm addCity={() => {}} />);
  expect(getByPlaceholderText(/Example: New York, United States/i)).toBeInTheDocument();
  expect(getByText(/Submit/i)).toBeInTheDocument();
});

test('calls addCity with input value on submit', () => {
  const addCityMock = jest.fn();
  const { getByPlaceholderText, getByText } = render(<WeatherForm addCity={addCityMock} />);

  const input = getByPlaceholderText(/Example: New York, United States/i);
  const button = getByText(/Submit/i);

  fireEvent.change(input, { target: { value: 'New York' } });
  fireEvent.click(button);

  expect(addCityMock).toHaveBeenCalledWith('New York');
  expect(addCityMock).toHaveBeenCalledTimes(1);
});
