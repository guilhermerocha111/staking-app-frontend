import { Signer } from "ethers";
import { useCallback } from "react";
import { getSigner } from "../utils/connectors";
import { getVesting } from "../utils/contracts";
import { useWeb3React } from "@web3-react/core";

export const useVesting = () => {
  const { library } =useWeb3React();

  return useCallback(async (): Promise<void> => {
        const signer: Signer = await getSigner(library);
        const vesting = getVesting(signer);
        const tx = await vesting.vest()
        await tx.wait()
  }, []);
};
