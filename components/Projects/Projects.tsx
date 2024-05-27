import React from "react";
import Project from "../Project";
import projects from "../../data/projects.json";

const Projects: React.FunctionComponent<{
  header1?: string;
  header2?: string;
  bgImage: string;
  alt: string;
  align: string;
  textAlign: string;
}> = ({
  header1,
  header2,
  bgImage,
  alt,
  align,
  textAlign,
}) => {
  const projectsArray = projects.map((project, i) => {
    return (
      <div className="w-full h-full" key={i}>
        <Project
          header1={project.header1}
          header2={project.header2}
          src={project.src}
          bgImage={project.bgImage}
          bgHoverImage={project.bgHoverImage}
        />
      </div>
    );
  });

  return (
    <div
      id="projects"
      className={`mx-auto flex flex-col items-center ${align} py-10 md:flex-row h-auto w-full relative`}
    >
      <img
        src={bgImage}
        alt={alt}
        className="aspect-video w-full h-auto flex-1 object-cover absolute z-0"
      />
      <div
        className={`flex flex-col md:w-1/2 sm:w-3/4 w-full gap-y-3 lg:gap-y-5 z-10 `}
      >
        <h2 className="font-raleway text-4xl text-center">My Projects</h2>
        {header1 && (
          <h2
            className={`font-raleway text-8xl ${textAlign}`}
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
          >
            {header1}
          </h2>
        )}
        {header2 && (
          <p
            className={`font-raleway text-2xl ${textAlign}`}
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
          >
            {header2}
          </p>
        )}
        <div className="mx-auto max-w-5xl flex flex-row flex-wrap gap-8">{projectsArray}</div>
      </div>
    </div>
  );
};

export default Projects;
