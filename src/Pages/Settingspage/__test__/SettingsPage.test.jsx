import { render, screen } from '@testing-library/react';
import SettingsPage from '../SettingsPage';


it('renders without crashing', () => {
  render(<SettingsPage />);
});

it('has a heading', () => {
    render(<SettingsPage />);
    const heading = screen.getByText('Settings');
    expect(heading).toBeInTheDocument();
});
