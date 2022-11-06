import { useMemo, useState } from "react";
import {  Signer,utils } from "ethers";
import { getIngamePool, getStakingPool01, getStakingPool02 } from "../utils/contracts";
import { getSigner } from "../utils/connectors";
import { useWeb3React } from "@web3-react/core";
const {formatUnits} = utils;
export const usePendings = () => {
  const { account, library } = useWeb3React();
  const [lp_rewards, setlpRewards] = useState("0");
  const [total_rewards, setTotalRewards] = useState("0");
  const [smcw_Rewards, setsmcwRewards] = useState("0");

  useMemo( () => {

    setInterval(async() => {
    const signer: Signer = await getSigner(library);
    const pool1 = getStakingPool01(signer);
    const pool2 = getStakingPool02(signer);
    let amount0 = await pool1.pendingRewards(await signer.getAddress());
    let amount1 = await pool2.pendingRewards(await signer.getAddress());
    let amountCalculatedSMCW = await pool1.rewardsPerWallet(await signer.getAddress());
    let amountCalculatedLP = await pool2.rewardsPerWallet(await signer.getAddress());
    let totalAmount0 = amount0.add(amountCalculatedSMCW)
    let totalAmount1 = amount1.add(amountCalculatedLP)
    setsmcwRewards(
      ToFixed(formatUnits(totalAmount0.toString(),"ether"))
    );
    setlpRewards(
      ToFixed(formatUnits(totalAmount1.toString(),"ether"))
    );
    setTotalRewards(
      ToFixed(formatUnits(totalAmount0.add(totalAmount1).toString(),"ether"))
      )

    }, 10000);
  }, [total_rewards,account]);
  return {smcw_Rewards,lp_rewards,total:total_rewards};
};


export const useNFTPendings = (isLoading: boolean) => {
  const { account, library } = useWeb3React();
  const [estimated, setEstimated] = useState("0");
  const [pendings, setPendings] = useState("0");
  useMemo(async () => {
    setInterval(async() => {
      const signer: Signer = await getSigner(library);
      const pool = getIngamePool(signer);
      
      const _pendings = await pool.callStatic.calculateRewards(await signer.getAddress())
      const _estimated = await pool.callStatic.estimatedRewards(await signer.getAddress())
      setEstimated(_estimated.toString())
      setPendings(_pendings.toString())
    }, 2000)
    
  }, [isLoading]);
  return {estimated,pendings,account};
};


function ToFixed(amount: string){
  return parseFloat(amount).toFixed(4)
}