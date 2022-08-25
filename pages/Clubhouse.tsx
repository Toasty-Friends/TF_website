import { useWallet } from "@solana/wallet-adapter-react";
import { Text } from "theme-ui"
import DiscordLogin from "Components/discordLogin";
import { useSession } from "next-auth/react";
import WalletHeader from "Components/Header/WalletHeader";
import Getter from "Components/Getter";
import { ClubhouseAppbar } from "Components/ClubhouseAppbar";
import Staking from "Components/Staking";

export default function Clubhouse() {

  const { publicKey } = useWallet()
  const { data: session } = useSession();


  // async function fetchTest(wallet_id, discord_id) {
  //   await fetch(
  //     `http://139.144.63.135:8888/set_holder?wallet_id=${wallet_id}&discord_id=${discord_id}`,
  //     {
  //       method: "POST",
  //       mode: "cors",
  //     }
  //   );
  // }  

  return (
    <>
      {publicKey && session ? (
        <ClubhouseAppbar/>
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
          {/* Render from buttons here */}
          {/* You are logged in as&nbsp; */}
          {/* <Getter/> */}
          </>
        )
      }
    </>
  );
}
