import React from "react";

const ResumeLink = () => {
  return (
    <div
      id="resume"
      className="mx-auto flex flex-col items-center justify-center py-10 h-auto w-full relative"
    >
      <h2 className="font-raleway text-xl lg:text-4xl text-center" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>My Resume</h2>
      <p className="font-raleway text-xl lg:text-2xl text-center" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>
        Click the link below to download my resume:
      </p>
      <a
        className="font-raleway text-2xl lg:text-4xl text-center hover:text-darkGray border border-dashed border-white p-3 rounded-md mt-4 hover:border-darkGray"
        href={`${process.env.PUBLIC_URL}files/MH-Coding-Resume.pdf`}
        target="_blank"
        download="MH-Coding-Resume.pdf" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeLink;
