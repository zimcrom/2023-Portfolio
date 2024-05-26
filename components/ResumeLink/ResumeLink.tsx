import React from 'react';

const ResumeLink = () => {
  return (
    <div>
      <h2>My Portfolio</h2>
      <p>Click the link below to download my resume:</p>
      <a href={`${process.env.PUBLIC_URL}files/MH-Coding-Resume.pdf`} download="MH-Coding-Resume.pdf">
        Download Resume
      </a>
    </div>
  );
};

export default ResumeLink;
