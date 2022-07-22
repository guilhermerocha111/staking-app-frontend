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
  }
}
export const contracts :Addresses=  {
  // Ropsten
  "0x3": {
    smcw: process.env.REACT_APP_SMCW_CONTRACT_ADDRESS_ROPSTEN || "",
    lp: process.env.REACT_APP_LP_CONTRACT_ADDRESS_ROPSTEN || "",
    vesting: process.env.REACT_APP_VESTING_CONTRACT_ADDRESS_ROPSTEN || "",
    smcwTosmcw: process.env.REACT_APP_SMCWTOSMCW_CONTRACT_ADDRESS_ROPSTEN || "",
    lpTosmcw: process.env.REACT_APP_LPTOSMCW_CONTRACT_ADDRESS_ROPSTEN || "",
    nftStaking: process.env.REACT_APP_NFTSTAKING_CONTRACT_ADDRESS_ROPSTEN || "",
  },
  // BSC
  "0x61": {
    smcw: process.env.REACT_APP_SMCW_CONTRACT_ADDRESS_BSC || "",
    lp: process.env.REACT_APP_LP_CONTRACT_ADDRESS_BSC || "",
    vesting: process.env.REACT_APP_VESTING_CONTRACT_ADDRESS_BSC || "",
    smcwTosmcw: process.env.REACT_APP_SMCWTOSMCW_CONTRACT_ADDRESS_BSC || "",
    lpTosmcw: process.env.REACT_APP_LPTOSMCW_CONTRACT_ADDRESS_BSC || "",
    nftStaking: process.env.REACT_APP_NFTSTAKING_CONTRACT_ADDRESS_BSC || "",
  },
};

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const ETH_DECIMAL = parseEther("1");
export const PERCENT = BigNumber.from("100");

// export const REWARDS_PER_BLOCK = BigNumber.from("0.3475");

// estimated blocks per year
export const TOTAL_BLOCK_PER_YEAR =BigNumber.from("2370675");

export const DEFAULT_CHAINID = "0x3" ;



export const toHex = function(chainId:number|undefined):string {
  return "0x".concat(chainId?.toString(16) || "3")
}