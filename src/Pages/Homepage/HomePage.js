import React from 'react';
import FileUploader from '../../Components/FileUploader/FileUploader';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='home'>
      <h1>
          Welcome to Presentee!
        </h1>
        <p>
          Welcome to Presentee, the innovative presentation platform designed to
          revolutionize the way you engage with your audience. Our mission is to
          provide presenters and attendees with an interactive and immersive
          experience, making presentations more effective, engaging, and
          memorable.
        </p>
      <FileUploader />
    </div>
  );
};

export default HomePage;