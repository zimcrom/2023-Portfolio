import Link from "next/link";

const Header: React.FunctionComponent<{}> = ({}) => {
  return (
    <nav className="flex flex-row bg-black">
      <img
        src="/M.gif"
        alt="Large letter M with the name Morgan Henning beneath it"
        className="ml-0 max-w-[25%]"
      />
        <ul className="list-none flex justify-end flex-row w-full gap-x-12 my-auto">
          <li>
            <Link href="" title="Experience" className="text-[1.75rem] transition-all hover:text-[2.25rem] hover:text-lightGray">
              Experience
            </Link>
          </li>
          <li>
            <Link href="" title="Projects" className="text-[1.75rem] transition-all hover:text-[2.25rem] hover:text-lightGray">
              Projects
            </Link>
          </li>
          <li>
            <Link href="" title="Resume" className="mr-12 text-[1.75rem] transition-all hover:text-[2.25rem] hover:text-lightGray">
              Resume
            </Link>
          </li>
        </ul>
    </nav>
  );
};

export default Header;
