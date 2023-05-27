import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/Navigationbar/NavigationBar';
import HomePage from './Pages/Homepage/HomePage';
import AboutPage from './Pages/Aboutpage/AboutPage';
import ContactPage from './Pages/Contactpage/ContactPage';
import SettingsPage from './Pages/Settingspage/SettingsPage'; 

function App() {
  return (
   
      <div className="App">
        <NavigationBar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
   
  );
}

export default App;
