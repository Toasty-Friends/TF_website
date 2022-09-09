import { useWallet } from "@solana/wallet-adapter-react";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import Staking from "./Staking";
import StakeV2Page from "./StakingV2";

export function ClubhouseAppbar() {
  const { publicKey } = useWallet();
  const { data: session } = useSession();
  const [status, setStatus] = useState(String);
  const [showStaking, setShowStaking] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const [showStakingV2, setShowStakingV2] = useState(false);

  async function verifyHolder() {
    const resp = await fetch(
      //@ts-ignore
      `https://mint-toastyfriends.club:8888/set_holder?wallet_id=${publicKey.toString()}&discord_id=${session.profile.id
      }`,
      {
        method: "POST",
        mode: "cors",
      }
    );
    const holderInfo = await resp.json();
    setStatus(holderInfo.status);
  }

  async function getHolder() {
    const resp = await fetch(
      //@ts-ignore
      `https://mint-toastyfriends.club:8888/holder/${publicKey.toString()}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const holderInfo = await resp.json();
    setStatus(holderInfo.status);
  }

  getHolder();

  const handleHome = (event) => {
    setShowStaking(false);
    setShowVerify(false);
    setShowStakingV2(false);
  };
  const handleStaking = (event) => {
    setShowStaking(true);
    setShowVerify(false);
    setShowStakingV2(false);
  };
  const handleStakingV2 = (event) => {
    setShowStaking(false);
    setShowVerify(false);
    setShowStakingV2(true);
  };
  return (
    <>
      <button
        onClick={() =>
          signOut({ callbackUrl: "https://toastyfriends.club/Clubhouse" })
        }
        className="DiscordSignOut"
      >
        <br />
        Sign out
      </button>
      {status == "ACTIVE" ? (
        <>
          <div className="ClubhouseAppbar">
            <button onClick={handleStaking}>Staking</button>
            <button onClick={handleStakingV2}>Staking.V2</button>
          </div>
          <div className="clubhouseComp">
            {showStaking ? (
              <Staking />
            ) : showStakingV2 ? (
              <StakeV2Page />
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="ClubhouseHome">
            <h1>Welcome to the clubhouse!</h1>
            <br />
            <button onClick={verifyHolder}>Verify</button>
            <br />
            <br />
            <br />
            <br />

            <Staking />
            <br />
            <p>
              This section is still under development! UI will be modified and
              cleaned up but functionality is the main focus currently!
              <br />
              <br />
              <br />
              Recent Updates:
              <br />
              <br />
            </p>
            <ul>
              <li>Added Discord Login</li>
              <li>Fixed seeing all wallet NFT's</li>
              <li>Added Holder Verifications</li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
