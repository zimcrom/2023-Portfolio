import Image from "next/image";
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
      <Image
        src={bgImage}
        alt={alt}
        fill
        className="lg:aspect-video lg:w-full lg:h-auto h-full aspect-auto object-center flex-1 object-cover absolute z-0"
      />
      <div
        className={`flex flex-col md:w-1/2 sm:w-3/4 w-full gap-y-3 lg:gap-y-5 z-10 `}
      >
        <h2 className="font-raleway text-xl lg:text-4xl text-center">My experience</h2>
        {header1 && (
          <h2
            className={`font-raleway lg:text-8xl text-4xl  ${textAlign}`}
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
          >
            {header1}
          </h2>
        )}
        {header2 && (
          <p
            className={`font-raleway px-4 lg:px-0 text-xl lg:text-2xl ${textAlign}`}
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
          >
            {header2}
          </p>
        )}
        <div className="mx-auto grid max-w-5xl gap-12 py-12 lg:grid-cols-2 text-center px-4 lg:px-0">
          <div className="grid gap-6">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>Front-End Development</h3>
              <p className="text-black bg-white rounded-xl bg-opacity-60 p-2">
                HTML5, CSS3, JavaScript, jQuery, Bootstrap, Materialize,
                Tailwind, React, Angular, TypeScript, NextJS
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>Back-End Development</h3>
              <p className="text-black bg-white rounded-xl bg-opacity-60 p-2">
                Node.js, Express, PHP, Java, Kotlin, C#, Python
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>Databases</h3>
              <p className="text-black bg-white rounded-xl bg-opacity-60 p-2">MySQL, MongoDB</p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>Programming Languages</h3>
              <p className="text-black bg-white rounded-xl bg-opacity-60 p-2">
                JavaScript, TypeScript, Java, Kotlin, C#, Python
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>Template Engine</h3>
              <p className="text-black bg-white rounded-xl bg-opacity-60 p-2">Handlebars.js</p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>Cloud Platforms</h3>
              <p className="text-black bg-white rounded-xl bg-opacity-60 p-2">
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
