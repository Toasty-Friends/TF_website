import { useWallet } from "@solana/wallet-adapter-react";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import StakeV2Page from "./StakingV2";
import { FaDiscord } from "react-icons/fa";
import Admin from "pages/admin";

export function ClubhouseAppbar() {
  const { publicKey } = useWallet();
  const { data: session } = useSession();
  const [status, setStatus] = useState(String);
  const [showHome, setShowHome] = useState(true);
  const [showVerify, setShowVerify] = useState(false);
  const [showStakingV2, setShowStakingV2] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [gotHolder, setGotHolder] = useState(false)

  async function verifyHolder() {
    const resp = await fetch(
      `https://mint-toastyfriends.club:8888/set_holder?wallet_id=${publicKey.toString()}&discord_id=${
        //@ts-ignore
        session.profile.id
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
    setGotHolder(true)
    var count = 0
    do{
      count++
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
    } while (count < 1);
  }
  if (gotHolder==false){
  getHolder();
  }
  
  const handleHome = (event) => {
    setShowHome(true);
    setShowVerify(false);
    setShowStakingV2(false);
  };
  const handleStakingV2 = (event) => {
    setShowHome(false);
    setShowVerify(false);
    setShowStakingV2(true);
  };
  const handleAdmin = (event) => {
    setShowHome(false);
    setShowVerify(false);
    setShowStakingV2(false);
    setShowAdmin(true)
  };
  return (
    <>
      <button
        onClick={() =>
          signOut({ callbackUrl: "https://toastyfriends.club/Clubhouse" })
        }
        className="DiscordSignOut"
      >
        <p>
          <div className="DiscordIcon">
            <FaDiscord />
          </div>
          Sign out
        </p>
      </button>
      {status == "ACTIVE" ? (
        <>
          <div className="ClubhouseAppbar">
            <button onClick={handleHome}>Home</button>
            <button onClick={handleStakingV2}>Staking</button>
            {session.user.name == "The Lost Toastr" ? (
              <button onClick={handleAdmin}>Admin</button>
            ) :
            (<></>)
            }
          </div>
          <div className="clubhouseComp">
            {showHome ? (
               <div className="ClubhouseHomeVerify">
               <h1>Welcome to the clubhouse!</h1>
               <p>This is where the magic happens!
                <br/>
                <br/>
                Check out our features that have all built in house:
                <br/>
                <br/>
                  <li>Holder Verification</li>
                  <li>Non-custodial Staking</li>
                  <li>More To Be Added...</li>
               </p>
               </div>
            ) : showStakingV2 ? (
              <StakeV2Page />
            ) : showAdmin ? (
              <Admin/>
            ): (
              <>ERROR</>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="ClubhouseHome">
            <h1>Welcome to the clubhouse!</h1>
            {/* set loading screen after button click */}
            <button className="VerifyButton" onClick={verifyHolder}>Verify</button>
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
              <li>Added Discord Login</li>
              <li>Fixed seeing all wallet NFT's</li>
              <li>Added Holder Verifications</li>
          </div>
        </>
      )}
    </>
  );
}
