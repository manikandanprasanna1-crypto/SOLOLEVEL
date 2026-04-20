import { render, screen } from '@testing-library/react';
import App from './App';

test('renders system title', () => {
  render(<App />);
  const linkElement = screen.getByText(/System/i);
  expect(linkElement).toBeInTheDocument();
});
