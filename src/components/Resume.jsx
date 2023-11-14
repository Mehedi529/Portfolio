/* eslint-disable no-unused-vars */
// Resume.js

import React from 'react';

const Resume = () => {
  // Replace 'your_resume_link' with the actual link you obtained
  const resumeLink = 'https://drive.google.com/file/d/1Nw4n5XEOAsYByJ4-PHWikXNE7uU0X3V1/view?usp=sharing';

  const downloadResume = () => {
    window.open(resumeLink, '_blank');
  };

  return (
    <div id='resume' className="flex justify-center items-center mt-8">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={downloadResume}
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
