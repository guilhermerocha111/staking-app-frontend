import { BigNumber } from "ethers";
import { parseEther } from "ethers/lib/utils";

interface Addresses {
  [key:string]:{
    smcw:string,
    lp:string,
    vesting:string,
    smcwTosmcw:string,
    lpTosmcw:string,
    nftStaking:string,
    nftStakingNew?: string,
    pledgeStaking: string,
  }
}
export const contracts :Addresses=  {
  // Goerli
  "0x5": {
    smcw: process.env.REACT_APP_SMCW_CONTRACT_ADDRESS || "",
    lp: process.env.REACT_APP_LP_CONTRACT_ADDRESS || "",
    vesting: process.env.REACT_APP_VESTING_CONTRACT_ADDRESS || "",
    smcwTosmcw: process.env.REACT_APP_SMCWTOSMCW_CONTRACT_ADDRESS || "",
    lpTosmcw: process.env.REACT_APP_LPTOSMCW_CONTRACT_ADDRESS || "",
    nftStaking: process.env.REACT_APP_NFTSTAKING_CONTRACT_ADDRESS || "",
    pledgeStaking: process.env.REACT_APP_PLEDGE_POOL_CONTRACT_ADDRESS || "",
    // nftStakingNew: process.env.REACT_APP_NFTSTAKING_NEW_CONTRACT_ADDRESS || "",
  },
  // BSC
  "0x38": {
    smcw: process.env.REACT_APP_SMCW_CONTRACT_ADDRESS || "",
    lp: process.env.REACT_APP_LP_CONTRACT_ADDRESS || "",
    vesting: process.env.REACT_APP_VESTING_CONTRACT_ADDRESS || "",
    smcwTosmcw: process.env.REACT_APP_SMCWTOSMCW_CONTRACT_ADDRESS || "",
    lpTosmcw: process.env.REACT_APP_LPTOSMCW_CONTRACT_ADDRESS || "",
    nftStaking: process.env.REACT_APP_NFTSTAKING_CONTRACT_ADDRESS || "",
    pledgeStaking: process.env.REACT_APP_PLEDGE_POOL_CONTRACT_ADDRESS_BSC || "",
  },
};

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const ETH_DECIMAL = parseEther("1");
export const PERCENT = BigNumber.from("100");

// export const REWARDS_PER_BLOCK = BigNumber.from("0.3475");

// estimated blocks per year
// export const TOTAL_BLOCK_PER_YEAR =BigNumber.from("10260000");

export const TOTAL_BLOCK_PER_YEAR = BigNumber.from(process.env.REACT_APP_BLOCK_PER_YEAR)
console.log('REACT_APP_DEFAULT_CHAIN_ID', process.env.REACT_APP_DEFAULT_CHAIN_ID)
export const DEFAULT_CHAINID = process.env.REACT_APP_DEFAULT_CHAIN_ID || '0x5';

export const toHex = function(chainId:number|undefined):string {
  return "0x".concat(chainId?.toString(16) || "38")
}