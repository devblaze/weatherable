import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders Weatherable logo', () => {
  const { getByAltText } = render(<Header />);
  const logoElement = getByAltText(/Weatherable logo/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders header content', () => {
  const { getByText } = render(<Header />);
  expect(getByText(/The weather in every corner of the world./i)).toBeInTheDocument();
  expect(getByText(/Pick a place on the map and find out the weather./i)).toBeInTheDocument();
  expect(getByText(/Plan better your trips or daily tasks./i)).toBeInTheDocument();
  expect(getByText(/With Weatherable you can now feel safe, ready and prepared./i)).toBeInTheDocument();
});
