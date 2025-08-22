import React from 'react';
import UploadForm from '../components/UploadForm';
import CoverLetterForm from '../components/CoverLetterForm';
import LinkedInForm from '../components/LinkedInForm';

export default function Home() {
  return (
    <div style={{padding: '2rem'}}>
      <h1 style={{color: '#53C3C4'}}>AI Career Platform</h1>
      <UploadForm />
      <hr style={{margin:'2rem 0'}}/>
      <CoverLetterForm />
      <hr style={{margin:'2rem 0'}}/>
      <LinkedInForm />
    </div>
  );
}
