import { useMemo, useState, useContext, useEffect, useCallback } from "react";
import { BigNumber, Signer } from "ethers";
import { getStakingPool01, getStakingPool02 } from "../utils/contracts";
import { getSigner } from "../utils/connectors";
import { PERCENT, TOTAL_BLOCK_PER_YEAR } from "../utils/constants";
import { formatUnits, parseEther } from "ethers/lib/utils";
import { useWeb3React } from "@web3-react/core";
import { Context } from '../contextStore';

export interface IAPR {
  oneMonth: string;
  threeMonth: string;
  sixMonth: string;
  twelveMonth: string;
}

const APRDefaults: IAPR = {
  oneMonth: "0",
  threeMonth: "0",
  sixMonth: "0",
  twelveMonth: "0",
};


export const useApr = () => {
  const { account, library } = useWeb3React();
  const [smcw_APR, setsmcwAPR] = useState<IAPR>(APRDefaults);
  const [lp_APR, setlpAPR] = useState<IAPR>(APRDefaults);
  const [pool1Avarage, setPool1Average] = useState<string>("0");
  const [pool2Avarage, setPool2Average] = useState<string>("0");
  const [{lpInfo}, ACTION] = useContext(Context);

  let lpInfoProxy = {
    smcw_price: 0,
    lp_price: 0
  }

  if (lpInfo.smcw_price > 0) {
    lpInfoProxy = lpInfo
  }

  function apr(Weight: BigNumber, totalWeight: BigNumber,tokenPerBlock:BigNumber) {
    let totalWeightUpdated;
    formatUnits(totalWeight, "ether") === "0.0" ? totalWeightUpdated = BigNumber.from("1000000000000000000000") : totalWeightUpdated = totalWeight
    return parseFloat(
      formatUnits(
        tokenPerBlock
          .mul(TOTAL_BLOCK_PER_YEAR)
          .mul(Weight)
          .mul(PERCENT)
          .div(totalWeightUpdated)
          .toString(),
        "ether"
      )
    ).toFixed(2);
  }

  function aprLp(Weight: BigNumber, totalWeight: BigNumber,tokenPerBlock:BigNumber) {
    let totalWeightUpdated;
    formatUnits(totalWeight, "ether") === "0.0" ? totalWeightUpdated = BigNumber.from("1000000000000000000000") : totalWeightUpdated = totalWeight
    return parseFloat(
      formatUnits(
        ((Number(tokenPerBlock) * lpInfoProxy.smcw_price * Number(TOTAL_BLOCK_PER_YEAR) * Number(Weight) * Number(PERCENT)) / (Number(totalWeightUpdated) * lpInfoProxy.lp_price))
          .toString(),
        "ether"
      )
    ).toFixed(2);
  }

  useMemo(async () => {
    if (account) {
    const signer: Signer = await getSigner(library);
    const pool1 = getStakingPool01(signer);
    const pool2 = getStakingPool02(signer);
    let pool1TokenPerBlock = await pool1.tokenPerBlock();
    let pool2TokenPerBlock = await pool2.tokenPerBlock();
    // let amount0 = await pool1.getCurrentStaked(await signer.getAddress());
    // let amount1 = await pool2.getCurrentStaked(await signer.getAddress());
    let pool1Info = await pool1.poolInfo();
    let pool2Info = await pool2.poolInfo();

    setPool1Average(parseFloat(formatUnits(TOTAL_BLOCK_PER_YEAR.div(365).mul(pool1TokenPerBlock).toString(),"ether")).toFixed(2))
    setPool2Average(parseFloat(formatUnits(TOTAL_BLOCK_PER_YEAR.div(365).mul(pool2TokenPerBlock).toString(),"ether")).toFixed(2))

    ACTION.SET_MAX_APR(Math.max(...[Number(apr(parseEther("4"), pool1Info.totalWeight,pool1TokenPerBlock)), Number(aprLp(parseEther("4"), pool2Info.totalWeight,pool2TokenPerBlock))]));

    // apr = ( Token Rewards Per Year / Total Weight of all staked tokens) * Token Weight * 100
    // if (!amount0.isZero())
      setsmcwAPR({
        oneMonth: apr(parseEther("0.33"), pool1Info.totalWeight,pool1TokenPerBlock),
        threeMonth: apr(parseEther("1"), pool1Info.totalWeight,pool1TokenPerBlock),
        sixMonth: apr(parseEther("2"), pool1Info.totalWeight,pool1TokenPerBlock),
        twelveMonth: apr(parseEther("4"), pool1Info.totalWeight,pool1TokenPerBlock),
      });
    // if (!amount1.isZero())
      setlpAPR({
        oneMonth: aprLp(parseEther("0.33"), pool2Info.totalWeight,pool2TokenPerBlock),
        threeMonth: aprLp(parseEther("1"), pool2Info.totalWeight,pool2TokenPerBlock),
        sixMonth: aprLp(parseEther("2"), pool2Info.totalWeight,pool2TokenPerBlock),
        twelveMonth: aprLp(parseEther("4"), pool2Info.totalWeight,pool2TokenPerBlock),
      });
    }
  }, [account, lpInfo]);
  return { swcw: smcw_APR, lp: lp_APR,pool1Avarage,pool2Avarage };
};