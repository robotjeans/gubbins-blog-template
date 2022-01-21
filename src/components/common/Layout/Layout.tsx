import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

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
    <>
      <Header isSticky={scrollY > 100} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
