import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/Navigationbar/NavigationBar';
import HomePage from './Pages/Homepage/HomePage';
import AboutPage from './Pages/Aboutpage/AboutPage';
import ContactPage from './Pages/Contactpage/ContactPage';
import SettingsPage from './Pages/Settingspage/SettingsPage'; 
import './App.css';
import './dark-mode.css';
import './light-mode.css';

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Function to toggle the theme will be used to pass to Settings component
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Function to set the theme to light mode and will be used to pass to Settings component
  const setLightTheme = () => {
    setTheme('light');
  };

  return (
   
      <div className={`App ${theme}`}>
        <NavigationBar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/settings" element={<SettingsPage theme={theme} toggleTheme={toggleTheme} setLightTheme={setLightTheme} />} />
        </Routes>
      </div>
   
  );
}

export default App;
