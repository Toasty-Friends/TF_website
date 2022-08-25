import * as React from "react";
import "../public/styles/index.css";
import "../public/styles/tfstyle.css";
// import "../styles/index.css"
import Router from "next/dist/shared/lib/router/router";
import "@solana/wallet-adapter-react-ui/styles.css";
import withGA from "next-ga";
import { config } from "../node_modules/@fortawesome/fontawesome-svg-core";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
config.autoAddCss = false;

function App({ Component, pageProps: { session, ...pageProps } }) {

  const WalletProvider = dynamic(
    () => import("../Components/WalletProvider/WalletProvider"),
    {
      ssr: false,
    }
  );

  return (
    <WalletProvider>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </WalletProvider>
  );
}

export default withGA(process.env.NEXT_PUBLIC_GA_ID, Router)(App);
