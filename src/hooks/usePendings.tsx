import { useMemo, useState } from "react";
import {  Signer,utils } from "ethers";
import { getIngamePool, getStakingPool01, getStakingPool02 } from "../utils/contracts";
import { getSigner } from "../utils/connectors";
const {formatUnits} = utils
export const usePendings = () => {
  const [lp_rewards, setlpRewards] = useState("0");
  const [total_rewards, setTotalRewards] = useState("0");
  const [smcw_Rewards, setsmcwRewards] = useState("0");

  useMemo( () => {

    setInterval(async() => {
    const signer: Signer = await getSigner();
    const pool1 = getStakingPool01(signer);
    const pool2 = getStakingPool02(signer);
    let amount0 = await pool1.pendingReward(await signer.getAddress());
    let amount1 = await pool2.pendingReward(await signer.getAddress());
    setsmcwRewards(
      ToFixed(formatUnits(amount0.toString(),"ether"))
    );
    setlpRewards(
      ToFixed(formatUnits(amount1.toString(),"ether"))
    );
    setTotalRewards(
      ToFixed(formatUnits(amount0.add(amount1).toString(),"ether"))
      )

    }, 15000);
  }, [total_rewards,]);
  return {smcw_Rewards,lp_rewards,total:total_rewards};
};


export const useNFTPendings = () => {
  const [nft_Rewards, setRewards] = useState("0");
  useMemo(async () => {
    const signer: Signer = await getSigner();
    const pool = getIngamePool(signer);
    const amount = await pool.calculateRewards(await signer.getAddress())
    setRewards(amount.toString())
  }, []);
  return {rewards: nft_Rewards};
};


function ToFixed(amount: string){
  return parseFloat(amount).toFixed(4)
}