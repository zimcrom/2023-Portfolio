import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResumeLink: React.FunctionComponent<{
  header1?: string;
  header2?: string;
  src: string;
  bgImage: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  bgHoverImage: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
}> = ({ header1, header2, src, bgImage, bgHoverImage }) => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center h-auto w-full relative">
      <Link href={src}>
        <div className="product-wrapper py-auto relative flex h-full flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="mx-auto block w-full py-8 md:hidden ">
            <h3 className="text-center font-raleway text-[1.3rem] font-semibold uppercase leading-none tracking-widest md:text-white lg:text-[1.5rem]">
              {header1}
            </h3>
            <span className=" text-center font-raleway text-[1.15rem] capitalize leading-none lg:text-[1.5rem]">
              {header2}
            </span>
          </div>
          <Image
            src={bgImage.src}
            alt={bgImage.alt}
            priority={true}
            width={bgImage.width}
            height={bgImage.height}
            className="img mx-auto"
          />
          <Image
            src={bgHoverImage.src}
            alt={bgHoverImage.alt}
            priority={true}
            width={bgHoverImage.width}
            height={bgHoverImage.height}
            className="hoverImg mx-auto"
          />

          <div className="absolute bottom-8 z-10 hidden md:block">
            <h3 className="text-center font-montserrat text-[1.15rem] font-semibold uppercase leading-none tracking-widest text-white lg:text-[1.5rem]">
              {header1}
            </h3>
            <h3
              className={`text-center font-raleway text-[1.15rem] capitalize leading-none lg:text-[1.5rem]`}
            >
              {header2}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ResumeLink;
