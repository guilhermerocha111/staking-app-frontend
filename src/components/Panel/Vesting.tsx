import Card from "../Card";
import Button from "../Button";
// import Select from "../Select";
import Overlay from "../Overlay";
import { useState, useContext } from "react";
// import { parseEther } from "ethers/lib/utils";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useVestingPanel } from "../../hooks/useVestingPanel";
import { Locker, MasterChef, NFTRewards } from "../../typechain";
import { Context } from '../../contextStore';
// import {
//   useNavigate,
// } from "react-router-dom";
import useCommon from "../../hooks/useCommon"
import Loader from "../Loader";
import { useWeb3React } from "@web3-react/core";
import {
  useUnstake,
} from "../../hooks/useIngame";
import { parseEther } from "ethers/lib/utils";
import ApiClient from '../../api/ApiClient';

interface VestingTypes {
  icon: string;
  pool: string;
  type: string;
  amount: string;
  weight: number;
  reward: string;
  poolInstance: NFTRewards | MasterChef;
  dateStaked: string;
  unlocksIn: string;
  percentage?: number;
  isClaimed: boolean;
  action: string;
  disabled: boolean;
}

export default function Vesting() {
  // const [filter, setFilter] = useState<string>("");
  // const [sort, setSort] = useState<string>("");
  const { PoolStakes } = useVestingPanel();
  const [, ACTION] = useContext(Context);
  // const navigate = useNavigate();
  const { addCommasToNumber } = useCommon();
  const { account, active } = useWeb3React();
  const unstake = useUnstake();

  const [unstakingIndex, setUnstakingIndex] = useState<number|null>(null);
  const [claimingIndex, setClaimingIndex] = useState<number|null>(null);
  const [nftIndex, setNftIndex] = useState<number|null>(null);

  const handleClaim = async (
    type: string,
    poolInstance: Locker | MasterChef,
    index: number,
    id?: string,
    unstakeAmount?: number
  ) => {
    ACTION.SET_TX_LOADER(true);
    try {
      if (type == "stake"){
        setUnstakingIndex(index)
        let tx = await (poolInstance as MasterChef).withdraw(index);
        await tx.wait()
      }
      else if(type == "vest"){
        setClaimingIndex(index)
        let tx = await (poolInstance as Locker).claimVestedTokens(index)
        await tx.wait()
      } else if (type == 'nft') {
        setNftIndex(index);
        await unstake(parseEther(String(unstakeAmount)).toString());
        // @ts-ignore
        await new ApiClient().setStakingClaimed(id);
      }
      window.location.reload();
    } catch(err) {
      ACTION.SET_TX_LOADER(false);
      setNftIndex(null);
      setUnstakingIndex(null)
      setClaimingIndex(null)
    }
    
  };

  const formatWeight = (weight: number, amount: number) => {
    return `${parseFloat((Number(weight)/amount).toFixed(8))}x`;
  }

  const renderTypeText = (type: string) => {
    switch (type) {
      case "stake":
        return "Stake";
      case "vest":
        return "Claim";
      case "nft":
        return "Stake";
    }
  }

  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
        <div>
          <h1 className="section-heading-1">
            <img src="/images/unlock.png" alt="" /> Vesting Panel
          </h1>
          <p className="flex items-center gap-2 mt-4">
            <button className="tag-1">
              BSC <img src="/images/Binance.png" alt="" />
            </button>
            Unstake your SMCW or LP. View SMCW claimed rewards vesting period
          </p>
        </div>
        {/* <div className="flex items-center gap-2 mt-5 lg:mt-0">
          <Select
            className="select-alt"
            options={[
              {
                label: "Filter",
                value: "",
              },
            ]}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <Select
            className="select-alt"
            options={[
              {
                label: "Sort by",
                value: "",
              },
            ]}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          />
          <button className="button-1 rounded-md" onClick={() => navigate('/')}>
            Close <span style={{position: 'relative', top: '2px', color: '#e919b6'}}>&#x2715;</span>
          </button>
        </div> */}
      </div>
      <div className="mt-9 flex-1">
        <Card className="card-1 !pb-2 overflow-auto w-full empty-vesting">
        {(PoolStakes.length === 0 || !active) &&(
            <Overlay>You have not connected your wallet or you do not have any vesting/claim period available.</Overlay>
          )}
          <table
            className="text-sm grid grid-cols-1 vesting-table"
            style={{
              minWidth: "1200px",
              display: !active ? 'none' : 'grid'
            }}
          >
            <thead className="grid grid-cols-1">
              <tr className="text-left !border-b">
                <th>Pool</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Weight</th>
                <th>Date</th>
                <th>Unlocks in</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-base">
              {PoolStakes.map((item, index) => (
                <tr key={index} style={{minHeight: '48px'}}>
                  <td title={item.pool}>
                    <img src={`/images/${item.icon}.png`} alt="" />
                    <span style={{textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", width: "150px"}}>{item.pool}</span>
                  </td>
                  <td>{renderTypeText(item.type)}</td>
                  <td>{addCommasToNumber(Number(item.amount), 0)}</td>
                  <td>{item.type === 'stake' ? formatWeight(item.weight, item.amount) : ''}</td>
                  <td>{item.timestamp} UTC</td>
                    <td>
                      {/* {item.unlocksIn.days >= 0 ? `${item.unlocksIn.days} days` : 'Unlocked' } */}
                      {`${item.unlocksIn.days || item.unlocksIn.hours || item.unlocksIn.minutes || item.unlocksIn.seconds || ''}`}
                      {`${item.unlocksIn.days > 0 && ' days' || item.unlocksIn.hours > 0 && ' hours' || item.unlocksIn.minutes > 0 && ' mins' || item.unlocksIn.seconds > 0 && ' secs' || 'Unlocked'}`}
                      {(item.percentage && !item.isClaimed) && (
                        <div className="progress-wrapper">
                          <svg
                            preserveAspectRatio="none"
                            strokeDasharray={`${item.percentage} 100`}
                          >
                            <circle cx="50%" cy="50%" r="50%" />
                          </svg>
                          <p>{item.percentage === -1 ? 100 : item.percentage}%</p>
                        </div>
                      )}
                    </td>
                  <td>
                    {
                      !item.isClaimed ? (
                        <>
                          {(item.percentage >= 100 || item.percentage < 0) ? (
                            <Button
                              onClick={async () =>
                                await handleClaim(
                                  item.type,
                                  item.poolInstance,
                                  item.index,
                                  item.id || '',
                                  item.amount || 0
                                )
                              }
                              className="gradient-2 button-3 border border-design-blue !py-2"
                            >
                              {item.type === 'stake' && (item.index === unstakingIndex ? (<>Unstaking... <Loader /></>) : (<>Unstake <HiOutlineExternalLink /></>))}
                              {item.type === 'vest' && (item.index === claimingIndex ? (<>Claiming... <Loader /></>) : (<>Claim NOW <HiOutlineExternalLink /></>))}
                              {item.type === 'nft' && (item.index === nftIndex ? (<>Unstaking... <Loader /></>) : (<>Unstake <HiOutlineExternalLink /></>))}
                            </Button>
                          ) : (
                            <Button
                              className="button-3 border border-design-pink !bg-design-backgroundPink !py-2 cursor-not-allowed"
                              disabled
                            >
                              {item.state} <img src="/images/lock.png" alt="" />
                            </Button>
                          )}
                          {

                          }
                        </>
                      ) : (
                        <>
                          {item.type === "stake" ? "Unstaked" : "Claimed"}
                        </>
                      )
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  );
}
