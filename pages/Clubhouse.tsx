import { useWallet } from "@solana/wallet-adapter-react";
import { Text } from "theme-ui";
import DiscordLogin from "Components/discordLogin";
import { useSession } from "next-auth/react";
import WalletHeader from "Components/Header/WalletHeader";
import { ClubhouseAppbar } from "Components/ClubhouseAppbar";
import {
  WalletConnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

export default function Clubhouse() {
  const { publicKey } = useWallet();
  const { data: session } = useSession();

  return (
    <>
      <div className="WalletButton">
        <WalletMultiButton />
      </div>
      {publicKey && session ? (
        <>
          <ClubhouseAppbar />
          
        </>
      ) : (
        <></>
      )}

      {!publicKey ? (
        <div className="NoWallet">
          <p>
            Please, Connect your wallet to continue.
          </p>
        </div>
      ) : !session ? (
        <>
          <DiscordLogin />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
