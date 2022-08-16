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

interface NFTRewardsInterface extends ethers.utils.Interface {
  functions: {
    "calculateRewards(address)": FunctionFragment;
    "claim(uint256,address)": FunctionFragment;
    "currentStaked()": FunctionFragment;
    "estimatedRewards(address)": FunctionFragment;
    "getCurrentStaked()": FunctionFragment;
    "numberOfStakes(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "poolStakers(address)": FunctionFragment;
    "puase()": FunctionFragment;
    "recoverERC20(address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "stakingToken()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpuase()": FunctionFragment;
    "unstake(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "currentStaked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "estimatedRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentStaked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfStakes",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "poolStakers", values: [string]): string;
  encodeFunctionData(functionFragment: "puase", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverERC20",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "stakingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unpuase", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimatedRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfStakes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolStakers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "puase", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpuase", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;

  events: {
    "Claimed(address,uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Recovered(address,uint256)": EventFragment;
    "Staked(address,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Recovered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export type ClaimedEvent = TypedEvent<
  [string, BigNumber, string] & {
    user: string;
    claimed: BigNumber;
    enjinAddress: string;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type RecoveredEvent = TypedEvent<
  [string, BigNumber] & { token: string; amount: BigNumber }
>;

export type StakedEvent = TypedEvent<
  [string, BigNumber] & { user: string; amount: BigNumber }
>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export type WithdrawnEvent = TypedEvent<
  [string, BigNumber] & { user: string; amount: BigNumber }
>;

export class NFTRewards extends BaseContract {
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

  interface: NFTRewardsInterface;

  functions: {
    calculateRewards(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rewards: BigNumber }>;

    claim(
      _amount: BigNumberish,
      enjinAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentStaked(overrides?: CallOverrides): Promise<[BigNumber]>;

    estimatedRewards(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rewards: BigNumber }>;

    getCurrentStaked(overrides?: CallOverrides): Promise<[BigNumber]>;

    numberOfStakes(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    poolStakers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        amount: BigNumber;
        lastStakeAmount: BigNumber;
        rewards: BigNumber;
        stakeTime: BigNumber;
        lastStakeTime: BigNumber;
        claimed: BigNumber;
        lastClaim: BigNumber;
      }
    >;

    puase(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpuase(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  calculateRewards(
    _staker: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claim(
    _amount: BigNumberish,
    enjinAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentStaked(overrides?: CallOverrides): Promise<BigNumber>;

  estimatedRewards(
    _staker: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCurrentStaked(overrides?: CallOverrides): Promise<BigNumber>;

  numberOfStakes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  poolStakers(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      amount: BigNumber;
      lastStakeAmount: BigNumber;
      rewards: BigNumber;
      stakeTime: BigNumber;
      lastStakeTime: BigNumber;
      claimed: BigNumber;
      lastClaim: BigNumber;
    }
  >;

  puase(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  recoverERC20(
    tokenAddress: string,
    tokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakingToken(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpuase(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstake(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calculateRewards(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      _amount: BigNumberish,
      enjinAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    currentStaked(overrides?: CallOverrides): Promise<BigNumber>;

    estimatedRewards(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentStaked(overrides?: CallOverrides): Promise<BigNumber>;

    numberOfStakes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    poolStakers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        amount: BigNumber;
        lastStakeAmount: BigNumber;
        rewards: BigNumber;
        stakeTime: BigNumber;
        lastStakeTime: BigNumber;
        claimed: BigNumber;
        lastClaim: BigNumber;
      }
    >;

    puase(overrides?: CallOverrides): Promise<void>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    stake(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakingToken(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpuase(overrides?: CallOverrides): Promise<void>;

    unstake(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Claimed(address,uint256,address)"(
      user?: string | null,
      claimed?: null,
      enjinAddress?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { user: string; claimed: BigNumber; enjinAddress: string }
    >;

    Claimed(
      user?: string | null,
      claimed?: null,
      enjinAddress?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { user: string; claimed: BigNumber; enjinAddress: string }
    >;

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

    "Recovered(address,uint256)"(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    Recovered(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    "Staked(address,uint256)"(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    Staked(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Withdrawn(address,uint256)"(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    Withdrawn(
      user?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    calculateRewards(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      _amount: BigNumberish,
      enjinAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentStaked(overrides?: CallOverrides): Promise<BigNumber>;

    estimatedRewards(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentStaked(overrides?: CallOverrides): Promise<BigNumber>;

    numberOfStakes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    poolStakers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    puase(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakingToken(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpuase(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateRewards(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(
      _amount: BigNumberish,
      enjinAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    estimatedRewards(
      _staker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numberOfStakes(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolStakers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    puase(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpuase(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
