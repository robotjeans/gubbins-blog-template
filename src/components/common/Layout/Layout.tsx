import { useState, useEffect } from "react";
import Head from "next/head";
import { gsap } from "gsap";
import Header from "@/components/common/Header";

const Layout: React.FC<{ title?: string }> = ({
  children,
  title = "Gubbins",
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <div>
        <Header isSticky={scrollY > 100} />
        <div
          className={`${
            scrollY <= 100
              ? "pt-[110px] md:pt-[128px]"
              : "pt-[64px] md:pt-[80px]"
          } overflow-y-scroll`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
