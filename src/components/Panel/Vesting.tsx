// @ts-nocheck
import Card from "../Card";
import Button from "../Button";
// import Select from "../Select";
import Overlay from "../Overlay";
import { useState, useContext, useMemo, useEffect } from "react";
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
import Pagination from '../Pagination/Pagination';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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
  const [poolStakesData, setPoolStakesData] = useState([]);
  // const navigate = useNavigate();
  const { addCommasToNumber } = useCommon();
  const { account, active } = useWeb3React();
  const unstake = useUnstake();
  const [currentPage, setCurrentPage] = useState(0);

  const [unstakingIndex, setUnstakingIndex] = useState<number|null>(null);
  const [claimingIndex, setClaimingIndex] = useState<number|null>(null);
  const [nftIndex, setNftIndex] = useState<number|null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showFilterContent, setShowFilterContent] = useState<string[]>([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [minDateTimestamp, setMinDateTimestamp] = useState(0);
  const [maxDateTimestamp, setMaxDateTimestamp] = useState(0);

  const [activeFilters, setActiveFilters] = useState({
    timestamp: [startDate, endDate],
    filters: []
  })

  let PageSize = 15;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return poolStakesData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, poolStakesData, activeFilters]);

  useEffect(() => {
    if (PoolStakes.length > 0) {
      setCurrentPage(1)
    }
  }, [PoolStakes]);

  useEffect(() => {
    setPoolStakesData(PoolStakes)
  }, [PoolStakes])

  const handleClaim = async (
    type: string,
    poolInstance: Locker | MasterChef,
    index: number,
    id?: string,
    unstakeAmount?: number,
    nft_pool_address?: string
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
        console.log(nft_pool_address)
        setNftIndex(index);
        await unstake(parseEther(String(unstakeAmount)).toString(), nft_pool_address);
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

  const handleChangeFilters = (filterType: string, filterValue: string) => {
    let filterKey = `${filterType}_${filterValue}`
    if (activeFilters.filters.includes(filterKey)) {
      let filteredRow = activeFilters.filters.filter(e => e !== filterKey)
      setActiveFilters({
        ...activeFilters,
        filters: filteredRow
      })
    } else {
      setActiveFilters({
        ...activeFilters,
        filters: [...activeFilters.filters, filterKey]
      })
    }
  }

  useEffect(() => {
    if (activeFilters.filters.length > 0) {
      let allData = [];
      for (let i = 0; i < activeFilters.filters.length; i++) {
        let filteredGroup = PoolStakes.filter(e => {
          let answers = [];
          let answersObj = {
            pool: [],
            status: [],
            type: []
          };
          const answerStrings = ['pool', 'status', 'type'];

          for (let j = 0; j < activeFilters.filters.length; j++) {
            let prefix = activeFilters.filters[j].split('_')[0];
            let answer = e.filterType.includes(activeFilters.filters[j]);
            answersObj[prefix].push(answer)
            
            // answersObj[prefix].push(e.filterType.includes(activeFilters.filters[j]))
            // answers.push(answer)
          }
          answerStrings.forEach((string) => {
            console.log(answersObj)
            if (answersObj[string].length > 0) {
              return answersObj[string].includes(true) ? answers.push(true) : answers.push(false)
            }
            
          })
          return answers.includes(false) ? false : true;
        })
        console.log(filteredGroup)
        let filteredByDate = filteredGroup.filter(item => {
          let date = new Date(item.timestamp)
          return (date >= startDate && date <= endDate);
        })
        allData = [...new Set([...allData, ...filteredByDate])]
      }
      setPoolStakesData(allData)
    } else {
      setPoolStakesData(PoolStakes)
    }
      
  }, [activeFilters]);

  useEffect(() => {
    if (minDateTimestamp && maxDateTimestamp) {
      if (activeFilters.filters.length === 0) {
        let filteredByDate = PoolStakes.filter(item => {
          let date = new Date(item.timestamp)
          return (date >= startDate && date <= endDate);
        })
  
        setPoolStakesData(filteredByDate)
      }
    }
  }, [startDate, endDate])

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  }

  const handleShowFilterContent = (value:string) => {
    if (!showFilterContent.includes(value)) {
      setShowFilterContent([...showFilterContent, value])
    } else {
      setShowFilterContent(showFilterContent.filter((item) => item !== value))
    }
  }


  const onDateChange = (value:any) => {
    setStartDate(value[0]);
    setEndDate(value[1]);
    setShowCalendar(false)
  }

  const onToggleCalendar = () => {
    setShowCalendar(!showCalendar)
  }

  const clearFilters = () => {
    if (PoolStakes) {
      let minDate = 100000000000000000;
    let maxDate = 0;

    PoolStakes.forEach((reward: rewardItem) => {
      let key = moment(reward.timestamp).format('llll').replaceAll(' ', '_');
      if (new Date(reward.timestamp).getTime() < minDate) {
        minDate = new Date(reward.timestamp).getTime();
      }

      if (new Date(reward.timestamp).getTime() > maxDate) {
        maxDate = new Date(reward.timestamp).getTime();
      }
    })
    setMinDateTimestamp(minDate);
    setMaxDateTimestamp(maxDate);
    setStartDate(new Date(minDate));
    setEndDate(new Date(maxDate));
    setActiveFilters({
      ...activeFilters,
      filters: []
    })
    }
    // setStartDate(new Date(minDateTimestamp))
    // setEndDate(new Date(maxDateTimestamp))
  }

  useEffect(() => {
    if (PoolStakes.length) {
      clearFilters();
    }
  }, [PoolStakes.length])

  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
        <div style={{width: '100%'}}>
          <h1 className="section-heading-1">
            <img src="/images/unlock.png" alt="" /> Claim / Vesting Panel
          </h1>
          <p className="flex items-center gap-2 mt-4">
            <button className="tag-1 tagBg">
              BSC <img src="/images/Binance.png" alt="" />
            </button>
            <span>Unstake your SMCW or LP. View SMCW claimed rewards vesting period</span>
            {PoolStakes.length > 0 && (
              <div className="filterPlaceholder">
              <span  onClick={() => toggleFilters()}>Filter <div className={showFilters ? "arrowFilter up" : "arrowFilter down"}/></span>
              {showFilters && (
                <div className="filterList">
                  <div>
                    <div className="filterLabel" onClick={() => handleShowFilterContent('timestamp')}>Timestamp <div className={showFilterContent.includes('timestamp') ? "arrowFilter up" : "arrowFilter down"}/></div>
                    {
                      showFilterContent.includes('timestamp') && (
                        <div className="filterContent">
                          <div className="flex relative">
                            <div className="datePlaceholder" onClick={() => onToggleCalendar()}>
                              <img src="/images/icons/calendar.svg" />
                              {moment(startDate).format('MM/DD/YYYY')}
                              <img src="/images/icons/close.svg" />
                            </div>
                            <div className="datePlaceholder"  onClick={() => onToggleCalendar()}>
                              <img src="/images/icons/calendar.svg" />
                              {moment(endDate).format('MM/DD/YYYY')}
                              <img src="/images/icons/close.svg" />
                            </div>
                          </div>
                          {
                            showCalendar && (
                              <div style={{position: 'absolute', top: '90px', right: '0'}}>
                                <Calendar locale="en-US" selectRange onChange={onDateChange} defaultView="month"/>
                              </div>
                            )
                          }
                        </div>
                      )
                    }
                  </div>
                  <div>
                    <div className="filterLabel" onClick={() => handleShowFilterContent('pool')}>Pool <div className={showFilterContent.includes('pool') ? "arrowFilter up" : "arrowFilter down"}/></div>
                    {
                      showFilterContent.includes('pool') && (
                        <div className="filterContent">
                          <div className="filterContent__row">
                            <div>
                              <input type="checkbox" checked={activeFilters.filters.includes('pool_ingame')} onClick={() => handleChangeFilters('pool', 'ingame')}/>
                            </div>
                            <div className="flexCenter">
                              <img src="/images/telemetry1.png"  style={{width: '16px', height: '16px', borderRadius: '4px', margin: "0 8px"}} />
                              Hidden data (Random Telemetry)
                            </div>
                          </div>
                          <div className="filterContent__row">
                            <div>
                              <input type="checkbox" checked={activeFilters.filters.includes('pool_smcw')} onClick={() => handleChangeFilters('pool', 'smcw')}/>
                            </div>
                            <div className="flexCenter">
                              <img src="/images/coin.png"  style={{width: '16px', height: '16px', borderRadius: '4px', margin: "0 8px"}} />
                              SMCW
                            </div>
                          </div>
                          <div className="filterContent__row">
                            <div>
                              <input type="checkbox" checked={activeFilters.filters.includes('pool_smcw_lp')} onClick={() => handleChangeFilters('pool', 'smcw_lp')}/>
                            </div>
                            <div className="flexCenter">
                              <img src="/images/lp.png"  style={{width: '16px', height: '16px', borderRadius: '4px', margin: "0 8px"}} />
                              SMCW LP
                            </div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div>
                    <div className="filterLabel" onClick={() => handleShowFilterContent('status')}>Status <div className={showFilterContent.includes('status') ? "arrowFilter up" : "arrowFilter down"}/></div>
                    {
                      showFilterContent.includes('status') && (
                        <div className="filterContent">
                          <div className="filterContent__row">
                            <div style={{marginRight: '8px'}} onClick={() => handleChangeFilters('status', 'locked')}>
                              <input type="checkbox" checked={activeFilters.filters.includes('status_locked')} />
                            </div>
                            <div className="flexCenter">
                              Locked
                            </div>
                          </div>
                          <div className="filterContent__row">
                            <div style={{marginRight: '8px'}} onClick={() => handleChangeFilters('status', 'unstake')}>
                              <input type="checkbox" checked={activeFilters.filters.includes('status_unstake')}/>
                            </div>
                            <div className="flexCenter">
                              Unstake
                            </div>
                          </div>
                          <div className="filterContent__row">
                            <div style={{marginRight: '8px'}} onClick={() => handleChangeFilters('status', 'claimed')}>
                              <input type="checkbox" checked={activeFilters.filters.includes('status_claimed')} />
                            </div>
                            <div className="flexCenter">
                              Claimed
                            </div>
                          </div>
                          <div className="filterContent__row">
                            <div style={{marginRight: '8px'}} onClick={() => handleChangeFilters('status', 'claim_now')}>
                              <input type="checkbox" checked={activeFilters.filters.includes('status_claim_now')} />
                            </div>
                            <div className="flexCenter">
                              Claim Now
                            </div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div>
                    <div className="filterLabel" onClick={() => handleShowFilterContent('type')}>Type <div className={showFilterContent.includes('type') ? "arrowFilter up" : "arrowFilter down"}/></div>
                    {
                      showFilterContent.includes('type') && (
                        <div className="filterContent">
                          <div className="filterContent__row">
                            <div style={{marginRight: '8px'}} onClick={() => handleChangeFilters('type', 'stake')}>
                              <input type="checkbox" checked={activeFilters.filters.includes('type_stake')} />
                            </div>
                            <div className="flexCenter">
                              Stake
                            </div>
                          </div>
                          <div className="filterContent__row">
                            <div style={{marginRight: '8px'}} onClick={() => handleChangeFilters('type', 'claim')}>
                              <input type="checkbox" checked={activeFilters.filters.includes('type_claim')}/>
                            </div>
                            <div className="flexCenter">
                              Claim
                            </div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div className="flex align-center justify-center p-2 pointer" onClick={() => clearFilters()}>Clear</div>
                </div>
              )}
            </div>
            ) }
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
      <div className="mt-9 flex-1 relative">
        <Card className={`card-1 !pb-2 overflow-hidden w-full empty-vesting ${poolStakesData.length > PageSize ? 'hide-bottom-border' : ''}`}>
        {(PoolStakes.length === 0 || !active) &&(
            <Overlay>You have not connected your wallet or you do not have any vesting/claim period available.</Overlay>
          )}
          {(PoolStakes.length > 0 && (
            <table
            className="text-sm grid grid-cols-1 vesting-table"
            style={{
              minWidth: "1200px",
              display: !active ? 'none' : 'grid',
              height: 'inherit'
            }}
          >
            <thead className="grid grid-cols-1 pt-[10px]" style={{position: 'sticky', top: '0px', zIndex: '10'}}>
              <tr className="text-left !border-b">
                <th>Status</th>
                <th>Unlocks in</th>
                <th>Pool</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Weight</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="text-base mobTableHeight" style={{overflow: 'auto', height: 'inherit', paddingBottom: '50px'}}>
              {/* tslint:disable */}
              {currentTableData.length > 0 && currentTableData.map((item, index) => (
                <tr key={index} style={{minHeight: '48px'}}>
                  <td>
                    {
                      !item.isClaimed ? (
                        <>
                          {(!item.locked) ? (
                            <Button
                              onClick={async () =>
                                await handleClaim(
                                  item.type,
                                  item.poolInstance,
                                  item.index,
                                  item.id || '',
                                  item.amount || 0,
                                  item.pool_address || ''
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
                              className="button-3 border border-design-pink !bg-design-backgroundPink !py-2 cursor-not-allowed actionLocked"
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
                  <td title={item.pool}>
                    <img src={`/images/${item.icon}.png`} alt="" />
                    <span style={{textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", width: "150px"}}>{item.pool}</span>
                  </td>
                  <td>{renderTypeText(item.type)}</td>
                  <td><img src={`/images/${item.pool === 'SMCW LP' ? 'lp' : 'coin'}.png`}  style={{width: '16px', height: '16px'}} /> {addCommasToNumber(Number(item.amount), 0)}</td>
                  <td>{item.type === 'stake' ? formatWeight(item.weight, item.amount) : ''}</td>
                  <td>{item.timestamp} UTC</td>
                </tr>
              ))}
            </tbody>
          </table>
          ))}
          
        </Card>
        {poolStakesData.length > PageSize && (
          <div style={{position: 'absolute', bottom: '-43px', padding: "5px 1.25rem", width: '100%', background: 'rgba(231, 19, 131, 0.2)', borderLeft: '1px solid #E71383', borderRight: '1px solid #E71383', borderBottom: '1px solid #E71383', backdropFilter: 'blur(10px)'}}>
            <Pagination
              className="pagination-bar transparentWrap"
              currentPage={currentPage}
              totalCount={poolStakesData.length}
              pageSize={PageSize}
              onPageChange={(page:any) => setCurrentPage(page)}
            />
          </div>
        )}
      </div>
    </section>
  );
}
