import Card from "./Card";
import Overlay from "./Overlay";
import  { NumberInput } from "./Input";
import {  useState, useContext } from "react";
import { FiDownload, FiInfo } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import Button from "./Button";
import toast from "react-hot-toast";
import { useAllowance } from "../hooks/useAllowance";
import { contracts, DEFAULT_CHAINID, toHex } from "../utils/constants";
import { useApprove } from "../hooks/useApprove";
import { useTokenBalance } from "../hooks/useTokenBalance";
// import Timer from "./Timer";
import {
  useIngameUserInfo,
  useStake,
  useUnstake,
  useClaim
} from "../hooks/useIngame";
import { useWeb3React } from "@web3-react/core";
import { parseEther } from "ethers/lib/utils";
import { useNFTPendings } from "../hooks/usePendings";
import { Context } from '../contextStore';
import useCommon from "../hooks/useCommon";

export default function IngameStaking1() {
  const stakingType = "smcw";
  const [enjinAddress, setEnjinAddress] = useState("");
  const [stakeAmount, setStakeAmount] = useState<string>("");
  const [unstakeAmount, setUnstakeAmount] = useState<string>("");
  const [claimAmount, setClaimAmount] = useState<string>("0");
  const [type, setType] = useState<"stake" | "unstake">("stake");
  const [isLoading, setIsLoading] = useState(false);
  const [, ACTION] = useContext(Context);
  const { chainId, active } = useWeb3React();
  const { addCommasToNumber } = useCommon();

  const [actionType, setActionType] = useState<any>("default");

  const actionMessage = {
    stake: 'Staking...',
    claim: 'Claiming...',
    default: 'Increase / Stake'
  }

  const stake = useStake();
  const unstake = useUnstake();
  const claim = useClaim();

  const { pendings,estimated } = useNFTPendings(isLoading);
  const userInfo = useIngameUserInfo(isLoading);
  const approve = useApprove(stakingType);
  const smcwBalance = useTokenBalance(stakingType,isLoading);
  const isApproved = useAllowance(
    stakingType,
    contracts[DEFAULT_CHAINID].nftStaking,
    isLoading
  );

  const handleStake = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ACTION.SET_TX_LOADER(true);
    setIsLoading(true);
    setActionType('stake');
    try {
      await stake(parseEther(stakeAmount).toString());
      ACTION.SET_TX_LOADER(false);
      toast.success(`Stake Amount: ${stakeAmount}`);
      setIsLoading(false);
      setActionType('default');
      // window.location.reload();
    } catch (err) {
      setActionType('default');
      ACTION.SET_TX_LOADER(false);
      setIsLoading(false);
      console.log(err);
    }
  };

  const handleUnstake = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    ACTION.SET_TX_LOADER(true);
    try {
      await unstake(parseEther(unstakeAmount).toString());
      ACTION.SET_TX_LOADER(false);
      toast.success(`Unstake Amount: ${unstakeAmount}`);
      setIsLoading(false);
      // window.location.reload();
    } catch (err) {
      ACTION.SET_TX_LOADER(false);
      setIsLoading(false);
      console.log(err);
    }
    
  };

  const handleClaim = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @note integrate enjin apis and then execute claim transaction
    ACTION.SET_TX_LOADER(true);
    setIsLoading(true);
    setActionType('claim');
    try {
      if (enjinAddress.length !== 42) {
        toast.error("Address is not correct");
      }
      await claim(claimAmount, enjinAddress)
      toast.success(`Claimed successfully`);
      ACTION.SET_TX_LOADER(false);
      setIsLoading(false);
      setActionType('default');
    } catch (error) {
      console.log(error)
      ACTION.SET_TX_LOADER(false);
      setIsLoading(false);
      toast.error("Something went wrong");
      setActionType('default');
    }
  };

  return (
    <Card className="flex-1">
      {(!active || DEFAULT_CHAINID !== toHex(chainId)) && (
            <Overlay>Connect your wallet to access this panel.</Overlay>
      )}
      <div className="flex items-start lg:items-center justify-between gap-1 text-2xl font-semibold sm:flex-col">
        <div className="flex items-center gap-2">
          <div className="card-icon-2">
            <img src="/images/icons/game1.png" alt="" />
          </div>
          <h2 className="text-base lg:text-2xl">
            Hidden data <br className="lg:hidden" /> (Random Telemetry)
          </h2>
        </div>
        <div className="text-xs py-2 px-3 bg-design-darkBlue border border-design-blue rounded-lg leading-5 sm:mt-2 sm:w-full">
          3000SMCW = 1/day
          <br />
          Max: 20/day
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4">
        <div className="relative border border-design-darkBlue rounded-xl overflow-hidden z-1">
          {(!isApproved && active) && (
                <div className="absolute z-10 h-4/6 w-full flex items-start justify-center pt-4">
                  <div className="flex flex-col items-center justify-center">
                    <img src="images/icons/locked.svg" alt="" />
                    <p className="text-lg mt-4">Approve your wallet first</p>
                    <p className="text-sm italic">(Click on the “Approve” button below)</p>
                  </div>
                </div>
          )}
          <div className={`flex gap-6 bg-design-darkBlue px-4 pt-1 ${isApproved ? '' : 'blur pointer-events-none select-none'}`}>
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
          </div>
          {type === "stake" ? (
            <form
              onSubmit={(e) => handleStake(e)}
              className={`grid grid-cols-1 gap-2 p-4`}
            >
              <div className={`${isApproved ? '' : 'blur pointer-events-none select-none'}`}>
                <div className="flex items-center justify-between gap-4">
                  <h3>Stake Amount</h3>
                  <p className="text-sm flex items-center text-design-grey">
                    Wallet Balance:
                    <img
                      src="/images/coin.png"
                      alt=""
                      className="w-4 h-4 object-contain object-center ml-2 mr-1"
                    />
                    <span className="text-white">{addCommasToNumber(Number(smcwBalance), 0)}</span>
                  </p>
                </div>
                <NumberInput
                  placeholder="3000 (min) 60000 (max)"
                  value={stakeAmount}
                  setValue={setStakeAmount}
                  min={3000}
                  max={
                    60000 - Number(userInfo.stakedAmount) - Number(userInfo.lastAmount)
                  }
                  step={3000}
                  roundTo={3000}
                  decimalpoints={0}
                  className={'mt-2'}
                  required
                />
                <p className="flex items-center text-sm mt-2 text-design-darkBlue2">
                  <FiInfo className=" mr-2" /> Only multiples of 3000
                </p>
              </div>

              {isApproved ? (
                <Button type="submit" className={`gradient-1 button-3 mt-2 cursor-pointer ${(Number(stakeAmount) < 3000 || isLoading)? 'opacity-50 pointer-events-none' : ''}`}>
                  {/* @ts-ignore */}
                  {actionMessage[actionType]} <HiOutlineExternalLink />
                </Button>
              ) : (
                <Button
                  className={`gradient-1 button-3 mt-2 cursor-pointer z-1 ${
                    isLoading ? "opacity-50 pointer-events-none" : ""
                  }`}
                  type="button"
                  onClick={async () => {
                    setIsLoading(true);
                    await approve(contracts[DEFAULT_CHAINID].nftStaking);
                    setIsLoading(false);
                  }}
                >
                  {isLoading ? "Approving..." : "Approve"}
                </Button>
              )}
              {!isApproved && (
                <p className="flex items-center text-sm mt-4">
                  <FiInfo className="text-design-darkBlue2 mr-2" /> If you Stake
                  for the first time the first transaction is only to approve your
                  SMCW, after that you can start staking
                </p>
              )}
            </form>
          ) : (
            <form
              onSubmit={(e) => handleUnstake(e)}
              className={`grid grid-cols-1 gap-2 p-4 ${isApproved ? '' : 'blur pointer-events-none select-none'}`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3>Unstake Amount</h3>
                <p className="text-sm flex items-center text-design-grey">
                  Wallet Balance:
                  <img
                    src="/images/coin.png"
                    alt=""
                    className="w-4 h-4 object-contain object-center ml-2 mr-1"
                  />
                  <span className="text-white">{smcwBalance}</span>
                </p>
              </div>
              <NumberInput
                placeholder="3000 (min) 60000 (max)"
                value={unstakeAmount}
                setValue={setUnstakeAmount}
                min={3000}
                max={Number(userInfo.stakedAmount) + Number(userInfo.lastAmount)}
                step={3000}
                roundTo={3000}
                decimalpoints={0}
                required
              />
              <p className="flex items-center text-sm text-design-darkBlue2">
                <FiInfo className=" mr-2" /> Only multiples of 3000
              </p>
              <Button type="submit" className="gradient-1 button-3 mt-2">
                Decrease / Unstake <HiOutlineExternalLink />
              </Button>
              {!isApproved && (
                <p className="flex items-center text-sm mt-4">
                  <FiInfo className="text-design-darkBlue2 mr-2" /> If you Stake
                  for the first time the first transaction is only to approve your
                  SMCW, after that you can start staking
                </p>
              )}
            </form>
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
        <div className={`card-3 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-1 ${isApproved ? '' : 'blur pointer-events-none select-none'}`}>
          <div className="grid grid-cols-1 gap-1.5 lg:gap-3">
            <h5 className="text-design-grey">Your Pool Staked SMCW</h5>
            <p className="flex items-center gap-2">
              <img
                src="/images/coin.png"
                alt=""
                className="w-5 h-5 object-contain object-center mr-1"
              />
              {Number(userInfo.stakedAmount) + Number(userInfo.lastAmount)}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-1.5 lg:gap-3">
            <h5 className="text-design-grey">Pending Rewards</h5>
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
            <h5 className="text-design-grey">Estimated Rewards</h5>
            <p className="flex items-center gap-2">{estimated} / day</p>
          </div>
        </div>
        <div className="relative border border-design-darkBlue rounded-xl overflow-hidden z-1">
          <div className={`flex gap-6 bg-design-darkBlue px-4 pt-1 `}>
              <button
                className={`font-semibold py-3 link-active-2`}
                onClick={() => setType("stake")}
              >
                Claim
              </button>
            </div>
          <div className="grid grid-cols-1 gap-2 p-4 ">
            <div className={`input ${isApproved ? '' : 'blur pointer-events-none select-none'}`}>
              <input
                disabled={Number(pendings) + Number(userInfo.userRewards) > 0 ? false :true }
                value={enjinAddress}
                onChange={(e) => setEnjinAddress(e.target.value)}
                type="text"
                placeholder="Put your Enjin Wallet Address Here"
              />
            </div>
            <form onSubmit={(e) => handleClaim(e)} className={`${isApproved ? '' : 'blur pointer-events-none select-none'}`}>
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
                placeholder="Amount of rewards to claim"
                value={claimAmount}
                setValue={setClaimAmount}
                min={1}
                max={Number(pendings) + Number(userInfo.userRewards)}
                step={1}
                decimalpoints={0}
                required
              />
              {(active || DEFAULT_CHAINID !== toHex(chainId)) && (
                <Button
                  type="submit"
                  disabled={Number(pendings) + Number(userInfo.userRewards) > 0 ? false :true }
                  className={`gradient-2 button-3 mt-4 border border-design-blue cursor-pointer hover:button-2
                    ${(Number(claimAmount) < 1  || isNaN(Number(claimAmount))) ? 'opacity-50 pointer-events-none' : ''}
                  `}
                >
                  Claim Rewards<FiDownload />
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
    </Card>
  );
}
