import { render, screen } from '@testing-library/react';
import ContactPage from '../ContactPage';


it('renders without crashing', () => {
  render(<ContactPage />);
});

it('has a heading', () => {
    render(<ContactPage />);
    const heading = screen.getByText('Welcome to the Contact Page');
    expect(heading).toBeInTheDocument();
});