import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FunctionComponent<{}> = ({}) => {
  const [dropDown, setDropDown] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const burgerMenu = document.querySelector(".burger-menu");

    burgerMenu?.classList.add("clicked");

    if (dropDown && !loaded) setLoaded(true);
  }, [dropDown]);

  const handleDropDown = () => {
    const burgerMenu = document.querySelector(".burger-menu");

    if (!dropDown) {
      document.body.style.height = "100vh";
      document.body.style.width = "100%";
      document.body.style.overflowY = "hidden";
    } else {
      burgerMenu?.classList.remove("clicked");
      document.body.style.height = "auto";
      document.body.style.width = "auto";
      document.body.style.overflowY = "auto";
      setLoaded(false);
    }

    setDropDown(!dropDown);
  };

  return (
    <header
      className={`top-0 z-50 mx-auto bg-black ${
        dropDown ? "relative lg:h-screen" : "relative"
      }`}
    >
      <a className="skip-link text-black" href="#main">
        Skip to content
      </a>
      <nav className="flex flex-row w-full">
        <Link href="/" className="flex flex-col pl-2 py-2 lg:pl-5 lg:py-5">
          <Image
            src="/images/M.gif"
            alt="Large logo of letter M with the name Morgan Henning beneath it"
            width={250}
            height={250}
          />
        </Link>
        <div className="flex flex-col w-full">
          <ul className="hidden h-full w-full items-center justify-evenly lg:flex lg:flex-row my-auto">
            <li className="flex px-12">
              <Link href="#experience" rel="noreferrer" title="Experience" className="text-3xl font-montserrat transition-all hover:text-5xl hover:text-lightGray">
                Experience
              </Link>
            </li>
            <li className="flex px-12">
              <Link href="/" rel="noreferrer" className="text-3xl font-montserrat transition-all hover:text-5xl hover:text-lightGray">
                Projects
              </Link>
            </li>
            <li className="flex px-12">
              <Link href="/" rel="noreferrer" className="text-3xl font-montserrat transition-all hover:text-5xl hover:text-lightGray">
                Resume
              </Link>
            </li>
            <li className="flex px-12">
              <Link href="/" rel="noreferrer" className="text-3xl font-montserrat transition-all hover:text-5xl hover:text-lightGray">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {loaded && (
          <ul className="lg:hidden h-full w-full items-center justify-evenly flex flex-col my-auto bg-opacity-100 fixed bg-black">
            <li className="flex px-12">
              <Link href="/" rel="noreferrer" className="text-3xl font-montserrat transition-all hover:text-5xl hover:text-lightGray">
                Experience
              </Link>
            </li>
            <li className="flex px-12">
              <Link href="/get-inspired" rel="noreferrer" className="text-3xl font-montserrat transition-all hover:text-5xl hover:text-lightGray">
                Projects
              </Link>
            </li>
            <li className="flex px-12">
              <Link href="/" rel="noreferrer" className="text-3xl font-montserrat transition-all hover:text-5xl hover:text-lightGray">
                Resume
              </Link>
            </li>
            <li className="flex px-12">
              <Link href="/" rel="noreferrer" className="text-3xl font-montserrat transition-all hover:text-5xl hover:text-lightGray">
                Contact
              </Link>
            </li>
          </ul>
        )}
        <div className="burger-menu-wrapper my-auto flex h-full flex-col items-center justify-center px-5 lg:hidden">
          <button
            className="burger-menu z-30 cursor-pointer"
            onClick={handleDropDown}
            aria-expanded={dropDown}
            type="button"
            title="menu button"
          >
            {!dropDown && (
              <>
                <div className="line h-[10px] w-10 border-b-[3px] border-white"></div>
                <div className="line h-[10px] w-10 border-b-[3px] border-white"></div>
                <div className="line h-[10px] w-10 border-b-[3px] border-white"></div>
              </>
            )}
            {dropDown && (
              <>
                <div className="z-40 text-4xl text-white">X</div>
              </>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
