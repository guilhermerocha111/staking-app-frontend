import { useCallback, useMemo, useState } from "react";
import { BigNumber, Signer, utils } from "ethers";
import {
  getIngamePool,
  getPledgePool,
  getPledgePoolContract,
} from "../utils/contracts";
import { getSigner } from "../utils/connectors";
import { useWeb3React } from "@web3-react/core";
import { getVesting } from "../utils/contracts";

export const useStake = (contractAddress: string) => {
  const { library } = useWeb3React();

  return useCallback(async (claimAmount: string) => {
    const signer: Signer = await getSigner(library);
    const pool = getIngamePool(signer, contractAddress);
    const tx = await pool.stake(claimAmount);
    await tx.wait();
  }, []);
};

export const useVesting = () => {
  // const { library } = useWeb3React();

  return useCallback(async (library: any) => {
    const signer: Signer = await getSigner(library);
    const vesting = getVesting(signer);
    const tx = await vesting.vest();
    await tx.wait();
  }, []);
};

export const useUnstake = () => {
  const { library } = useWeb3React();
  return useCallback(async (claimAmount: string, contractAddress: string) => {
    const signer: Signer = await getSigner(library);
    const pool = getIngamePool(signer, contractAddress);
    const tx = await pool.unstake(claimAmount);
    await tx.wait();
  }, []);
};

export const useClaim = (contractAddress: string) => {
  const { library } = useWeb3React();
  return useCallback(async (claimAmount: string, enjinAddress: string) => {
    const signer: Signer = await getSigner(library);
    const pool = getIngamePool(signer, contractAddress);
    const tx = await pool.claim(claimAmount, enjinAddress);
    await tx.wait();
    return tx;
  }, []);
};

export const usePledgePoolUserInfo = (refresh: boolean) => {
  const { account, library } = useWeb3React();
  const [stakedAmount, setStakedAmount] = useState("0");
  useMemo(async () => {
    const signer: Signer = await getSigner(library);
    const pool = getPledgePool(signer);
    const singerAddress = await signer.getAddress();
    const { amount } = await pool.userInfo(0, singerAddress);
    setStakedAmount(utils.formatEther(amount));
  }, [stakedAmount, account, refresh]);
  return { stakedAmount };
};

export const usePledgePoolInfo = () => {
  const { account, library } = useWeb3React();
  const [totalStakedAmount, setTotalStakedAmount] = useState("0");
  useMemo(async () => {
    const signer: Signer = await getSigner(library);
    const pool = getPledgePoolContract(signer);
    const { balance } = await pool.poolInfo(0);
    console.log("$$$", balance);
    setTotalStakedAmount(utils.formatEther(balance));
  }, [totalStakedAmount, account]);
  return { totalStakedAmount };
};
