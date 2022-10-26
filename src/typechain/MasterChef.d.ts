/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MasterChefInterface extends ethers.utils.Interface {
  functions: {
    "claim(uint256)": FunctionFragment;
    "deposit(uint256,uint256)": FunctionFragment;
    "getCurrentClaimed(address)": FunctionFragment;
    "getCurrentStaked(address)": FunctionFragment;
    "getCurrentUnstaked(address)": FunctionFragment;
    "getMultiplier(uint256,uint256)": FunctionFragment;
    "getStakes(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "pendingRewards(address)": FunctionFragment;
    "poolInfo()": FunctionFragment;
    "pull(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardingToken()": FunctionFragment;
    "rewardsInfo(address)": FunctionFragment;
    "rewardsPerWallet(address)": FunctionFragment;
    "startBlock()": FunctionFragment;
    "supplyContract()": FunctionFragment;
    "token()": FunctionFragment;
    "tokenPerBlock()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "updatePool()": FunctionFragment;
    "updateTokenPerBlock(uint256)": FunctionFragment;
    "userInfo(address)": FunctionFragment;
    "vesting()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "claim", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentClaimed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentStaked",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentUnstaked",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMultiplier",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getStakes", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingRewards",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "poolInfo", values?: undefined): string;
  encodeFunctionData(functionFragment: "pull", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardingToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "rewardsInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "rewardsPerWallet",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "startBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supplyContract",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updatePool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateTokenPerBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "userInfo", values: [string]): string;
  encodeFunctionData(functionFragment: "vesting", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentUnstaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getStakes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pull", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsPerWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startBlock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supplyContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateTokenPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vesting", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class MasterChef extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MasterChefInterface;

  functions: {
    claim(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      _amount: BigNumberish,
      _stakeFor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCurrentClaimed(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCurrentStaked(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCurrentUnstaked(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMultiplier(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStakes(
      _user: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          boolean
        ] & {
          amount: BigNumber;
          weight: BigNumber;
          timestamp: BigNumber;
          stakeUntill: BigNumber;
          stakeFor: BigNumber;
          stakedBlock: BigNumber;
          rewardDebt: BigNumber;
          withdrawed: boolean;
        })[]
      ] & {
        stakes: ([
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          boolean
        ] & {
          amount: BigNumber;
          weight: BigNumber;
          timestamp: BigNumber;
          stakeUntill: BigNumber;
          stakeFor: BigNumber;
          stakedBlock: BigNumber;
          rewardDebt: BigNumber;
          withdrawed: boolean;
        })[];
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    pendingRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    poolInfo(
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        stakeToken: string;
        lastRewardBlock: BigNumber;
        accSmcwPerShare: BigNumber;
        balance: BigNumber;
        totalWeight: BigNumber;
      }
    >;

    pull(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardingToken(overrides?: CallOverrides): Promise<[string]>;

    rewardsInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        totalClaimed: BigNumber;
        totalUnstaked: BigNumber;
        totalStaked: BigNumber;
        totalWeight: BigNumber;
        totalRewardDebt: BigNumber;
        lastVest: BigNumber;
      }
    >;

    rewardsPerWallet(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    startBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    supplyContract(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    tokenPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateTokenPerBlock(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalAmount: BigNumber;
        totalWeight: BigNumber;
        totalRewardDebt: BigNumber;
      }
    >;

    vesting(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      stakeIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  claim(
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    _amount: BigNumberish,
    _stakeFor: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCurrentClaimed(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCurrentStaked(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  getCurrentUnstaked(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMultiplier(
    _from: BigNumberish,
    _to: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStakes(
    _user: string,
    overrides?: CallOverrides
  ): Promise<
    ([
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean
    ] & {
      amount: BigNumber;
      weight: BigNumber;
      timestamp: BigNumber;
      stakeUntill: BigNumber;
      stakeFor: BigNumber;
      stakedBlock: BigNumber;
      rewardDebt: BigNumber;
      withdrawed: boolean;
    })[]
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  pendingRewards(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  poolInfo(
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, BigNumber] & {
      stakeToken: string;
      lastRewardBlock: BigNumber;
      accSmcwPerShare: BigNumber;
      balance: BigNumber;
      totalWeight: BigNumber;
    }
  >;

  pull(
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardingToken(overrides?: CallOverrides): Promise<string>;

  rewardsInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      totalClaimed: BigNumber;
      totalUnstaked: BigNumber;
      totalStaked: BigNumber;
      totalWeight: BigNumber;
      totalRewardDebt: BigNumber;
      lastVest: BigNumber;
    }
  >;

  rewardsPerWallet(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  startBlock(overrides?: CallOverrides): Promise<BigNumber>;

  supplyContract(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  tokenPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePool(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateTokenPerBlock(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      totalAmount: BigNumber;
      totalWeight: BigNumber;
      totalRewardDebt: BigNumber;
    }
  >;

  vesting(overrides?: CallOverrides): Promise<string>;

  withdraw(
    stakeIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claim(index: BigNumberish, overrides?: CallOverrides): Promise<void>;

    deposit(
      _amount: BigNumberish,
      _stakeFor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getCurrentClaimed(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentStaked(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentUnstaked(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMultiplier(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakes(
      _user: string,
      overrides?: CallOverrides
    ): Promise<
      ([
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        amount: BigNumber;
        weight: BigNumber;
        timestamp: BigNumber;
        stakeUntill: BigNumber;
        stakeFor: BigNumber;
        stakedBlock: BigNumber;
        rewardDebt: BigNumber;
        withdrawed: boolean;
      })[]
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    pendingRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolInfo(
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        stakeToken: string;
        lastRewardBlock: BigNumber;
        accSmcwPerShare: BigNumber;
        balance: BigNumber;
        totalWeight: BigNumber;
      }
    >;

    pull(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardingToken(overrides?: CallOverrides): Promise<string>;

    rewardsInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        totalClaimed: BigNumber;
        totalUnstaked: BigNumber;
        totalStaked: BigNumber;
        totalWeight: BigNumber;
        totalRewardDebt: BigNumber;
        lastVest: BigNumber;
      }
    >;

    rewardsPerWallet(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    supplyContract(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    tokenPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    updatePool(overrides?: CallOverrides): Promise<void>;

    updateTokenPerBlock(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalAmount: BigNumber;
        totalWeight: BigNumber;
        totalRewardDebt: BigNumber;
      }
    >;

    vesting(overrides?: CallOverrides): Promise<string>;

    withdraw(
      stakeIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    claim(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      _amount: BigNumberish,
      _stakeFor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCurrentClaimed(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentStaked(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentUnstaked(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMultiplier(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakes(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    pendingRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolInfo(overrides?: CallOverrides): Promise<BigNumber>;

    pull(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardingToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    rewardsPerWallet(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    supplyContract(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    tokenPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateTokenPerBlock(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    vesting(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      stakeIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      _amount: BigNumberish,
      _stakeFor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCurrentClaimed(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentStaked(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentUnstaked(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMultiplier(
      _from: BigNumberish,
      _to: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakes(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pull(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardsPerWallet(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    startBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supplyContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateTokenPerBlock(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vesting(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      stakeIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
