import { useCallback, useState, useContext } from "react";
import { MaxUint256 } from "@ethersproject/constants";
import {  tokens } from "../utils/contracts";
import { getSigner } from "../utils/connectors";
import { Signer } from "ethers";
import { ERC20 } from "../typechain";

import { Context } from '../contextStore';

export const useApprove = (name:string) => {
  const [txResponse , setResponse] = useState<any>(null)
  const [, ACTION] = useContext(Context);
  return useCallback(
    async ( to: string): Promise<void> => {
      const signer:Signer = await getSigner();
      let token: ERC20 = tokens[name](signer);
      try {
        ACTION.SET_TX_LOADER(true);
        const tx = await token.approve(to, MaxUint256.toString())
        let res = await tx.wait()
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
