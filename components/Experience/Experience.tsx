import React from "react";

const Experience: React.FunctionComponent<{
  header1?: string;
  header2?: string;
  bgImage: string;
  alt: string;
  paragraph: string;
  paragraph2?: string;
  align: string;
  textAlign: string;
}> = ({
  header1,
  header2,
  bgImage,
  alt,
  paragraph,
  paragraph2,
  align,
  textAlign,
}) => {
  return (
    <div
      id="experience"
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
        <h2 className="font-raleway text-4xl text-center">My experience</h2>
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
        <div className="mx-auto grid max-w-5xl gap-12 py-12 lg:grid-cols-2">
          <div className="grid gap-6">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Front-End Development</h3>
              <p className="text-gray-500 dark:text-gray-400">
                HTML5, CSS3, JavaScript, jQuery, Bootstrap, Materialize,
                Tailwind, React, Angular, TypeScript, NextJS
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Back-End Development</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Node.js, Express, PHP, Java, Kotlin, C#, Python
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Databases</h3>
              <p className="text-gray-500 dark:text-gray-400">MySQL, MongoDB</p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Programming Languages</h3>
              <p className="text-gray-500 dark:text-gray-400">
                JavaScript, TypeScript, Java, Kotlin, C#, Python
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Template Engine</h3>
              <p className="text-gray-500 dark:text-gray-400">Handlebars.js</p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Cloud Platforms</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Firebase, Netlify, Heroku
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
