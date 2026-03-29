import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the greeting and change button', () => {
  render(<App />);
  expect(screen.getByText(/Hi David Diaz, I work at Mr. Hacker/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /change name/i })).toBeInTheDocument();
});
