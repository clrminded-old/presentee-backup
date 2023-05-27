import React, { useState } from 'react';

const FileUploader = () => {
  // State to hold the uploaded file and the file to view
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileToView, setFileToView] = useState(null);

  // Handler function for file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  // Function to view the file content
  const viewFile = (file) => {
    // Create a FileReader instance to read the file content
    const reader = new FileReader();
    reader.onloadend = () => {
      const content = reader.result;
      setFileToView({ file, content });
    };
    // Read the file content as text
    reader.readAsText(file);
  };

  return (
    <div>
      {/* File input element */}
      <label htmlFor="fileInput">Select a PDF file</label>
      <input
        id="fileInput"
        type="file"
        accept=".pdf"
        onChange={handleFileUpload}
      />
     

      {/* Display uploaded file details and view button */}
      {uploadedFile && (
        <div>
          <p data-testid="uploaded-file-name">{uploadedFile.name}</p>
          <button onClick={() => viewFile(uploadedFile)}>View File</button>
        </div>
      )}

      {/* Display file content */}
      {fileToView && (
        <iframe
        src={fileToView.content}
        title="PDF Viewer"
        width="100%"
        height="500px"
        data-testid="file-viewer"
      />
      )}
    </div>
  );
};

export default FileUploader;
