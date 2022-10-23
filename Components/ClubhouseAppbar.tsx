import { useWallet } from "@solana/wallet-adapter-react";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import StakeV2Page from "./StakingV2";
import { FaDiscord } from "react-icons/fa";
import Admin from "pages/admin";
import TwitterChecker from "./TwitterChecker";
import Stats from "./Stats";

export function ClubhouseAppbar() {
  const { publicKey } = useWallet();
  const { data: session } = useSession();
  const [status, setStatus] = useState(String);
  const [showHome, setShowHome] = useState(true);
  const [showVerify, setShowVerify] = useState(false);
  const [showStakingV2, setShowStakingV2] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showTwitter, setShowTwitter] = useState(false);
  var [isLoading, setIsLoading] = useState(true);

  const [gotHolder, setGotHolder] = useState(false);

  async function verifyHolder() {
    setIsLoading(true);
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
    setIsLoading(false);
  }

  async function getHolder() {
    setIsLoading(true);
    setGotHolder(true);
    var count = 0;
    do {
      count++;
      const resp = await fetch(
        //@ts-ignore
        `https://mint-toastyfriends.club:8888/holder/${publicKey.toString()}`,
        {
          method: "GET",
          mode: "cors",
        }
      );
      setIsLoading(false);
      const holderInfo = await resp.json();
      setStatus(holderInfo.status);
    } while (count < 1);
  }
  if (gotHolder == false) {
    getHolder();
  }

  const handleHome = (event) => {
    setShowHome(true);
    setShowVerify(false);
    setShowStakingV2(false);
    setShowStats(false);
    setShowTwitter(false);
  };
  const handleStakingV2 = (event) => {
    setShowHome(false);
    setShowVerify(false);
    setShowStakingV2(true);
    setShowStats(false);
    setShowTwitter(false);
  };
  const handleAdmin = (event) => {
    setShowHome(false);
    setShowVerify(false);
    setShowStakingV2(false);
    setShowAdmin(true);
    setShowStats(false);
    setShowTwitter(false);
  };
  const handleStats = (event) => {
    setShowHome(false);
    setShowVerify(false);
    setShowStakingV2(false);
    setShowAdmin(false);
    setShowStats(true);
    setShowTwitter(false);
  };
  const handleTwitter = (event) => {
    setShowHome(false);
    setShowVerify(false);
    setShowStakingV2(false);
    setShowAdmin(false);
    setShowStats(false);
    setShowTwitter(true);
  };
  return (
    <>
    {isLoading == false ? (
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
                <button onClick={handleStats}>Stats</button>
                <button onClick={handleTwitter}>Twitter</button>
                {session.user.email == "josht98@aol.com" ? (
                  <button onClick={handleAdmin}>Admin</button>
                ) : (
                  <></>
                )}
              </div>
              <div className="clubhouseComp">
                {showHome ? (
                  <div className="ClubhouseHomeVerify">
                    <h1>Welcome to the clubhouse!</h1>
                    <p>
                      This is where the magic happens!
                      <br />
                      <br />
                      Check out our features that have all built in house:
                      <br />
                      <br />
                      <li>Holder Verification</li>
                      <li>Non-custodial Staking</li>
                      <li>Stats Checker for any project</li>
                      <li>Activity Checker for Twitter</li>
                      <li>More To Be Added...</li>
                    </p>
                  </div>
                ) : showStakingV2 ? (
                  <StakeV2Page />
                ) : showAdmin ? (
                  <Admin />
                ) : showStats ? (
                  <Stats />
                ) : showTwitter ? (
                  <TwitterChecker />
                ) : (
                  <>ERROR</>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="ClubhouseHome">
                <h1>Welcome to the clubhouse!</h1>
                <button className="VerifyButton" onClick={verifyHolder}>
                  Verify
                </button>
                <p>
                  This section is still under development! UI will be modified
                  and cleaned up but functionality is the main focus currently!
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
      ) : (
        <></>
      )}
    </>
  );
}
