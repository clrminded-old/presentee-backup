import React from 'react';

const SettingsPage = ({ theme, toggleTheme, setLightTheme }) => {

  return (
    <div>
      <h2>Settings</h2>

        {/* Button to set the theme to dark mode */}
        <button onClick={toggleTheme}>Dark Mode</button>

        {/* Button to set the theme to light mode */}
        <button onClick={setLightTheme}>Light Mode</button>
        
    </div>
  );
};

export default SettingsPage;
