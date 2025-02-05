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
import { useWeb3React } from "@web3-react/core";
import { parseEther } from "ethers/lib/utils";
import { useNFTPendings } from "../hooks/usePendings";
import { Context } from "../contextStore";
import useCommon from "../hooks/useCommon";
import Loader from "./Loader";
import { Link } from "react-router-dom";

export default function IngameStaking1({
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
  const { addCommasToNumber } = useCommon();

  const [actionType, setActionType] = useState<any>("default");

  const setActiveTx = (tx_string: string) => {
    console.log(tx_string);
    ACTION.SET_ACTIVE_TX(tx_string);
  };

  const actionMessage: any = {
    stake: "Staking...",
    claim: "Claiming...",
    default: "Increase / Stake",
  };

  const stake = useStake(pool_address);
  const unstake = useUnstake();
  const claim = useClaim(pool_address);

  const { pendings, estimated } = useNFTPendings(isLoading, pool_address);
  const userInfo = useIngameUserInfo(isLoading, pool_address);
  const approve = useApprove(stakingType);
  const smcwBalance = useTokenBalance(stakingType, isLoading);

  useEffect(() => {
    console.log(pool_key);
    console.log("$$$", allowance[pool_key]);
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
          <div className="card-icon-2 borderPink">
            <img src="/images/icons/game1.png" alt="" />
          </div>
          <h2 className="text-base lg:text-2xl">
            Hidden data <br className="lg:hidden" /> (Random Telemetry)
            {pool_label}
          </h2>
        </div>
      </div>
      <div
        className="mt-[21px] text-xs py-2 px-3 bgTransparent border border-design-blue rounded-lg leading-5 sm:mt-2"
        style={{ width: "fit-content", color: "#F0EBFF" }}
      >
        5,000 SMCW = 1/day
        <span className="pl-2">Max: 20/day</span>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4">
        <div className="borderPink relative border rounded-xl overflow-hidden z-1">
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
          {/* <div className={`flex gap-6 bg-design-darkBlue px-4 pt-1 ${isApproved ? '' : 'blur pointer-events-none select-none'}`}>
            <button
              className={`font-semibold py-3 ${
                type === "stake"
                  ? "link-active-2"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => setType("stake")}
            >
              Stake
            </button>
            <button
              className={`font-semibold py-3 ${
                type === "unstake"
                  ? "link-active-2"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => setType("unstake")}
            >
              Unstake
            </button>
          </div> */}
          {type === "stake" ? (
            <form
              onSubmit={(e) => handleStake(e)}
              className={`grid grid-cols-1 gap-2 p-4`}
            >
              <div
                className={`${
                  isApproved ? "" : "blur pointer-events-none select-none"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3>Stake Amount</h3>
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
                <p className="flex items-center text-sm mt-2 text-design-darkBlue2">
                  <FiInfo className=" mr-2" /> Only multiples of{" "}
                  {MIN_STAKE_AMOUNT}
                </p>
              </div>

              {isApproved ? (
                <>
                  <Button
                    type="submit"
                    className={`gradient-1 button-3 mt-2 cursor-pointer ${
                      Number(stakeAmount) < MIN_STAKE_AMOUNT || isLoading
                        ? "opacity-50 pointer-events-none"
                        : ""
                    }`}
                  >
                    {/* @ts-ignore */}
                    {actionType === "claim"
                      ? actionMessage["default"]
                      : actionMessage[actionType]}
                    {active_tx === "TELEMETRY_STAKE" ? (
                      <Loader />
                    ) : (
                      <HiOutlineExternalLink />
                    )}
                  </Button>
                  <p className="flex items-center text-sm mt-2">
                    <FiInfo className=" mr-2" />{" "}
                    <span>
                      To unstake your SMCW, find the "Unstake" button on the
                      &nbsp;{" "}
                      <Link to="/vesting" className="external-link">
                        Claim / Vesting Panel <HiOutlineExternalLink />
                      </Link>
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
                  <FiInfo className="text-design-darkBlue2 mr-2" /> If you Stake
                  for the first time the first transaction is only to approve
                  your SMCW, after that you can start staking
                </p>
              )}
            </form>
          ) : (
            <></>
            // <form
            //   onSubmit={(e) => handleUnstake(e)}
            //   className={`grid grid-cols-1 gap-2 p-4 ${isApproved ? '' : 'blur pointer-events-none select-none'}`}
            // >
            //   <div className="flex items-center justify-between gap-4">
            //     <h3>Unstake Amount</h3>
            //     <p className="text-sm flex items-center text-design-grey">
            //       Wallet Balance:
            //       <img
            //         src="/images/coin.png"
            //         alt=""
            //         className="w-4 h-4 object-contain object-center ml-2 mr-1"
            //       />
            //       <span className="text-white">{addCommasToNumber(Number(smcwBalance), 0)}</span>
            //     </p>
            //   </div>
            //   <NumberInput
            //     placeholder="5,000 (min) 100,000 (max)"
            //     value={unstakeAmount}
            //     setValue={setUnstakeAmount}
            //     min={MIN_STAKE_AMOUNT}
            //     max={Number(userInfo.stakedAmount) + Number(userInfo.lastAmount)}
            //     step={MIN_STAKE_AMOUNT}
            //     roundTo={MIN_STAKE_AMOUNT}
            //     decimalpoints={2}
            //     required
            //   />
            //   <p className="flex items-center text-sm text-design-darkBlue2">
            //     <FiInfo className=" mr-2" /> Only multiples of 5,000
            //   </p>
            //   <Button type="submit" className={`gradient-1 button-3 mt-2 ${(Number(unstakeAmount) < MIN_STAKE_AMOUNT || isLoading)? 'opacity-50 pointer-events-none' : ''}`}>
            //     Decrease / Unstake
            //     {
            //         (active_tx === 'TELEMETRY_UNSTAKE') ? <Loader /> : <HiOutlineExternalLink />
            //     }
            //   </Button>
            //   {!isApproved && (
            //     <p className="flex items-center text-sm mt-4">
            //       <FiInfo className="text-design-darkBlue2 mr-2" /> If you Stake
            //       for the first time the first transaction is only to approve your
            //       SMCW, after that you can start staking
            //     </p>
            //   )}
            // </form>
          )}
        </div>
        {/* {userInfo.lastAmount && (
          <div className="card-3 grid grid-cols-1 gap-1.5 lg:gap-1">
              <h5 className="text-design-grey">Sync will be available in {userInfo.lockedTo !== null && (
                <Timer targetDate={Number(userInfo.lockedTo)} />
              )}. To sync your SMCW you need to claim rewards.
              </h5>
              <p className="flex items-center gap-2">
                Pending SMCW:
                <img
                  src="/images/coin.png"
                  alt=""
                  className="w-5 h-5 object-contain object-center mr-1"
                />
                {`${userInfo.lastAmount !== "0" ? userInfo.lastAmount : ''}`}
              </p>
          </div>
        )} */}
        <div
          className={`bgTransparent card-3 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-1 ${
            isApproved ? "" : "blur pointer-events-none select-none"
          }`}
        >
          <div className="grid grid-cols-1 gap-1.5 lg:gap-3">
            <h5 className="text-design-grey">Your Pool Staked SMCW</h5>
            <p className="flex items-center gap-2">
              <img
                src="/images/coin.png"
                alt=""
                className="w-5 h-5 object-contain object-center mr-1"
              />
              {addCommasToNumber(
                Number(userInfo.stakedAmount) + Number(userInfo.lastAmount),
                2
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-1.5 lg:gap-3">
            <h5 className="text-design-grey">Pending Rewards*</h5>
            <p className="flex items-center gap-2">
              <img
                src="/images/icons/game1.png"
                alt=""
                className="w-5 h-5 object-contain object-center mr-1"
              />
              {Number(pendings) + Number(userInfo.userRewards)}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-1.5 lg:gap-3">
            <h5 className="text-design-grey">Estimated Rewards*</h5>
            <p className="flex items-center gap-2">{estimated} / day</p>
          </div>
        </div>
        <div
          className={`relative borderPink overflow-hidden z-1 ${
            isApproved ? "" : "blur pointer-events-none select-none"
          }`}
        >
          <div className={`bgTransparent flex gap-6 px-4 pt-1`}>
            <button
              className={`font-semibold py-3 link-active-2`}
              onClick={() => setType("stake")}
            >
              Claim
            </button>
          </div>
          <div className="grid grid-cols-1 gap-2 p-4 ">
            <h3 className="mb-1">Enjin Wallet address</h3>
            <div
              className={`input ${
                isApproved ? "" : "blur pointer-events-none select-none"
              }`}
            >
              <input
                disabled={
                  Number(pendings) + Number(userInfo.userRewards) > 0
                    ? false
                    : true
                }
                value={enjinAddress}
                className="pinkInput"
                onChange={(e) => setEnjinAddress(e.target.value)}
                type="text"
                placeholder="Put your Enjin Wallet Address Here. At least 1 Pending Reward is required."
              />
            </div>
            <form
              className={`${
                isApproved ? "" : "blur pointer-events-none select-none"
              }`}
            >
              {/* <Select
                options={[
                  {
                    value: "",
                    label: "Select Telemetry of choice",
                  },
                  {
                    value: "Type 1",
                    label: "Type 1",
                  },
                  {
                    value: "Type 2",
                    label: "Type 2",
                  },
                ]}
                value={telemetryType}
                onChange={(e) => setTelemetryType(e.target.value)}
                required
              /> */}

              <h3 className="mb-1">Claim Amount</h3>
              <NumberInput
                placeholder="30 (max) per claim."
                value={claimAmount}
                setValue={setClaimAmount}
                min={1}
                max={30}
                step={1}
                decimalpoints={0}
                required
              />
            </form>
          </div>
        </div>
        {(active || DEFAULT_CHAINID !== toHex(chainId)) && (
          <form onSubmit={(e) => handleClaim(e)}>
            <Button
              type="submit"
              disabled={
                Number(pendings) + Number(userInfo.userRewards) > 0
                  ? false
                  : true
              }
              className={`gradient-2 button-3 mt-4 border border-design-blue cursor-pointer hover:button-2
                    ${isLoading ? "opacity-50 pointer-events-none" : ""}
                    ${
                      Number(claimAmount) < 1 ||
                      isNaN(Number(claimAmount)) ||
                      Number(pendings) + Number(userInfo.userRewards) === 0
                        ? "opacity-50 pointer-events-none"
                        : ""
                    }
                  `}
            >
              {/* @ts-ignore */}
              {actionType === "claim" ? "Claiming..." : "Claim Rewards "}
              {active_tx === "TELEMETRY_CLAIM" ? <Loader /> : <FiDownload />}
            </Button>
          </form>
        )}

        <p
          className="flex flex-col text-md mt-2 bgTransparent"
          style={{ padding: "16px 24px" }}
        >
          <div className="flex items-center">
            <FiInfo className="text-design-darkBlue2 mr-2" /> INFO{" "}
          </div>
          *It will take at least 24 hours (usually more) from you stake until
          you see your first rewards.
          <div style={{ paddingTop: "6px" }}>
            *Pending Rewards refund won't be available if minting services fail,
            so we recommend testing with a small amount first or claiming
            rewards in small batches to reduce the risk of loss.
          </div>
        </p>
      </div>
    </Card>
  );
}
