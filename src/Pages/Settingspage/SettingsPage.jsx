import React from 'react';

const SettingsPage = ({ theme, toggleTheme, setLightTheme }) => {

  return (
    <div>
      <h2>Settings</h2>
      {/* Checkbox to toggle the theme */}
      <label>
        <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
        Dark Mode
      </label>

      {/* Button to set the theme to light mode */}
      <button onClick={setLightTheme}>Light Mode</button>
    </div>
  );
};

export default SettingsPage;
