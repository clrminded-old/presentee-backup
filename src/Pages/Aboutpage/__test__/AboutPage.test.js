import { render, screen } from '@testing-library/react';
import AboutPage from '../AboutPage';


it('renders without crashing', () => {
  render(<AboutPage />);
});

it('has a heading', () => {
    render(<AboutPage />);
    const heading = screen.getByText('Welcome to the About Page');
    expect(heading).toBeInTheDocument();
});