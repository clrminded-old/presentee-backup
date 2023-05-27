import React from 'react';
import FileUploader from '../../Components/FileUploader/FileUploader';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the homepage of your app.</p>
      <p>You can add more content and components here.</p>
      <FileUploader />
    </div>
  );
};

export default HomePage;