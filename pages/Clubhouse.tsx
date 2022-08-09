import dynamic from "next/dynamic";
import Link from "next/link";
import { Component } from "react";
import Staking from "./Staking";

export default class Clubhouse extends Component {
  render() {
    
    const WalletProvider = dynamic(
        () => import("../Components/WalletProvider/WalletProvider"),
        {
          ssr: false,
        }
      );
      

    return (
      <>
        <WalletProvider>
            <Staking />
        </WalletProvider>
      </>
    );
  }
}
