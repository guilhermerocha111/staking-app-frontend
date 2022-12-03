import { useMemo, useState } from "react";
import { ethers, Signer } from "ethers";
import { getStakingPool01, getStakingPool02 } from "../utils/contracts";
import { getSigner } from "../utils/connectors";
import { useWeb3React } from "@web3-react/core";
import ApiClient from "../api/ApiClient";

export const useStaked = (refresh: boolean) => {
  const { account, library } = useWeb3React();
  const [lp_staked, setlpStaked] = useState("0");
  const [smcw_staked, setsmceStaked] = useState("0");
  const [smcw_staked_total, setsmceStakedTotal] = useState("0");
  const [lp_staked_total, setlpStakedTotal] = useState("0");
  const [ingame_staked, setIngameStaked] = useState("0");
  
  useMemo(async () => {
    const signer: Signer = await getSigner(library);
    const pool1 = getStakingPool01(signer);
    const pool2 = getStakingPool02(signer);
    let amount0: any = 0;
    let amount1: any = 0;
    const {smcw_staking, lp_staking, nft_staking} = await new ApiClient().getAppInfo();

    if (library) {
      amount0 = await pool1.getCurrentStaked(await signer.getAddress());
      amount1 = await pool2.getCurrentStaked(await signer.getAddress());
    }
    console.log(smcw_staking)
    let amount3 = smcw_staking;
    let amount4 = lp_staking;
    let amount5 = nft_staking;

    
    setsmceStaked(
      ethers.utils.formatUnits(amount0.toString(), "ether")
    );
    setlpStaked(
      ethers.utils.formatUnits(amount1.toString(), "ether")
    );
    setIngameStaked(
      ethers.utils.formatUnits(amount3.toString(), "ether")
    );
    setsmceStakedTotal(
      ethers.utils.formatUnits(amount4.toString(), "ether")
    );
    setlpStakedTotal(
      ethers.utils.formatUnits(amount5.toString(), "ether")
    )
  }, [account, refresh]);
  return {smcw_staked, lp_staked, ingame_staked, smcw_staked_total, lp_staked_total};
};
