import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const MockApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

beforeEach(() => {
  render(<MockApp />);
});


// HOME PAGE
it('has a home link is in the document', () => {
  const homeLink = screen.getByRole('link', { name: /home/i });
  expect(homeLink).toBeInTheDocument();
});

it('knows the home link is the root directory', () => {
  const homeLink = screen.getByRole('link', { name: /home/i });
  expect(homeLink.getAttribute('href')).toBe('/');
});

// ABOUT PAGE
it('has an about link is in the document', () => {
  const aboutLink = screen.getByRole('link', { name: /about/i });
  expect(aboutLink).toBeInTheDocument();
});

it('knows the about link is directs to ./about', () => {
  const aboutLink = screen.getByRole('link', { name: /about/i });
  expect(aboutLink.getAttribute('href')).toBe('/about');
});


// CONTACT PAGE
it('has a contact link is in the document', () => {
  const contactLink = screen.getByRole('link', { name: /contact/i });
  expect(contactLink).toBeInTheDocument();
});

it('knows the contact link is directs to ./contact', () => {
  const contactLink = screen.getByRole('link', { name: /contact/i });
  expect(contactLink.getAttribute('href')).toBe('/contact');
});

// SETTINGS PAGE
it('has a settings link is in the document', () => {
  const settingsLink = screen.getByRole('link', { name: /settings/i });
  expect(settingsLink).toBeInTheDocument();
});

it('knows the contact link is directs to ./contact', () => {
  const settingsLink = screen.getByRole('link', { name: /settings/i });
  expect(settingsLink.getAttribute('href')).toBe('/settings');
});




