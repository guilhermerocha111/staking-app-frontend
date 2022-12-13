import { useMemo, useState } from "react";
import { Signer } from "ethers";
import {
  getIngamePool,
  getStakingPool01,
  getStakingPool02,
  getVesting,
} from "../utils/contracts";
import { getSigner } from "../utils/connectors";
import { formatUnits } from "ethers/lib/utils";
import { useWeb3React } from "@web3-react/core";
import moment from 'moment'
import useCountdown from "../hooks/useCountdown";

function ToFixed(amount: string) {
  return parseFloat(amount).toFixed(4);
}

export const useVestingPanel = () => {
  const { account, library } = useWeb3React();
  const [Locked, setAllLocked] = useState<any[]>([]);
  const [PoolStakes, setAllStakes] = useState<any[]>([]);
  const [InGameLocks, setInGameLocker] = useState<any[]>([]);

  useMemo(async () => {
    const signer: Signer = await getSigner(library);
    const vesting = getVesting(signer);
    const pool1 = getStakingPool01(signer);
    const pool2 = getStakingPool02(signer);
    let stakes01 = await pool1.getStakes(await signer.getAddress());
    let stakes02 = await pool2.getStakes(await signer.getAddress());
    let locks = await vesting.getUserClaims(await signer.getAddress());

    function diffDays(time: number) {
      let current = Date.now() / 1000;
      if (time < current) return -1;
      return ((time - current) / 86400).toFixed(0);
    }

    function countdown(targetTime: number) {
      let targetDate = new Date(targetTime).getTime() * 1000;
      let nowDate = new Date().getTime();
      let distance = targetDate - nowDate;

      let _second = 1000;
      let _minute = _second * 60;
      let _hour = _minute * 60;
      let _day = _hour * 24;

      let days = Math.floor(distance / _day);
      let hours = Math.floor((distance % _day) / _hour);
      let minutes = Math.floor((distance % _hour) / _minute);
      let seconds = Math.floor((distance % _minute) / _second);

      return {
        days: days > 0 ? days : 0,
        hours: hours > 0 ? hours : 0,
        minutes: minutes > 0 ? minutes : 0,
        seconds: seconds > 0 ? seconds : 0
      }
    }

    function getMinutesBetweenDates(endDateVal: number) {
      const startDate = moment()
      const endDate = moment(endDateVal*1000)

      return endDate.diff(startDate, 'minutes')
  }

    function timePercentage(timestamp: number, time: number) {
      let current = Date.now() / 1000;
      let totalDays = (time - timestamp) / 86400;
      let currentDays = (current - timestamp) / 86400;
      if (time < current) return -1;
      return ((currentDays / totalDays) * 100).toFixed(0);
    }
    let stakes1 = stakes01.map((s, i) => {
      let date: Date = new Date(Math.ceil(s.timestamp.toNumber() * 1000));
      return {
        index: i,
        type: "stake",
        icon: "coin",
        pool: "SMCW",
        reward: "SMCW",
        action: "Unstake",
        state: "Locked",
        poolInstance: pool1,
        amount: ToFixed(formatUnits(s.amount, "ether")),
        weight: formatUnits(s.weight, "ether"),
        isClaimed: s.withdrawed,
        stakeFor: s.stakeFor,
        unlocksIn: countdown(s.stakeUntill.toNumber()),
        timestamp: `${date.toLocaleString("en-GB", { timeZone: "UTC" })}`,
        percentage: timePercentage(
          s.timestamp.toNumber(),
          s.stakeUntill.toNumber()
        ),
      };
    });

    let stakes2 = stakes02.map((s, i) => {
      let date: Date = new Date(Math.ceil(s.timestamp.toNumber() * 1000));
      return {
        index: i,
        icon: "lp",
        type: "stake",
        pool: "SMCW LP",
        reward: "SMCW",
        action: "Unstake",
        state: "Locked",
        poolInstance: pool2,
        amount: ToFixed(formatUnits(s.amount, "ether")),
        weight: formatUnits(s.weight, "ether"),
        isClaimed: s.withdrawed,
        stakeFor: s.stakeFor,
        unlocksIn: countdown(s.stakeUntill.toNumber()),
        timestamp: `${date.toLocaleString("en-GB", { timeZone: "UTC" })}`,
        percentage: timePercentage(
          s.timestamp.toNumber(),
          s.stakeUntill.toNumber()
        ),
      };
    });
    let formatLocks = locks.map((s, i) => {
      let date: Date = new Date(Math.ceil(s.vestingTime.toNumber() * 1000));

      return {
        index: i,
        icon: "coin",
        type: "vest",
        weight: "N/A",
        pool: "SMCW",
        reward: "SMCW",
        action: "Claim NOW",
        state: "Vesting",
        poolInstance: vesting,
        isClaimed: s.isClaimed,
        amount: ToFixed(formatUnits(s.amount, "ether")),
        unlocksIn: countdown(s.vestingDuration.toNumber()),
        timestamp: `${date.toLocaleString("en-GB", { timeZone: "UTC" })}`,
        percentage: timePercentage(
          s.vestingTime.toNumber(),
          s.vestingDuration.toNumber()
        ),
      };
    });

    setInGameLocker([formatLocks]);
    setAllLocked(locks);
    setAllStakes([...stakes1, ...stakes2, ...formatLocks]);
  }, [account]);
  return {
    PoolStakes,
    InGameLocks,
    locked: Locked,
  };
};
