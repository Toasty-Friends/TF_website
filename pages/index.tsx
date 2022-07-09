import React, { Component } from "react";
import Appbar from "../Components/Appbar"

export default class extends Component {
  render() {
    return (
      <>
      
        <body>
          <div className="mainpage">
            <img
              src="/images/BasementParty.jpg"
              alt="Toasty Friends Clubhouse"
              className="mainBanner"
            />
            <h1>Welcome to Toasty Friends</h1>
            <p>
              Here we are a project built by the community for the
              community. We aim for complete transparency, by showing our
              actions during each step of our journey. The goal is to bring 
              together like-minded individuals and help each other. To do this 
              we our building:
              <br />
              <br />
              • Floor Price Tracker
              <br />
              • Sale Volume Tracker
              <br />
              • Wallet Tracker (Whale, Collection, ETC.)
              <br />
              • More to be added...
              <br />
              <br />
              We hope that you will join our Toasty Friends community and accompany
              us on our journey of growth and success!
            </p>
            <br />
            <br />
            <div className="roadmap" id="Roadmap">
              <br />
              <br />
              <h1>Roadmap</h1>
              <div className="phase1">
                <p>
                  <br />
                  1️⃣ PHASE 1
                  <br />
                  <br />
                  1. Creation of Toasty Friends PFP
                  <br />
                  <br />
                  2. DAO tool implementation in discord
                  <br />
                  <br />
                  3. Launching the project to the public
                  <br />
                  - We will create a Toasty Friends community through social
                  media, discord, and word to mouth
                  <br />
                  <br />
                  4. Play mini games and challenges for winners to gain access
                  to exclusive roles. Benefits will include:
                  <br />
                  - Pre-mint access to DAO tools
                  <br />
                  - Possible free mint tokens
                  <br />
                  <br />
                  5. Finalize collection and set rarities
                  <br />
                  <br />
                  6. Minting 4444 Toasty Friends on the Solana blockchain.
                  <br />
                  <br />
                  7. Website with wallet connection &amp; smart contracts
                  <br />
                </p>
                <br />
              </div>
              <div className="phase2">
                <p>
                  <br />
                  2️⃣ PHASE 2
                  <br />
                  <br />
                  8. Staking for $CRUMB released
                  <br />
                  <br />
                  9. Clubhouse/Bot integration on website
                  <br />
                  <br />
                  10. Expansion of DAO tools, in-house and bought
                  <br />
                  <br />
                  11. Onboarding of a full time NFT caller
                  <br />
                  <br />
                  12. Begin creation of Metaverse
                  <br />
                  <br />
                  13. Integrate clubhouse/bot into Metaverse
                  <br />
                  <br />
                  14. Early beta testing of Metaverse for Toasty Friends holders
                </p>
                <br />
              </div>
              <div className="phase3">
                <p>
                  <br />
                  3️⃣ PHASE 3
                  <br />
                  <br />
                  15. Full Metaverse reveal with roadmap and breakdown
                  <br />
                  <br />
                  16. Seamless integration of benifits across Discord, Web, Mobile, and Metaverse
                  <br />
                  <br />
                  17. Personal rooms released, and addition clubhouses for partnered projects
                  <br />
                  <br />
                  18. Mini-game integration for Metaverse(FPS, Arcade, Trivia, ETC.)
                </p>
                <br />
              </div>
            </div>
          </div>
          {/* <button onClick={topFunction} id="topBtn" title="Go to top">
            Return to Top
          </button> */}
        </body>
      </>
    );
  }
}
