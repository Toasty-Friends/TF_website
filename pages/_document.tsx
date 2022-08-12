import Appbar from "Components/Appbar";
import Footer from "Components/FooterSoc";
import { Html, Head, Main, NextScript } from "next/document";
import _app from "./_app";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" />
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
        <meta name="Toasty Friends" content="D-App for Toasty Friends NFT" />
        <link rel="manifest" href="manifest.json" />
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
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <header>
        <Appbar />
      </header>
      <body>
        <Main />
        <NextScript />
      </body>
      <footer>
        <Footer />
      </footer>
    </Html>
  );
}
