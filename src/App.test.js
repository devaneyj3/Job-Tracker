import React from 'react';
import { render, getByText, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import JobForm from './components/JobForm';

test('Render App Component', () => {
  render(<App />);
});

test('Render Job Form', () => {
  render(<JobForm/>);
})

test('Input to enter company is present', () => {
  const {getByTestId}  = render(<JobForm/>)

  const companyInput = getByTestId('newJob');

  expect(companyInput).toBeInTheDocument();
})

test('Input to enter city is present', () => {
  const {getByTestId}  = render(<JobForm/>)

  const cityInput = getByTestId('city');

  expect(cityInput).toBeInTheDocument();

})
