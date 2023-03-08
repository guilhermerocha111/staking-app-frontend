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
import ApiClient from "../api/ApiClient";

function ToFixed(amount: string) {
  return parseFloat(amount).toFixed(4);
}

export const useVestingPanel = () => {
  const { account, library } = useWeb3React();
  const [Locked, setAllLocked] = useState<any[]>([]);
  const [PoolStakes, setAllStakes] = useState<any[]>([]);
  const [InGameLocks, setInGameLocker] = useState<any[]>([]);

  const nft_pools = [
    {
      pool_address: process.env.REACT_APP_NFTSTAKING_CONTRACT_ADDRESS_GOERLI || ""
    },
    // {
    //   pool_address: process.env.REACT_APP_NFTSTAKING_NEW_CONTRACT_ADDRESS_GOERLI || ""
    // }
  ]


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

  useMemo(async () => {
    if (account) {
    const signer: Signer = await getSigner(library);
    const vesting = getVesting(signer);
    const pool1 = getStakingPool01(signer);
    const pool2 = getStakingPool02(signer);
    const user_address = await signer.getAddress()
    let stakes01 = await pool1.getStakes(user_address);
    let stakes02 = await pool2.getStakes(user_address);
    let locks = await vesting.getUserClaims(user_address);
    
    let nftPoolStakes = []
    for (let i = 0; i < nft_pools.length; i++) {
      let res = await new ApiClient().getStakings(user_address, nft_pools[i].pool_address)
      nftPoolStakes.push(...res)
    }
    console.log(nftPoolStakes)

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
        locked: (new Date().getTime()/1000) > s.stakeUntill.toNumber() ? false : true,
        filterType: ['pool_smcw', 'type_stake', s.withdrawed ? "status_claimed" : '', (new Date().getTime()/1000) < s.stakeUntill.toNumber() ? 'status_locked' : '', (new Date().getTime()/1000) > s.stakeUntill.toNumber() ? 'status_unstake' : '' ],
        poolInstance: pool1,
        amount: ToFixed(formatUnits(s.amount, "ether")),
        weight: formatUnits(s.weight, "ether"),
        isClaimed: s.withdrawed,
        stakeFor: s.stakeFor,
        unlocksIn: countdown(s.stakeUntill.toNumber()),
        timestamp: moment(date).utc().format("MM/DD/YYYY HH:mm"),
        percentage: timePercentage(
          s.timestamp.toNumber(),
          s.stakeUntill.toNumber()
        ),
      };
    });

    let stakes2 = stakes02.map((s, i) => {
      let date: Date = new Date(Math.ceil(s.timestamp.toNumber() * 1000));
      console.log(s.timestamp.toNumber(), s.stakeUntill.toNumber())
      return {
        index: i,
        icon: "lp",
        type: "stake",
        pool: "SMCW LP",
        reward: "SMCW",
        action: "Unstake",
        state: "Locked",
        locked: (new Date().getTime()/1000) > s.stakeUntill.toNumber() ? false : true,
        poolInstance: pool2,
        amount: ToFixed(formatUnits(s.amount, "ether")),
        weight: formatUnits(s.weight, "ether"),
        filterType: ['pool_smcw_lp', 'type_stake', s.withdrawed ? "status_claimed" : '',(new Date().getTime()/1000) < s.stakeUntill.toNumber() ? 'status_locked' : '', (new Date().getTime()/1000) > s.stakeUntill.toNumber() ? 'status_unstake' : ''],
        isClaimed: s.withdrawed,
        stakeFor: s.stakeFor,
        unlocksIn: countdown(s.stakeUntill.toNumber()),
        timestamp: moment(date).utc().format("MM/DD/YYYY HH:mm"),
        percentage: timePercentage(
          s.timestamp.toNumber(),
          s.stakeUntill.toNumber()
        ),
      };
    });
    let formatLocks = locks.map((s, i) => {
      let date: Date = new Date(Math.ceil(s.vestingTime.toNumber() * 1000));
      const percentValue = timePercentage(
        s.vestingTime.toNumber(),
        s.vestingDuration.toNumber()
      )
      console.log(percentValue)
      console.log(s.amount)
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
        locked: (Date.now() / 1000) < s.vestingDuration.toNumber() ? true : false,
        filterType: ['pool_smcw', 'type_claim', s.isClaimed ? "status_claimed" : '', (s.isClaimed === false && (Date.now() / 1000) > s.vestingDuration.toNumber()) ? "status_claim_now" : '', (Date.now() / 1000) < s.vestingDuration.toNumber() ? 'status_locked' : ''],
        isClaimed: s.isClaimed,
        amount: ToFixed(formatUnits(s.amount, "ether")),
        unlocksIn: countdown(s.vestingDuration.toNumber()),
        timestamp: moment(date).utc().format("MM/DD/YYYY HH:mm"),
        percentage: timePercentage(
          s.vestingTime.toNumber(),
          s.vestingDuration.toNumber()
        ),
      };
    });

    let formatNftPools = nftPoolStakes.map((item:any, index:number) => {
      return {
        id: item._id,
        index: index,
        icon: "telemetry1",
        type: "nft",
        weight: "N/A",
        pool: 'Hidden data (Random Telemetry)',
        reward: "SMCW",
        action: "Unstake",
        state: "Unlocked",
        filterType: ['pool_ingame', 'type_stake', item.isClaimed ? 'status_claimed' : 'status_unstake'],
        poolInstance: vesting,
        isClaimed: item.isClaimed,
        amount: item.amount,
        unlocksIn: 0,
        pool_address: item.pool_address || null,
        timestamp: moment(item.timestamp).utc().format("MM/DD/YYYY HH:mm"),
        percentage: -1
      }
    })
    let allData = [...stakes1, ...stakes2, ...formatLocks, ...formatLocks, ...formatLocks, ...formatLocks, ...formatNftPools]
    let allDataSorted = allData.sort(function(a,b) {return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()})
    setInGameLocker([formatLocks]);
    setAllLocked(locks);
    
    setAllStakes(allDataSorted);
  }
  }, [account]);
  return {
    PoolStakes,
    InGameLocks,
    locked: Locked,
  };
};
