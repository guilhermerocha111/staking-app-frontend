import { BigNumber } from "ethers";
import { parseEther } from "ethers/lib/utils";

import Telemetry1Img from '../static/telemetry1.png';
import Telemetry2Img from '../static/telemetry2.png';
import Telemetry3Img from '../static/telemetry3.png';


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
  // Goerli
  "0x5": {
    smcw: process.env.REACT_APP_SMCW_CONTRACT_ADDRESS_GOERLI || "",
    lp: process.env.REACT_APP_LP_CONTRACT_ADDRESS_GOERLI || "",
    vesting: process.env.REACT_APP_VESTING_CONTRACT_ADDRESS_GOERLI || "",
    smcwTosmcw: process.env.REACT_APP_SMCWTOSMCW_CONTRACT_ADDRESS_GOERLI || "",
    lpTosmcw: process.env.REACT_APP_LPTOSMCW_CONTRACT_ADDRESS_GOERLI || "",
    nftStaking: process.env.REACT_APP_NFTSTAKING_CONTRACT_ADDRESS_GOERLI || "",
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

export const DEFAULT_CHAINID = "0x5" ;

export const TELEMETRY_ASSETS = [
  {
    id: "3040000000000c3f",
    label: "Testing Telemetry #5",
    image: Telemetry1Img
  },
  {
    id: "3040000000000c3e",
    label: "Testing Telemetry #4",
    image: Telemetry2Img
  },
  {
    id: "3040000000000c3d",
    label: "Testing Telemetry #3",
    image: Telemetry3Img
  },
  {
    id: "3040000000000c3c",
    label: "Testing Telemetry #2",
    image: Telemetry1Img
  },
  {
    id: "3040000000000c3b",
    label: "Testing Telemetry #1",
    image: Telemetry2Img
  }
]

export const toHex = function(chainId:number|undefined):string {
  return "0x".concat(chainId?.toString(16) || "3")
}