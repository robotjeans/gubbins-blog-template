import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/common/Header";

const Layout: React.FC<{ title?: string }> = ({
  children,
  title = "IIRKD.",
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
    <div className="">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>

      <Header isSticky={scrollY > 100} />

      <main
        className={`${
          scrollY <= 100 ? "pt-[110px] md:pt-[128px]" : "pt-[64px] md:pt-[80px]"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
