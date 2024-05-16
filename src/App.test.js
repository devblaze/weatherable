import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';  // Adjust the import path to point to the correct location of App.js

test('renders header, form, and weather cards', () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  expect(getByText(/Weatherable/i)).toBeInTheDocument();
  expect(getByPlaceholderText(/Example: New York, United States/i)).toBeInTheDocument();
  expect(getByText(/Submit/i)).toBeInTheDocument();
});

test('adds weather card on form submit', async () => {
  const { getByPlaceholderText, getByText, getByAltText } = render(<App />);

  const input = getByPlaceholderText(/Example: New York, United States/i);
  const button = getByText(/Submit/i);

  fireEvent.change(input, { target: { value: 'New York' } });
  fireEvent.click(button);

  await waitFor(() => {
    expect(getByText(/New York, US/i)).toBeInTheDocument();
    expect(getByAltText(/clear sky/i)).toBeInTheDocument();
  });
});
