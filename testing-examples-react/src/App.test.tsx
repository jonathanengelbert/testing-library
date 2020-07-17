import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Basic from "./Basic";

test('renders basic component', () => {
  const { getByText } = render(<App />);
  const basicComponent = getByText(/Testing/i);
  expect(basicComponent).toBeInTheDocument();
});
