import React from 'react';

const ResumeLink = () => {
  return (
    <div id="resume" className="mx-auto flex flex-col items-center justify-center py-10 h-auto w-full relative">
      <h2 className="font-raleway text-4xl text-center">My Portfolio</h2>
      <p className="font-raleway text-2xl">Click the link below to download my resume:</p>
      <a className="font-raleway text-4xl hover:text-darkGray" href={`${process.env.PUBLIC_URL}files/MH-Coding-Resume.pdf`} target="_blank" download="MH-Coding-Resume.pdf">
        Download Resume
      </a>
    </div>
  );
};

export default ResumeLink;
