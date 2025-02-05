import { useCallback, useMemo, useState } from "react";
import { BigNumber, Signer, utils } from "ethers";
import { getIngamePool } from "../utils/contracts";
import { getSigner } from "../utils/connectors";
import { useWeb3React } from "@web3-react/core";
import { getVesting } from "../utils/contracts";
const { formatUnits } = utils;


export const useStake = (contractAddress: string) => {
  const { library } = useWeb3React();

  return useCallback(async (claimAmount: string) => {
    const signer: Signer = await getSigner(library);
    const pool = getIngamePool(signer, contractAddress);
    const tx = await pool.stake(claimAmount);
    await tx.wait()
  }, []);
};

export const useVesting = () => {
  // const { library } = useWeb3React();

  return useCallback(async (library: any) => {
        const signer: Signer = await getSigner(library);
        const vesting = getVesting(signer);
        const tx = await vesting.vest()
        await tx.wait()
  }, []);
};

export const useUnstake = () => {
  const { library } = useWeb3React();
  return useCallback(async (claimAmount: string, contractAddress: string) => {
    const signer: Signer = await getSigner(library);
    const pool = getIngamePool(signer, contractAddress);
    const tx = await pool.unstake(claimAmount);
    await tx.wait()
  }, []);
};

export const useClaim = (contractAddress: string) => {
  const { library } = useWeb3React();
  return useCallback(async (claimAmount: string, enjinAddress: string) => {
    const signer: Signer = await getSigner(library);
    const pool = getIngamePool(signer, contractAddress);
    const tx = await pool.claim(claimAmount, enjinAddress);
    await tx.wait()
    return tx
  }, []);
};

export const useIngameUserInfo = (refresh: boolean, contractAddress: string) => {
  const { account, library } = useWeb3React();
  const [userRewards, setRewards] = useState("0");
  const [stakedAmount, setStakedAmount] = useState("0");
  const [lastAmount, setLastAmount] = useState("0");
  const [lockedTo, setLockedTo] = useState<number|null>(null);
  useMemo(async () => {
    const signer: Signer = await getSigner(library);
    const pool = getIngamePool(signer, contractAddress);
    let {amount,rewards, lastStakeAmount, stakeTime} = await pool.poolStakers(await signer.getAddress())
    setRewards(rewards.toString())
    setStakedAmount(String(parseFloat(formatUnits(amount.toString(),"ether"))))
    setLastAmount(String(parseFloat(formatUnits(lastStakeAmount.toString(),"ether"))))
    setLockedTo(parseInt(stakeTime._hex, 16) * 1000);
  }, [userRewards,stakedAmount,account, refresh]);
  return { stakedAmount,userRewards, lastAmount, lockedTo };
};
