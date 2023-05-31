import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';


it('renders without crashing', () => {
  render(<HomePage />);
});

it('has a heading', () => {
    render(<HomePage />);
    const heading = screen.getByText('Welcome to Presentee!');
    expect(heading).toBeInTheDocument();
});

