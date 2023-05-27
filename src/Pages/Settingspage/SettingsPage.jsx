import React, { useState, useEffect } from 'react';

const SettingsPage = () => {
  // State variable to store the current theme, defaults to 'light' if no theme is found in localStorage
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Update the theme in localStorage whenever the theme state changes
    localStorage.setItem('theme', theme);

    // Apply the theme to the document's root element (HTML tag) using a data-theme attribute
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Function to toggle between 'light' and 'dark' theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div>
      <h2>Settings</h2>
      {/* Checkbox to toggle the theme */}
      <label>
        <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
        Dark Mode
      </label>
    </div>
  );
};

export default SettingsPage;
