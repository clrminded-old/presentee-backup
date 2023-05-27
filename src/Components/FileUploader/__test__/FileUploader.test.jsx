import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FileUploader from '../FileUploader';

describe('FileUploader', () => {

  it('should render without crashing', () => {  
    render(<FileUploader />)
  });

  it('should have a label to select file', () => {
    const { getByLabelText } = render(<FileUploader />);
    const fileInput = getByLabelText('Select a PDF file');
    expect(fileInput).toBeInTheDocument();
  });


  

  
});
