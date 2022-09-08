// import { transactions } from "@metaplex/js";
// import { sendTransaction } from "@metaplex/js/lib/actions";
// import { TransactionsBatch } from "@metaplex/js/lib/utils/transactions-batch";
// import { useConnection, useWallet } from "@solana/wallet-adapter-react"
// import { useState } from "react";
// import web3 from "@solana/web3.js"

const StakeV2Page = () => {
  // const { connection } = useConnection();
  // const { publicKey } = useWallet();

  // const [totalRewards, setTotalRewards] = useState(Number);
  // const [claimedRewards, setClaimedRewards] = useState(Number);
  // const [amount, setAmount] = useState(Number);
  // const [stakingStart, setStakingStart] = useState();

  // function make_random() {
  //   const random = web3.Keypair.generate();
  //   console.log(random)
  // }

  // async function claimRewards() {
  //   //call claim api
  //   const resp = await fetch(
  //       //@ts-ignore
  //       `https://mint-toastyfriends.club:8888/claim?wallet_id=${publicKey.toString()}`,
  //       {
  //         method: "GET",
  //         mode: "cors"
  //       }
  //     );
  //     const claimAmount = await resp.json()
  //     console.log(claimAmount)
  //   //form transaction from returned amount
  //   const transaction = new web3.Transaction().add(
  //     web3.SystemProgram.transfer({
  //       fromPubkey: publicKey/*Put authority public key here*/,
  //       toPubkey: publicKey,
  //       lamports: claimAmount,
  //     }),
  //   );

  //   const signature = await web3.sendAndConfirmTransaction(
  //     connection,
  //     transaction,
  //     [/*put authority kp here*/],
  //   );
  //   console.log('SIGNATURE', signature);
    
  //   //if transaction is success then vv
  //   await fetch(
  //       //@ts-ignore
  //       `https://mint-toastyfriends.club:8888/updateclaimed?wallet_id=${publicKey.toString()}&claim_amount=${amount}&claimed=${claimedRewards}`,
  //       {
  //         method: "GET",
  //         mode: "cors"
  //       }
  //     );
  // }



  // async function getHolder() {
  //   const resp = await fetch(
  //     //@ts-ignore
  //     `https://mint-toastyfriends.club:8888/holder/${publicKey.toString()}`,
  //     {
  //       method: "GET",
  //       mode: "cors"
  //     }
  //   );
  //   const holderInfo = await resp.json()
  //   console.log(holderInfo)
  //   setTotalRewards(holderInfo["total rewards"])
  //   setClaimedRewards(holderInfo["claimed rewards"])
  //   setAmount(holderInfo.amount)
  //   setStakingStart(holderInfo["staking start"])
  // }

  // getHolder();

return (
    <>
    {/* <button onClick={make_random}>Generate</button>
    Started Staking: {stakingStart} UTC
    <br/>
    <br/>
    NFT's Staked: {amount}
    <br/>
    <br/>
    Your total rewards: {totalRewards}
    <br/>
    <br/>
    Claimed already: {claimedRewards}
    <br/>
    <br/>
    Available to claim: {totalRewards-claimedRewards}
    <br/>
    <br/>
    <button onClick={claimRewards}>Verify</button> */}
    </>
  )
}

export default StakeV2Page
