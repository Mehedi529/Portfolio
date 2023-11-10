
const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume file in the public folder
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div id="resume">
      <h2>Your Portfolio</h2>
      {/* Other portfolio content */}
      <button onClick={downloadResume}>Download Resume</button>
    </div>
  );
};

export default Resume;
