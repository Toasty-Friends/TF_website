import { useWallet } from "@solana/wallet-adapter-react";
import { Text } from "theme-ui"
import DiscordLogin from "Components/discordLogin";
import { useSession } from "next-auth/react";
import WalletHeader from "Components/Header/WalletHeader";
import { ClubhouseAppbar } from "Components/ClubhouseAppbar";

export default function Clubhouse() {

  const { publicKey } = useWallet()
  const { data: session } = useSession();



  return (
    <>
      {publicKey && session ? (
        <>
        <ClubhouseAppbar/>
        </>

      ): (
        <>
        </>
      )}
      <WalletHeader/>
      {!publicKey && !session ? (
            <Text
            sx={{
              textAlign: "center",
              margin: "3.2rem 0",
            }}
          >
            Please, Connect your Phantom wallet.
          </Text>
        ) : publicKey && !session ? (
            <>
            <DiscordLogin/>
            </>
        ) : (
          <>
          </>
        )
      }
    </>
  );
}
