import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import "@/styles/global.css";
import Layout from "@/components/common/Layout";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
