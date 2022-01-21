import Link from "next/link";

const Header: React.FC<{ isSticky?: boolean }> = ({ isSticky }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-30">
      <div
        className={`pt-3 pb-3 md:pt-4 md:pb-4 xl:pt-5 xl:pb-5 flex items-center transition-all ease-in-out duration-500 overflow-visible ${
          !isSticky
            ? "h-[110px] md:h-[128px] 2xl:h-[128px]"
            : "h-[64px] md:h-[80px] 2xl:h-[90px]"
        }`}
      >
        <div className="max-w-7xl w-full m-auto">
          <div className="flex flex-wrap items-center relative">
            <div className="flex flex-wrap items-center">
              <div className="md:border-r mr-5 pr-5 transition-all ease-in-out duration-500 border-opacity-30 border-teal-400">
                <Link href="/">
                  <a
                    aria-label="Navigate to home page"
                    className="block py-2 ring-white"
                  >
                    <div className="transition-all ease-in-out duration-500 w-24 md:w-32 xl:w-40">
                      <img
                        src="/svgs/iirkd_logo_text.svg"
                        alt="irrkd logo text"
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="overflow-hidden">
                <span className="text-sm font-medium hidden md:block transform transition-transform ease-in-out duration-500 translate-x-0">
                  Past, Present & Future Blog
                </span>
              </div>
            </div>
            <div className="ml-auto">
              <div className="flex items-center space-x-1 relative z-10">
                <Link href="/signin">
                  <a className="text-center font-bold px-4 md:px-6 py-2 text-blue-600 ring-blue-600 hidden md:inline-block group overflow-hidden transition-colors ease-in-out duration-500 relative z-10 bg-white hover:text-white">
                    <span className="block relative z-10">Sign In</span>
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-900 group-hover:h-full group-focus:h-full transition-all ease-in-out duration-500 z-0"></div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.defaultProps = {
  isSticky: false,
};
