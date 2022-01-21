import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  isSticky: boolean;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ isSticky, className }) => {
  const addAllClasses = ["header sticky top-0 z-20 bg-white text-blue-800"];

  if (className) addAllClasses.push(className);

  return (
    <header className={addAllClasses.join(" ")}>
      <div className="container">
        <nav className="h-14 lg:h-20 w-full flex justify-between items-center text-10 relative">
          <ul className="hidden lg:flex list-none">
            <li className="flex items-center mr-4">
              <Link href="/">
                <a>Link A</a>
              </Link>
            </li>
            <li className="flex items-center mr-4">
              <Link href="/">
                <a>Link B</a>
              </Link>
            </li>
            <li className="flex items-center mr-0">
              <Link href="/">
                <a>Link C</a>
              </Link>
            </li>
          </ul>
          <Link href="/">
            <a>
              <Image
                src="/svgs/iirkd_logo_text.svg"
                alt="Home Logo"
                height={30}
                width={60}
              />
            </a>
          </Link>
          <ul className="hidden lg:flex list-none">
            <li className="flex items-center mr-4">
              <Link href="/">
                <a>Link D</a>
              </Link>
            </li>
            <li className="flex items-center mr-4">
              <Link href="/">
                <a>Link E</a>
              </Link>
            </li>
            <li className="flex items-center mr-0">
              <Link href="/">
                <a>Link F</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <style scoped>{`
        .header {
          transition: background-color 0s ease,color 0s ease;
        }
      `}</style>
    </header>
  );
};

export default Header;

Header.defaultProps = {
  isSticky: false,
};
