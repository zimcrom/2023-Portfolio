import React from "react";

const TextBlock: React.FunctionComponent<{
  header1?: string;
  header2?: string;
  bgImage: string;
  alt: string;
  paragraph: string;
  paragraph2?: string;
  align: string;
  textAlign: string;
}> = ({ header1, header2, bgImage, alt, paragraph, paragraph2, align, textAlign }) => {
  return (
    <div
      className={`mx-auto flex flex-col items-center ${align} py-10 md:flex-row h-auto w-full relative`}
    >
        <span className="bg-gradient-to-b from-black to-transparent z-30 w-full h-2 absolute top-0"></span>
        <img src={bgImage} alt={alt} className="lg:aspect-video lg:w-full lg:h-auto h-full aspect-auto object-center flex-1 object-cover absolute z-0" />
      <div
        className={`flex flex-col md:w-1/2 sm:w-3/4 w-full gap-y-3 lg:gap-y-5 z-10 `}
      >
        {header1 && <p className={`font-raleway lg:text-8xl text-4xl  ${textAlign}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>{header1}</p>}
        {header2 && <h1 className={`font-raleway lg:text-6xl text-2xl ${textAlign}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>{header2}</h1>}
        <p
          className={`font-montserrat px-4 lg:px-0 ${textAlign}`}
          dangerouslySetInnerHTML={{ __html: paragraph ? paragraph : "" }}
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}
        />
        {paragraph2 && (
          <div>
            <br></br>
            <p
              className={`font-montserrat px-4 lg:px-0 ${textAlign}`}
              dangerouslySetInnerHTML={{ __html: paragraph2 ? paragraph2 : "" }}
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TextBlock;
