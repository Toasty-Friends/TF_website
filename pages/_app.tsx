import * as React from "react";
import "../public/styles/index.css";
import "../public/styles/tfstyle.css";
import Router, { AppProps } from "next/dist/shared/lib/router/router";
import "@solana/wallet-adapter-react-ui/styles.css";
import withGA from "next-ga";
import { config } from "../node_modules/@fortawesome/fontawesome-svg-core";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function App(props: AppProps) {
  const { Component, Props } = props;

  return (
    <>
      <Component {...Props} />
    </>
  );
}

export default withGA(process.env.NEXT_PUBLIC_GA_ID, Router)(App);
