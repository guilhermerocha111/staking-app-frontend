import { useWeb3React } from "@web3-react/core";
import { ethers, Signer } from "ethers";
import { useMemo, useState } from "react";
import { DEFAULT_CHAINID } from "../utils/constants";

export const useSigner = () => {
  const [signer, setSigner] = useState<any>();
  const { library } = useWeb3React();
  useMemo(async () => {
    try {
      setSigner(library.getSigner());
    } catch (error) {
      console.log(error);
    }
  }, [library]);
  return signer;
};
