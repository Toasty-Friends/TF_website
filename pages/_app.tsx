import * as React from 'react';
import "../public/styles/index.css";
import "../public/styles/tfstyle.css";
import Appbar from "../Components/Appbar"
import Footer from "../Components/FooterSoc";
import Head from "../node_modules/next/head";


export default function MyApp({Component,pageProps}) {
  return (
    <>
      <Head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Toasty Friends" content="D-App for Toasty Friends NFT" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Oswald:wght@200;300;500&display=swap"
          rel="stylesheet"
        />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ba610a" />
        <meta name="msapplication-TileColor" content="#ba610a" />
        <meta name="theme-color" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="UTF-8" />
        <title>Toasty Friends</title>
      </Head>
      <Appbar /> 
                <Component {...pageProps} />
      <Footer/>
    </>
  );
}
