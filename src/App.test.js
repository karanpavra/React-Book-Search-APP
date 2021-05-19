import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page title link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Book Search/i);
  expect(linkElement).toBeInTheDocument();
});
