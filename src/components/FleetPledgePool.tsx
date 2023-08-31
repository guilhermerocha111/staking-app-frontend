import Card from "./Card";
import Overlay from "./Overlay";
import { NumberInput } from "./Input";
import { useState, useContext, useEffect } from "react";
import { FiDownload, FiInfo } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import Button from "./Button";
import toast from "react-hot-toast";
import { useAllowance } from "../hooks/useAllowance";
import { contracts, DEFAULT_CHAINID, toHex } from "../utils/constants";
import { useApprove } from "../hooks/useApprove";
import { useTokenBalance } from "../hooks/useTokenBalance";
import ApiClient from "../api/ApiClient";
// import Timer from "./Timer";
import {
  useIngameUserInfo,
  useStake,
  useUnstake,
  useClaim,
} from "../hooks/useIngame";

import {
  usePledge,
  useUnPledge,
  usePledgePoolUserInfo,
  usePledgePoolInfo,
} from "../hooks/usePledge";

import { useWeb3React } from "@web3-react/core";
import { parseEther } from "ethers/lib/utils";
import { useNFTPendings } from "../hooks/usePendings";
import { Context } from "../contextStore";
// import useCommon from "../hooks/useCommon";
import Loader from "./Loader";
// import { Link } from "react-router-dom";

export default function FleetPledgePool({
  MIN_STAKE_AMOUNT = 5000,
  MAX_STAKE_AMOUNT = 100000,
  pool_address = "",
  pool_label = "",
  pool_key = "",
}) {
  const stakingType = "smcw";
  const [enjinAddress, setEnjinAddress] = useState("");
  const [stakeAmount, setStakeAmount] = useState<string>("");
  const [unstakeAmount, setUnstakeAmount] = useState<string>("");
  const [claimAmount, setClaimAmount] = useState<string>("");
  const [type, setType] = useState<"stake" | "unstake">("stake");
  const [isLoading, setIsLoading] = useState(false);
  const [isApproved, setIsApproved] = useState(null);
  const [{ active_tx, allowance }, ACTION] = useContext(Context);
  const { chainId, active, account } = useWeb3React();
  // const { addCommasToNumber } = useCommon();

  const isFloat = (n: any) => {
    return Number(n) === n && n % 1 !== 0;
  };

  const addCommasToNumber = (num: any, fixed: Number) => {
    if (isFloat(Number(num))) {
      return Intl.NumberFormat("en-US").format(num.toFixed(fixed));
    } else {
      return Intl.NumberFormat("en-US").format(num) + ".00";
    }
  };

  const [actionType, setActionType] = useState<any>("default");

  const setActiveTx = (tx_string: string) => {
    ACTION.SET_ACTIVE_TX(tx_string);
  };

  const actionMessage: any = {
    pledge: "Pledge...",
    unpledge: "Unpledge...",
    default: "Increase / Stake",
  };

  const stake = useStake(pool_address);
  const pledge = usePledge(pool_address);
  const unpledge = useUnPledge();
  const unstake = useUnstake();
  const claim = useClaim(pool_address);

  const { pendings, estimated } = useNFTPendings(isLoading, pool_address);
  const userInfo = useIngameUserInfo(isLoading, pool_address);
  const uInfo = usePledgePoolUserInfo(true);
  const poolInfo = usePledgePoolInfo();
  const approve = useApprove(stakingType);
  const smcwBalance = useTokenBalance(stakingType, isLoading);

  useEffect(() => {
    console.log("$$$", pool_address, allowance, allowance[pool_key]);
    setIsApproved(allowance[pool_key]);
  }, [allowance]);

  const handleStake = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ACTION.SET_TX_LOADER(true);
    setIsLoading(true);
    setActionType("stake");
    setActiveTx("TELEMETRY_STAKE");
    const reqBody = {
      staker_address: account || "",
      pool_address: pool_address,
      amount: Number(stakeAmount) || 0,
      coin_ticker: "SMCW",
      pool: `Hidden data (Random Telemetry) ${pool_label}`,
    };
    if (
      Number(stakeAmount) +
        Number(userInfo.stakedAmount) +
        Number(userInfo.lastAmount) >
      MAX_STAKE_AMOUNT
    ) {
      toast.error("Max staked amount reached");
      setIsLoading(false);
      setActionType("default");
      setActiveTx("");
      return;
    }
    try {
      await stake(parseEther(stakeAmount).toString());
      await new ApiClient().postStaking(reqBody);
      ACTION.SET_TX_LOADER(false);
      toast.success(`Stake Amount: ${stakeAmount}`);
      setIsLoading(false);
      setActionType("default");
      setActiveTx("");
      // window.location.reload();
    } catch (err) {
      setActionType("default");
      ACTION.SET_TX_LOADER(false);
      setIsLoading(false);
      setActiveTx("");
      console.log(err);
    }
  };

  const handleUnstake = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(unstakeAmount);
    setIsLoading(true);
    ACTION.SET_TX_LOADER(true);
    setActiveTx("TELEMETRY_UNSTAKE");
    try {
      // await unstake(parseEther(unstakeAmount).toString());
      ACTION.SET_TX_LOADER(false);
      toast.success(`Unstake Amount: ${unstakeAmount}`);
      setIsLoading(false);
      setActiveTx("");
      // window.location.reload();
    } catch (err) {
      ACTION.SET_TX_LOADER(false);
      setIsLoading(false);
      console.log(err);
      setActiveTx("");
    }
  };

  const handleClaim = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("HANDLE CLAIM");
    e.preventDefault();
    // @note integrate enjin apis and then execute claim transaction
    ACTION.SET_TX_LOADER(true);
    setIsLoading(true);
    setActionType("claim");
    setActiveTx("TELEMETRY_CLAIM");
    try {
      if (enjinAddress.length !== 42) {
        toast.error("Address is not correct");
      }
      const tx = await claim(claimAmount, enjinAddress);
      setTimeout(async () => {
        const rewardsResponse = await new ApiClient().getRewardsByTxHash(
          tx.hash
        );
        ACTION.SET_REWARDS(rewardsResponse);
        toast.success(`Claimed successfully`);
        ACTION.SET_TX_LOADER(false);
        setIsLoading(false);
        setActionType("default");
        setActiveTx("");
        setClaimAmount("0");
      }, 8000);
    } catch (error) {
      console.log(error);
      ACTION.SET_TX_LOADER(false);
      setIsLoading(false);
      toast.error("Something went wrong");
      setActionType("default");
      setActiveTx("");
      setClaimAmount("0");
    }
  };

  const handlePledge = async () => {
    ACTION.SET_TX_LOADER(true);
    setIsLoading(true);
    setActionType("pledge");
    setActiveTx("TELEMETRY_PLEDGE");
    const reqBody = {
      staker_address: account || "",
      pool_address: pool_address,
      amount: Number(stakeAmount) || 0,
      coin_ticker: "SMCW",
      pool: `Hidden data (Random Telemetry) ${pool_label}`,
    };
    if (
      Number(stakeAmount) + Number(userInfo.stakedAmount) >
      MAX_STAKE_AMOUNT
    ) {
      toast.error("Max staked amount reached");
      setIsLoading(false);
      setActionType("default");
      setActiveTx("");
      return;
    }
    try {
      await pledge(parseEther(stakeAmount).toString());
      // await new ApiClient().postPledging(reqBody);
      ACTION.SET_TX_LOADER(false);
      toast.success(`Pledged Amount: ${stakeAmount}`);
      setIsLoading(false);
      setActionType("default");
      setActiveTx("");
      window.location.reload();
    } catch (err) {
      setActionType("default");
      ACTION.SET_TX_LOADER(false);
      setIsLoading(false);
      setActiveTx("");
    }
  };

  const handleUnPledge = async () => {
    setIsLoading(true);
    ACTION.SET_TX_LOADER(true);
    setActiveTx("TELEMETRY_UNPLEDGE");
    try {
      await unpledge(parseEther(stakeAmount).toString());
      ACTION.SET_TX_LOADER(false);
      toast.success(`UnPledge Amount: ${stakeAmount}`);
      setIsLoading(false);
      setActiveTx("");
      window.location.reload();
    } catch (err) {
      ACTION.SET_TX_LOADER(false);
      setIsLoading(false);
      console.log("$$$", err);
      setActiveTx("");
    }
  };

  return (
    <Card className="flex-1">
      {active && isApproved === null && (
        <Overlay withIcon={false}>
          <Loader width={"64px"} />
          <>Loading...</>
        </Overlay>
      )}
      {(!active || DEFAULT_CHAINID !== toHex(chainId)) && (
        <Overlay>Connect your wallet to access this panel.</Overlay>
      )}
      <div className="flex items-start lg:items-center justify-between gap-1 text-2xl font-semibold sm:flex-col">
        <div className="flex items-center gap-2">
          <div className="card-icon-1 bgTransparent">
            <img src="/images/icons/pledge.png" alt="" />
          </div>
          <h2 className="text-base lg:text-2xl">{pool_label}</h2>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4">
        <div className="relative rounded-xl overflow-hidden z-1">
          {isApproved === false && active && (
            <div className="absolute z-10 h-[fit-content] w-full flex items-start justify-center">
              <div className="flex flex-col items-center justify-center pt-4">
                <div className="lockBorder">
                  <img src="images/lock2.png" alt="" />
                </div>
                <p className="text-lg mt-4">Approve your wallet first</p>
                <p className="text-sm italic">
                  (Click on the “Approve” button below)
                </p>
              </div>
            </div>
          )}
          {type === "stake" ? (
            <form
              onSubmit={(e) => handleStake(e)}
              className={`grid grid-cols-1 gap-2`}
            >
              <div
                className={`${
                  isApproved ? "" : "blur pointer-events-none select-none"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3>Pledge/unpledge amount</h3>
                  <p className="text-sm flex items-center text-design-grey">
                    Wallet Balance:
                    <img
                      src="/images/coin.png"
                      alt=""
                      className="w-4 h-4 object-contain object-center ml-2 mr-1"
                    />
                    <span className="text-white">
                      {addCommasToNumber(Number(smcwBalance), 0)}
                    </span>
                  </p>
                </div>
                <NumberInput
                  placeholder={`${MIN_STAKE_AMOUNT} (min) ${MAX_STAKE_AMOUNT} (max)`}
                  value={stakeAmount}
                  setValue={setStakeAmount}
                  min={MIN_STAKE_AMOUNT}
                  max={
                    MAX_STAKE_AMOUNT -
                    Number(userInfo.stakedAmount) -
                    Number(userInfo.lastAmount)
                  }
                  step={MIN_STAKE_AMOUNT}
                  roundTo={MIN_STAKE_AMOUNT}
                  decimalpoints={2}
                  className={"mt-2"}
                  required
                />
              </div>

              {isApproved ? (
                <>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      className="gradient-1 button-3 mt-2 cursor-pointer"
                      onClick={handlePledge}
                      disabled={isLoading}
                    >
                      {isLoading ? "Pledging..." : "Pledge"}
                      {active_tx === "TELEMETRY_PLEDGE" ? (
                        <Loader />
                      ) : (
                        <HiOutlineExternalLink />
                      )}
                    </Button>
                    <Button
                      type="button"
                      className="gradient-1 button-3 mt-2 cursor-pointer"
                      onClick={handleUnPledge}
                      disabled={isLoading}
                    >
                      {isLoading ? "UnPledging..." : "UnPledge"}
                      {active_tx === "TELEMETRY_UNPLEDGE" ? (
                        <Loader />
                      ) : (
                        <HiOutlineExternalLink />
                      )}
                    </Button>
                  </div>
                  <p className="flex items-center text-sm mt-2">
                    <FiInfo className=" mr-2" />{" "}
                    <span>
                      If you Pledge for the first time the first transaction is
                      only to approve your SMCW, after that you can start
                      pledging
                    </span>
                  </p>
                </>
              ) : (
                <Button
                  className={`gradient-1 button-3 mt-2 cursor-pointer z-1 mt-12 ${
                    isLoading ? "opacity-50 pointer-events-none" : ""
                  }`}
                  type="button"
                  onClick={async () => {
                    setIsLoading(true);
                    setActiveTx("TELEMETRY_APPROVE");
                    await approve(pool_address);
                    setActiveTx("");
                    setIsLoading(false);
                  }}
                >
                  {isLoading ? "Approving..." : "Approve"}
                  {active_tx === "TELEMETRY_APPROVE" ? <Loader /> : ""}
                </Button>
              )}
              {!isApproved && (
                <p className="flex items-center text-sm mt-4">
                  <FiInfo className="text-design-darkBlue2 mr-2" /> If you
                  Pledge for the first time the first transaction is only to
                  approve your SMCW, after that you can start pledging
                </p>
              )}
            </form>
          ) : (
            <></>
          )}
        </div>
        <div
          className={`bgTransparent card-3 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-1 ${
            isApproved ? "" : "blur pointer-events-none select-none"
          }`}
        >
          <div className="grid grid-cols-1 gap-1.5 lg:gap-3">
            <h5 className="text-design-grey">Your Pledge</h5>
            <p className="flex items-center gap-2">
              <img
                src="/images/coin.png"
                alt=""
                className="w-5 h-5 object-contain object-center mr-1"
              />
              {addCommasToNumber(Number(uInfo.stakedAmount), 2)}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-1.5 lg:gap-3">
            <h5 className="text-design-grey">OSM* Min. Pledge</h5>
            <div className="flex items-center">
              <img
                src="/images/coin.png"
                alt=""
                className="w-5 h-5 object-contain object-center mr-2"
              />
              <p className="flex items-center gap-2">
                {addCommasToNumber(9000, 2)}
              </p>
            </div>
          </div>
        </div>
        <div className="gradient-orange p-px mt-2">
          <div className="gradient-2 button-3 border border-design-blue estimatedRew">
            Total Pledged in Pledge Pool: <img src="/images/coin.png" alt="" />
            {addCommasToNumber(Number(poolInfo.totalStakedAmount), 2)}
          </div>
        </div>
        <p
          className="flex flex-col text-md mt-2 bgTransparent"
          style={{ padding: "1rem" }}
        >
          <div className="flex flex-col text-sm">
            <p>
              Remember to pledge with the same wallet address that you have
              linked ingame.
            </p>{" "}
            <br />
            <p>
              Pledging Tier will update at XX:00 UTC, remember to update your
              Olympus Syndicate Membership Pledge to the required minimum(if
              needed)before the next weekly snapshot or you won't be able to
              participate in the next week OSM leaderboard.
            </p>
            <br />
            <p className="italic">
              (*) Minimum pledge needed to activate OSM - Olympus Syndicate
              Membership NFT
            </p>
          </div>
        </p>
      </div>
    </Card>
  );
}
