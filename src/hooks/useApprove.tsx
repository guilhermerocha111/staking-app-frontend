import { useCallback, useState, useContext } from "react";
import { MaxUint256 } from "@ethersproject/constants";
import {  tokens } from "../utils/contracts";
import { getSigner } from "../utils/connectors";
import { Signer } from "ethers";
import { ERC20 } from "../typechain";
import { useWeb3React } from "@web3-react/core";

import { Context } from '../contextStore';

export const useApprove = (name:string) => {
  const [txResponse , setResponse] = useState<any>(null)
  const [{allowance}, ACTION] = useContext(Context);
  const { library } = useWeb3React();

  const returnAllowanceString = (to: string) => {
    switch (to) {
      case process.env.REACT_APP_LPTOSMCW_CONTRACT_ADDRESS_GOERLI:
        return 'lp_to_smcw';
      case process.env.REACT_APP_SMCWTOSMCW_CONTRACT_ADDRESS_GOERLI:
        return 'smcw_to_smcw';
      case process.env.REACT_APP_NFTSTAKING_CONTRACT_ADDRESS_GOERLI:
        return 'smcw_to_nft';
      case process.env.REACT_APP_NFTSTAKING_NEW_CONTRACT_ADDRESS_GOERLI:
        return 'smcw_to_nft_new';
      default:
        return ''
    }
  }
  return useCallback(
    async ( to: string): Promise<void> => {
      const signer:Signer = await getSigner(library);
      let token: ERC20 = tokens[name](signer);
      const allowanceString = returnAllowanceString(to);
      const allowObj = {
        ...allowance,
      }
      allowObj[allowanceString] = true;
      console.log(allowObj)
      try {
        ACTION.SET_TX_LOADER(true);
        const tx = await token.approve(to, MaxUint256.toString())
        let res = await tx.wait()
        ACTION.SET_ALLOWANCE_ONE({key: allowanceString, flag: true})
        ACTION.SET_TX_LOADER(false);
        setResponse(res)
      } catch (error) {
        ACTION.SET_TX_LOADER(false);
        console.log(error);
      }
    },
    [name,txResponse]
  );
};
