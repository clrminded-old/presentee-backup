import { render, screen, fireEvent } from '@testing-library/react';
import SettingsPage from '../SettingsPage';


it('renders without crashing', () => {
  render(<SettingsPage />);
});

it('has a heading', () => {
    render(<SettingsPage />);
    const heading = screen.getByText('Settings');
    expect(heading).toBeInTheDocument();
});

it('should have light mode button', () => {
  // Render the SettingsPage component
  const { getByText } = render(<SettingsPage />);

  // Find the light mode button
  const lightModeButton = getByText('Light Mode');

  // Initial mode should be light mode
  expect(lightModeButton).toBeInTheDocument();
  
});

it('should have a dark mode button', () => {
  // Render the SettingsPage component
  const { getByText } = render(<SettingsPage />);

  // Find the dark mode button
  const darkModeButton = getByText('Dark Mode');
  expect(darkModeButton).toBeInTheDocument();
  
});

it('should change to dark mode when dark mode button is clicked', () => {
  // Render the SettingsPage component
  const { getByText, container } = render(<SettingsPage />);

  const darkModeButton = getByText('Dark Mode');
  // Simulate clicking on the dark mode button
  fireEvent.click(darkModeButton);
  // Find the dark mode button
  expect(container.firstChild).not.toHaveClass('light');
});

it('should change to dark mode when dark mode button is clicked', () => {
  // Render the SettingsPage component
  const { getByText, container } = render(<SettingsPage />);

  const lightModeButton = getByText('Light Mode');

  // Simulate clicking on the light mode button
  fireEvent.click(lightModeButton);
  // Find the light mode button
  expect(container.firstChild).not.toHaveClass('dark');
});




