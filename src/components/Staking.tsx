import Card from "./Card";
import moment from "moment";
import Select from "./Select";
import Button from "./Button";
import { BigNumber } from "ethers";
import toast from "react-hot-toast";
import { NumberInput } from "./Input";
import { IAPR } from "../hooks/useApr";
import useCommon from '../hooks/useCommon';
import { FiInfo } from "react-icons/fi";
import { MasterChef } from "../typechain";
import React, { useEffect, useState, useContext } from "react";
import { parseEther } from "ethers/lib/utils";
import { useApprove } from "../hooks/useApprove";
import { useAllowance } from "../hooks/useAllowance";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useTokenBalance } from "../hooks/useTokenBalance";
import { Context } from '../contextStore';
import Loader from './Loader';
import Overlay from './Overlay';
import { tokens } from "../utils/contracts";
import { getSigner } from "../utils/connectors";
import { useWeb3React } from "@web3-react/core";

interface StakingProps {
  title: string;
  apr: IAPR;
  pool: MasterChef;
  avarage:string;
  isApproved?:boolean|null;
  poolAddress: string;
  defaultAmount?: string;
  approve_tx_string: string;
  stake_tx_string: string;
  //this is to implement different type of function here in this component for diffrent staking methods
  stakingType: string;
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Staking({
  title,
  pool,
  apr,
  poolAddress,
  avarage,
  isApproved,
  defaultAmount,
  approve_tx_string,
  stake_tx_string,
  stakingType,
  refresh,
  setRefresh,
}: StakingProps) {
  const [stakeAmount, setStakeAmount] = useState<string>("0.00");
  const [stakeLength, setStakeLength] = useState<string>("30");
  const [stakeUntill, setStakeUntill] = useState<string>("");
  const [stakingApproving, setStakingApproving] = useState<boolean>(false);
  const [approvedAmount, setApprovedAmount] = useState(1);
  const [firstLoad, setFirstLoad] = useState(false);

  const [loading, setLoading] = useState<boolean>(false);

  const [{active_tx}, ACTION] = useContext(Context);

  const smcwBalance = useTokenBalance(stakingType,loading);
  const approve = useApprove(stakingType);
  const { addCommasToNumber } = useCommon();

  const setActiveTx = (tx_string: string) => {
    ACTION.SET_ACTIVE_TX(tx_string);
  }

  useEffect(() => {
    if (firstLoad === false) {
      setFirstLoad(true)
      let now = Date.now() + 60 * 60 * 24 * 30 * 1000;
      setStakeUntill(
        moment(now).utc().format("dddd, MMMM Do YYYY, h:mm:ss a")
      );
    }

  }, [isApproved, loading, refresh]);

  const stakeInPool = async () => {
    try {
      ACTION.SET_TX_LOADER(true);
      setStakingApproving(true);
      setActiveTx(stake_tx_string);
      setLoading(true);
      console.log(BigNumber.from(stakeLength))
      const tx = await pool.deposit(
        parseEther(stakeAmount),
        BigNumber.from(stakeLength)
      );
      await tx.wait();
      toast.success(`Successfully staked ${stakeAmount} ${stakingType === 'smcw' ? 'SMCW' : 'BUSD/SMCW LP'}`);
      setStakeAmount("0.00");
      setLoading(false);
      ACTION.SET_TX_LOADER(false);
      setActiveTx('');
      setStakingApproving(false);
      setRefresh(!refresh);
    } catch (error: any) {
      setStakingApproving(false);
      setStakeAmount("0.00");
      setActiveTx('');
      let errorMsg = error.reason;
      if (error.reason.includes('invalid staking period')) {
        errorMsg = 'Execution reverted: invalid staking period'
      }
      if (error.reason.includes('user rejected transaction')) {
        errorMsg = 'User rejected the transaction'
      }
      toast.error(errorMsg);
      setLoading(false);
      ACTION.SET_TX_LOADER(false);
    }
  };

  const {library } = useWeb3React();

  const checkAllowedBalance = async () => {
    const signer = await getSigner(library);
    const token = tokens[stakingType](signer);
    console.log(token)
    console.log(signer)
    const address = await signer.getAddress()
    console.log(address)
    const allowanceToken = await token.allowance(
      address,
      poolAddress
    );

    setApprovedAmount(Number(allowanceToken.toString())/ Math.pow(10, 18))
  }

  useEffect(() => {
    checkAllowedBalance()
  }, [stakeAmount])

  const onPercentage = (percentage: string) => {
    setStakeAmount(
      (parseInt(smcwBalance) * (parseInt(percentage) / 100)).toString()
    );
  };

  return (
    <Card className="flex-1">
      {(isApproved === null) && (
            <Overlay withIcon={false}>
              <Loader width={'64px'}/>
              <>Loading...</>
            </Overlay>
      )}
      <div className="flex items-center gap-3 text-2xl font-semibold">
        <div className="card-icon-1 bgTransparent">
          {stakingType === "smcw" && <img src="/images/coin.png" alt="" />}
          {stakingType === "lp" && <img src="/images/lp.png" alt="" />}
        </div>
        <h2>{title}</h2>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-2">
        <div className="relative grid grid-cols-1 gap-2">
          {isApproved === false && (
            <div className="absolute z-10 h-5/6 w-full flex items-start justify-center pt-12">
              <div className="flex flex-col items-center justify-center">
                <div className="lockBorder">
                  <img src="images/lock2.png" alt="" />
                </div>
                <p className="text-lg mt-4">Approve your wallet first</p>
                <p className="text-sm italic">(Click on the “Approve” button below)</p>
              </div>
            </div>
          )}
          <div className="flex items-center justify-between gap-4">
            <h3>Stake Amount</h3>
            <p className="text-sm flex items-center text-design-grey">
              Wallet Balance:
              {stakingType === "smcw" && <img src="/images/coin.png" alt="" className="w-4 h-4 object-contain object-center ml-2 mr-1 z-1"/>}
              {stakingType === "lp" && <img src="/images/lp.png" alt="" className="w-4 h-4 object-contain object-center ml-2 mr-1 z-1"/>}
              <span className="text-white">{addCommasToNumber(Number(smcwBalance), 0)}</span>
            </p>
          </div>
          <div className={`${isApproved ? '' : 'blur pointer-events-none select-none'}`}>
        
          <NumberInput
            placeholder="0.00"
            value={stakeAmount}
            setValue={setStakeAmount}
            min={1}
            max={99999999}
            step={1}
            decimalpoints={2}
            required
          />
          <div className="mt-4">
            <Select
              options={[
                {
                  label: "Stake (lock) for 1 hour",
                  value: "1",
                },
                {
                  label: "Stake (lock) for 30 days",
                  value: "30",
                },
                {
                  label: "Stake (lock) for 90 days",
                  value: "90",
                },
                {
                  label: "Stake (lock) for 180 days",
                  value: "180",
                },
                {
                  label: "Stake (lock) for 360 days",
                  value: "360",
                },
              ]}
              value={stakeLength}
              onChange={(e) => {
                console.log('HJANDDSDSD')
                setStakeLength(e.target.value);
                let term = Number(e.target.value)
                let now = Date.now() + 60 * 60 * 24 * term * 1000;
                let d = moment(now).utc()
                  .format("dddd, MMMM Do YYYY, h:mm:ss a");
                setStakeUntill(d);
              }}
            />
          </div>
          </div>
          <div className={`flex items-center gap-2 mt-2 flex-wrap ${isApproved ? '' : 'blur pointer-events-none select-none'}`}>
            <button
              type="button"
              className="tag-2 ovverideBgAndBorder"
              onClick={() => onPercentage("25")}
            >
              25%
            </button>
            <button
              type="button"
              className="tag-2 ovverideBgAndBorder"
              onClick={() => onPercentage("50")}
            >
              50%
            </button>
            <button
              type="button"
              className="tag-2 ovverideBgAndBorder"
              onClick={() => onPercentage("75")}
            >
              75%
            </button>
            <button
              type="button"
              className="tag-2 ovverideBgAndBorder"
              onClick={() => onPercentage("100")}
            >
              100%
            </button>
            <p className="text-sm ml-1">Stake until {stakeUntill} UTC</p>
          </div>
          {isApproved && (Number(stakeAmount) <= approvedAmount) ? (
            <Button
              onClick={stakeInPool}
              className={`gradient-1 button-3 mt-4 ${Number(stakeAmount.replace('.', '')[0]) >= 1 ? '' : 'opacity-50 pointer-events-none'}`}
              disabled={loading}
            >
               {loading ? "Staking..." : "Stake"}
                {
                  (stakingApproving) ? <Loader /> : <HiOutlineExternalLink />
                }
            </Button>
          ) : (
            <Button
              className={`gradient-1 button-3 mt-4 ${
                loading ? "opacity-50 pointer-events-none" : ""
              }`}
              onClick={async () => {
                setLoading(true);
                setActiveTx(approve_tx_string)
                await approve(poolAddress);
                setLoading(false);
                setActiveTx('')
                setApprovedAmount(1000000)
                setRefresh(!refresh);
              }}
            >
              {loading ? "Approving..." : "Approve"}
              {
                active_tx === approve_tx_string && (
                  <Loader />
                )
              }
            </Button>
          )}
        </div>
        {!isApproved && (
          <p className="flex items-center text-sm mt-4">
            <FiInfo className="text-design-darkBlue2 mr-2" /> If you Stake for the
            first time the first transaction is only to approve your SMCW, after
            that you can start staking
          </p>
        )}
        <div className="gradient-orange p-px mt-2">
          <div className="gradient-2 button-3 border border-design-blue estimatedRew">
            Estimated Daily Rewards: <img src="/images/coin.png" alt="" /> {addCommasToNumber(Number(avarage), 2)}
          </div>
        </div>
        <div className="w-full mt-4 overflow-x-auto overflow-y-hidden">
          <div
            style={{
              minWidth: "500px",
            }}
          >
            <h4 className="text-design-darkBlue2 text-sm" style={{color: '#A9A7BB'}}>
              Estimated rewards*
            </h4>
            <table className="mt-1.5 grid grid-cols-1 rewards-table">
              <thead className="grid grid-cols-1">
                <tr className="text-left !border-b">
                  <th>Duration</th>
                  <th>Token weight</th>
                  <th>Yield</th>
                </tr>
              </thead>
              <tbody className="grid grid-cols-1">
                <tr>
                  <td>30 days</td>
                  <td>0.33X</td>
                  <td>{addCommasToNumber(Number(apr.oneMonth), 4)}% APR*</td>
                </tr>
                <tr>
                  <td>90 days</td>
                  <td>1X</td>
                  <td>{addCommasToNumber(Number(apr.threeMonth), 4)}% APR*</td>
                </tr>
                <tr>
                  <td>180 days</td>
                  <td>2X</td>
                  <td>{addCommasToNumber(Number(apr.sixMonth), 4)}% APR*</td>
                </tr>
                <tr>
                  <td>360 days</td>
                  <td>4X</td>
                  <td>{addCommasToNumber(Number(apr.twelveMonth), 4)}% APR*</td>
                </tr>
              </tbody>
            </table>
            {/* <p className="mt-2 text-sm text-design-darkBlue2">
              Staking rewards are changing every second. The number above are
              approximate representation and are updated every 24 hours.
            </p> */}
          </div>
        </div>
        <div className="card-2 mt-6 bgTransparent">
          <p className="text-sm">
            Stake as many times as you like <br /> You can unstake or withdraw
            rewards at any time (after vesting period ends) at{" "}
            <a href="/vesting" className="external-link">
              Vesting Panel <HiOutlineExternalLink />
            </a>
          </p>
          <p className="text-sm">
            *APR is estimated based on current users stakes and constantly changing
          </p>
        </div>
      </div>
    </Card>
  );
}
