import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import * as SolanaWeb3 from "@solana/web3.js";
import * as splToken from "@solana/spl-token";

const StakeV2Page = () => {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();

  const [totalRewards, setTotalRewards] = useState(Number);
  var [claimedRewards, setClaimedRewards] = useState(Number);
  const [amount, setAmount] = useState(Number);
  const [stakingStart, setStakingStart] = useState();
  const [disabled, setDisabled] = useState(false);
  const [gotHolder, setGotHolder] = useState(false);
  var [isLoading, setLoading] = useState(true);

  const tokenMint = new SolanaWeb3.PublicKey(
    "4nxUY1jjtKZR27XcqJCW36kvAZi1iaceBTmgMK1i95gB"
  );

  async function claimRewards() {
    setLoading(true);
    setDisabled(true);
    //call claim api
    const resp = await fetch(
      //@ts-ignore
      `https://mint-toastyfriends.club:8888/claim?wallet_id=${publicKey.toString()}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const claimAmount = await resp.json();
    let amountToClaim = parseInt(claimAmount);

    const auth = SolanaWeb3.Keypair.fromSecretKey(
      Uint8Array.from([
        173, 213, 194, 154, 50, 68, 239, 80, 57, 232, 1, 139, 23, 56, 180, 44,
        203, 69, 199, 36, 10, 192, 150, 80, 72, 21, 113, 160, 234, 185, 247,
        236, 46, 162, 154, 170, 136, 179, 159, 211, 220, 246, 255, 10, 112, 62,
        121, 93, 235, 10, 81, 214, 93, 130, 87, 199, 28, 35, 106, 162, 42, 181,
        115, 254,
      ])
    );

    // form transaction from returned amount

    const transaction = new SolanaWeb3.Transaction();

    //@ts-ignore
    const fromTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
      connection,
      auth,
      tokenMint,
      auth.publicKey,
      splToken.TOKEN_PROGRAM_ID
    );
    //@ts-ignore
    const toTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
      connection,
      signTransaction,
      tokenMint,
      publicKey,
      splToken.TOKEN_PROGRAM_ID
    );

    transaction.add(
      //@ts-ignore
      splToken.createTransferInstruction(
        fromTokenAccount.address,
        toTokenAccount.address,
        auth.publicKey,
        amountToClaim,
        [],
        splToken.TOKEN_PROGRAM_ID
      )
    );

    transaction.feePayer = publicKey;
    let latestBlockHash = await await connection.getLatestBlockhash(
      "finalized"
    );

    transaction.recentBlockhash = latestBlockHash.blockhash;
    transaction.lastValidBlockHeight = latestBlockHash.lastValidBlockHeight;

    transaction.partialSign(auth);

    try {
      const signed = await signTransaction(transaction);

      const signature = await connection.sendRawTransaction(signed.serialize());

      var response = await connection.confirmTransaction({
        signature,
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
        blockhash: latestBlockHash.blockhash,
      });

      console.log(response.value.err);

      if (response.value.err == null) {
        claimedRewards += amountToClaim;
        await fetch(
          //@ts-ignore
          `https://mint-toastyfriends.club:8888/updateclaimed?wallet_id=${publicKey.toString()}&claimed=${claimedRewards}`,
          {
            method: "GET",
            mode: "cors",
          }
        );
      } else {
        console.log("Failed");
      }
    } catch (e) {
      console.log("error:", e);
    }

    // if transaction is success then vv
    setLoading(false);

    setDisabled(false);
  }

  async function getHolder() {
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
      const holderInfo = await resp.json();
      console.log(holderInfo);
      setTotalRewards(holderInfo["total rewards"]);
      setClaimedRewards(holderInfo["claimed rewards"]);
      setAmount(holderInfo.amount);
      setStakingStart(holderInfo["staking start"]);
      setLoading(false);
    } while (count < 1);
  }

  if (gotHolder == false) {
    getHolder();
  }

  return (
    <>
      {isLoading == false ? (
        <>
          <div className="StakingHeader">
            <p className="Title">
              Welcome To Toasty Friends non-custodial staking!
            </p>
            <p>(Because what goes better with breakfast than steak)</p>
          </div>
          <div className="StartedStaking">
            Started Staking: <br /> {stakingStart} UTC
          </div>
          <div className="AmountStaked">
            NFT's Staked: <br /> {amount}
          </div>
          <div className="StakingRewards">
            Your total rewards: <br /> {Math.round(totalRewards).toFixed(0)}
          </div>
          <div className="RewardsClaimed">
            Claimed already: <br /> {Math.round(claimedRewards).toFixed(0)}
          </div>
          <div className="RewardsToClaim">
            Available to claim: <br />{" "}
            {Math.round(totalRewards - claimedRewards).toFixed(0)}
          </div>
          <div className="ClaimButton">
            <button onClick={claimRewards} disabled={disabled}>
              <p>Claim</p>
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default StakeV2Page;
