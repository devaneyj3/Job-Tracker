import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import JobForm from './components/JobForm';

test('Render App Component', () => {
  render(<App />);
});

test('render Job Form', () => {
  render(<JobForm/>);
})
