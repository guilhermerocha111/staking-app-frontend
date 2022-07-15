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
  "0x3": {
    smcw: "0x143D8d934169Ebf2aF0bbe73aEbbE07f87f3f7BA",
    lp: "0x495dF344567948C012C80CAcf3F10C4889f4D36B",
    vesting: "0x7594ed4328025DFB1e4d0cdC6F5FDae8776e8808",
    smcwTosmcw: "0x7fF6D088D2A9302b930ae922d961b82749A85b17",
    lpTosmcw: "0xC6C27b28c858fD24A80DbFC2C339ea887044d016",
    nftStaking: "0x2a05f1c059B969dc30711C7E767150204b700Af5",
  },
  "0x61": {
    smcw: "0xDfcF651Aca3938422a00d82Ed2a5BE9D3d8Eb9df",
    lp: "0xEf5bFde4e28f30d3b904f376e11D40E2771EBB02",
    vesting: "0x9082EB30d9256310c05f3EE627cD423474fB4BAd",
    smcwTosmcw: "0x1Eb3BdfD727f16B02E9d04CAA2ae44ea7b13C375",
    lpTosmcw: "0x43f8cF443d67A301Af1fBd99737b17E2fD745CF2",
    nftStaking: "0x993b14cd2b4AF35D02262f8e255BFDD90B1D2641",
  },
};

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const ETH_DECIMAL = parseEther("1");
export const PERCENT = BigNumber.from("100");

export const REWARDS_PER_BLOCK = BigNumber.from("2");

// estimated blocks per year
export const TOTAL_BLOCK_PER_YEAR =BigNumber.from("2102400");

export const DEFAULT_CHAINID = "0x3" ;



export const toHex = function(chainId:number|undefined):string {
  return "0x".concat(chainId?.toString(16) || "3")
}