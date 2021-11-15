import Head from "next/head";
import styled from "styled-components";
import { gsap } from "gsap";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { useEffect } from "react";

const Layout: React.FC<{ title?: string }> = ({ children, title = "IRRATIONAL" }) => {
  let tl = gsap.timeline({ paused: true });

  useEffect(() => {
    tl.to("#header", {
      scrollTrigger: {
        markers: true,
        trigger: "#container",
        start: "top 10%",
        end: "bottom 10%",
        toggleActions: "play reset play reset",
        toggleClass: "header--scroll",
      },
      duration: 0.5,
    });
  }, []);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <SC.Layout>
        <div>
          <Header id="header" />
        </div>
        <div>
          <SC.Container id="container">{children}</SC.Container>
        </div>
        <div>
          <Footer />
        </div>
      </SC.Layout>
    </>
  );
};

export default Layout;

const SC = {
  Layout: styled("div")`
    padding-top: 128px;
    overflow: hidden;
  `,
  Container: styled("div")`
    margin-left: auto;
    margin-right: auto;

    ${({ theme }) => theme.mediaQueries.md} {
      max-width: 95%;
    }

    ${({ theme }) => theme.mediaQueries.lg} {
      max-width: 1280px;
    }
  `,
};
