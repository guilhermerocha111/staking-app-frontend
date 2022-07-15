import { useMemo, useState } from "react";
import { tokens } from "../utils/contracts";
import { ethers, Signer } from "ethers";
import { ERC20 } from "../typechain";
import { getSigner } from "../utils/connectors";

export const useTokenBalance = (name: string) => {
  const [balance, setBalance] = useState("");
  useMemo(async () => {
    const signer:Signer = await getSigner();
    let token: ERC20 = tokens[name](signer);
    let b = await token.balanceOf(await signer.getAddress())
    setBalance(ethers.utils.formatUnits(b,"ether"));
  }, [name]);
  return balance;
};


export const useTokenSupply = (name: string) => {
  const [supply, setSupply] = useState("");
  useMemo(async () => {
    const signer:Signer = await getSigner();
    let token: ERC20 = tokens[name](signer);
    let b = await token.totalSupply()
    setSupply(ethers.utils.formatUnits(b,"ether"));
  }, [name]);
  return supply;
};
