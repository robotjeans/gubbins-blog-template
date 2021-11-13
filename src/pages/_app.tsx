import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import Layout from "@/components/common/Layout";
import GlobalStyle from "@/styles/global";
import theme from "@/styles/theme";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
