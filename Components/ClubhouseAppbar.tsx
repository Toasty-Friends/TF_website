import { signOut } from "next-auth/react";
import React, { useState } from "react";
import Staking from "./Staking";

export function ClubhouseAppbar() {
  const [showStaking, setShowStaking] = useState(false);
  const [showSomething, setShowSomething] = useState(false);
  const [showAnother, setShowAnother] = useState(false);

  const handleHome = (event) => {
    setShowStaking(false)
    setShowSomething(false)
    setShowAnother(false)
  };
  const handleStaking = (event) => {
    setShowStaking(true)
    setShowSomething(false)
    setShowAnother(false)
  };
  const handleSomething = (event) => {
    setShowStaking(false)
    setShowSomething(true)
    setShowAnother(false)
  };
  const handleAnother = (event) => {
    setShowStaking(false)
    setShowSomething(false)
    setShowAnother(true)
  };
  return (
    <>
    <button
    onClick={() =>
      signOut({ callbackUrl: "http://localhost:3000/Clubhouse" })
    }
    className="DiscordSignOut"
  >
    <br/>
    Sign out
  </button>
      <div className="ClubhouseAppbar">
        <button onClick={handleHome}>Home</button>
        <button onClick={handleStaking}>Staking</button>
        {/* <button onClick={handleSomething}>Something</button>
        <button onClick={handleAnother}>Another</button> */}
      </div>
      <div className="clubhouseComp">
    {showStaking ? (
        <Staking/>
    ) : showSomething ?(
        <p>Hello</p>
    ) : showAnother ?(
        <p>Hey</p>
    ) : (
        <div className="ClubhouseHome">
        <h1>Welcome to the clubhouse!</h1>
        <p>This section is still under development! UI will be 
            modified and cleaned up but functionality is the main 
            focus currently!
            <br/>
            <br/>
            <br/>
            Recent Updates:
            <br/>
            <br/>
            <ul>
              <li>Added Discord Login</li>
              <li>Fixed seeing all wallet NFT's</li>  
            </ul></p>
        </div>
    )
    }
      </div>
    </>
  );
}
