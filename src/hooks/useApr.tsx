import { useMemo, useState } from "react";
import { BigNumber, Signer, utils } from "ethers";
import { getStakingPool01, getStakingPool02 } from "../utils/contracts";
import { getSigner } from "../utils/connectors";
import { ETH_DECIMAL, PERCENT, TOTAL_BLOCK_PER_YEAR } from "../utils/constants";
import { formatUnits, parseEther } from "ethers/lib/utils";

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
  const [smcw_APR, setsmcwAPR] = useState<IAPR>(APRDefaults);
  const [lp_APR, setlpAPR] = useState<IAPR>(APRDefaults);

  useMemo(async () => {
    const signer: Signer = await getSigner();
    const pool1 = getStakingPool01(signer);
    const pool2 = getStakingPool02(signer);
    let pool1TokenPerBlock = await pool1.tokenPerBlock();
    let amount0 = await pool1.getCurrentStaked(await signer.getAddress());
    let amount1 = await pool2.getCurrentStaked(await signer.getAddress());
    let pool1Info = await pool1.poolInfo();
    let pool2Info = await pool2.poolInfo();

    function apr(Weight: BigNumber, totalWeight: BigNumber) {
      return parseFloat(
        formatUnits(
          pool1TokenPerBlock
            .mul(TOTAL_BLOCK_PER_YEAR)
            .mul(Weight)
            .mul(PERCENT)
            .div(totalWeight)
            .toString(),
          "ether"
        )
      ).toFixed(2);
    }

    // apr = ( Token Rewards Per Year / Total Weight of all staked tokens) * Token Weight * 100
    if (!amount0.isZero())
      setsmcwAPR({
        oneMonth: apr(parseEther("0.33"), pool1Info.totalWeight),
        threeMonth: apr(parseEther("1"), pool1Info.totalWeight),
        sixMonth: apr(parseEther("6"), pool1Info.totalWeight),
        twelveMonth: apr(parseEther("12"), pool1Info.totalWeight),
      });
    if (!amount1.isZero())
      setlpAPR({
        oneMonth: apr(parseEther("0.33"), pool2Info.totalWeight),
        threeMonth: apr(parseEther("1"), pool2Info.totalWeight),
        sixMonth: apr(parseEther("6"), pool2Info.totalWeight),
        twelveMonth: apr(parseEther("12"), pool2Info.totalWeight),
      });
  }, []);
  return { swcw: smcw_APR, lp: lp_APR };
};