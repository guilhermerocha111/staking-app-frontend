/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "Crown",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Crown__factory>;
    getContractFactory(
      name: "TestDateTime",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestDateTime__factory>;
    getContractFactory(
      name: "IERCFull20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERCFull20__factory>;
    getContractFactory(
      name: "ISupply",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISupply__factory>;
    getContractFactory(
      name: "IVesting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVesting__factory>;
    getContractFactory(
      name: "LPToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LPToken__factory>;
    getContractFactory(
      name: "MasterChef",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MasterChef__factory>;
    getContractFactory(
      name: "NFTRewards",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTRewards__factory>;
    getContractFactory(
      name: "RewardingToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RewardingToken__factory>;
    getContractFactory(
      name: "StakingToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakingToken__factory>;
    getContractFactory(
      name: "Supply",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Supply__factory>;
    getContractFactory(
      name: "IPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPool__factory>;
    getContractFactory(
      name: "Locker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Locker__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "Crown",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Crown>;
    getContractAt(
      name: "TestDateTime",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestDateTime>;
    getContractAt(
      name: "IERCFull20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERCFull20>;
    getContractAt(
      name: "ISupply",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISupply>;
    getContractAt(
      name: "IVesting",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVesting>;
    getContractAt(
      name: "LPToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LPToken>;
    getContractAt(
      name: "MasterChef",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MasterChef>;
    getContractAt(
      name: "NFTRewards",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTRewards>;
    getContractAt(
      name: "RewardingToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RewardingToken>;
    getContractAt(
      name: "StakingToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakingToken>;
    getContractAt(
      name: "Supply",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Supply>;
    getContractAt(
      name: "IPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPool>;
    getContractAt(
      name: "Locker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Locker>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
