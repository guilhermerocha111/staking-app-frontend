import Card from "../Card";
import Button from "../Button";
import Overlay from "../Overlay";
import { useState, useContext, useEffect, useMemo } from "react";
import { Context } from '../../contextStore';
import { useWeb3React } from "@web3-react/core";
import ApiClient from "../../api/ApiClient";
import moment from "moment";
import Pagination from '../Pagination/Pagination';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface rewardItem {
  asset_id: string;
  claim_address: string;
  reciever_address: string;
  timestamp: number;
}

export default function IngameRewards() {
//   const [filter, setFilter] = useState<string>("");
//   const [sort, setSort] = useState<string>("");
  const [{telemetry_rewards, telemetry_assets}, ACTION] = useContext(Context);
  const [telemetryRewards, setTelemetryRewards] = useState([])
  const [showCollapsed, setCollapsed] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [showFilterContent, setShowFilterContent] = useState<string[]>([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [telemetryRewardsData, setTelemetryRewardsData] = useState([]);
  const [minDateTimestamp, setMinDateTimestamp] = useState(0);
  const [maxDateTimestamp, setMaxDateTimestamp] = useState(0);
  const [activeFilters, setActiveFilters] = useState({
    timestamp: [startDate, endDate],
    filters: ['']
  })

  let PageSize = 10;

  const { account, active } = useWeb3React();

  const handleGetRewards = async () => {
      if (account) {
        const response = await new ApiClient().getTelemetryRewards(account)
        ACTION.SET_TELEMETRY_REWARDS(response.sort((a: any, b: any) => b.timestamp - a.timestamp))
      }
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    console.log(telemetryRewards.slice(firstPageIndex, lastPageIndex).reverse())
    return telemetryRewards.slice(firstPageIndex, lastPageIndex).reverse();
  }, [currentPage, telemetryRewards]);

  useEffect(() => {
    if (telemetryRewards.length > 0) {
      setCurrentPage(1)
    }
  }, [telemetryRewards])

  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  }

  useEffect(() => {
    if (account) {
        handleGetRewards()
    }
  }, [account])

  useEffect(() => {
    if (telemetry_rewards) {

      const groupByDate:any = [];
      let minDate = 100000000000000000;
      let maxDate = 0;

      console.log(telemetry_rewards)

      telemetry_rewards.forEach((reward: rewardItem) => {
        let key = moment(reward.timestamp).format('llll').replaceAll(' ', '_');
        if (reward.timestamp < minDate) {
          minDate = reward.timestamp;
        }

        if (reward.timestamp > maxDate) {
          maxDate = reward.timestamp
        }
        
        const dataMock = {
          timestamp: key,
          items: [ reward ]
        }

        if (groupByDate.filter((item:any) => item.timestamp === key).length) {
          let itemIndex = groupByDate.findIndex((groupItem:any) => groupItem.timestamp === key);
          groupByDate[itemIndex].items.push(reward)
        } else {
          groupByDate.push(dataMock);
        }
      })
      setMinDateTimestamp(minDate);
      setMaxDateTimestamp(maxDate);
      setTelemetryRewards(groupByDate)
      setTelemetryRewardsData(groupByDate)
    }
    

  }, [telemetry_rewards])

  const handleToggleCollapsed = (group: string) => {
    if (showCollapsed.includes(group)) {
      setCollapsed(showCollapsed.filter((item: string) => item !== group))
    } else {
      setCollapsed([...showCollapsed, group])
    }
  }

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  }

  const renderContent = () => {
      const contextJSX = []
      for (let group in currentTableData) {
        contextJSX.push((
          <>
          <tr>
              <td>
                  <Button className="gradient-2 button-3 border border-design-blue !py-2 max-w-[144px]" onClick={() => handleToggleCollapsed(group)}>{
                    showCollapsed.includes(group) ? 'Hide' : 'Show'
                  }</Button>
              </td>
              <td style={{fontSize: '14px'}}>
                <img src="/images/telemetry1.png" style={{width: '16px', height: '16px', borderRadius: '4px'}} /> INGAME / Hidden Data
              </td>
              <td>
                <img src="/images/enjin.png" style={{width: '16px', height: '16px', borderRadius: '4px'}} /> Enjin JumpNet
              </td>
              <td>
                
              </td>
              <td>
                  
                  {// @ts-ignore
                    currentTableData[group].items.length
                  } items
              </td>
              <td>
                {// @ts-ignore
                `${currentTableData[group].items[0].claim_address?.substr(0, 6)}...${currentTableData[group].items[0].claim_address?.substr(-4)}`}
                {/* @ts-ignore */}
                <img src="/images/copy.png" className="cursor-pointer" onClick={() => copyAddress(currentTableData[group].items[0].claim_address)} />
              </td>
              <td>
                {// @ts-ignore
                `${currentTableData[group].items[0].reciever_address?.substr(0, 6)}...${currentTableData[group].items[0].reciever_address?.substr(-4)}`}
                {/* @ts-ignore */}
                <img src="/images/copy.png" className="cursor-pointer" onClick={() => copyAddress(currentTableData[group].items[0].reciever_address)} />
              </td>
              {/* @ts-ignore */}
              <td>{moment(currentTableData[group].timestamp.replaceAll('_', ' ')).utc().format("MM/DD/YYYY HH:mm")} UTC {}</td>
              
          </tr>
          <tbody style={{maxHeight: '180px', overflow: 'auto', display: 'block'}}>{showCollapsed.includes(group) ? (
            // @ts-ignore
            currentTableData[group].items.map((item: any, index: number, array) => (
              <tr key={index}>
                <td>
                 
                </td>
                <td>
                    
                </td>
                <td>
                    
                </td>
                <td>
                  FT Reward 
                </td>
                <td>
                  <img src={telemetry_assets[item.asset_id]?.image} style={{width: '24px', height: '24px', borderRadius: '4px'}}/>
                    {telemetry_assets[item.asset_id]?.name}
                </td>
                <td></td>
               
              </tr>
            ))
          ) : null}</tbody>
          </>
        ))
      }

      return contextJSX.reverse()
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

  useEffect(() => {
    const filteredTelemetries = telemetryRewardsData.filter(telemetry => {
      //@ts-ignore
      let date = new Date(telemetry.timestamp.replaceAll('_', ' '))
      return (date >= startDate && date <= endDate);
    })
    setTelemetryRewards(filteredTelemetries)
  }, [startDate, endDate])
  
  const onToggleCalendar = () => {
    setShowCalendar(!showCalendar)
  }

  const clearFilters = () => {
    setTelemetryRewards(telemetryRewardsData);
    setStartDate(new Date(minDateTimestamp))
    setEndDate(new Date(maxDateTimestamp))
  }

  const handleChangeFilters = (filterType: string, filterValue: string) => {
    let filterKey = `${filterType}_${filterValue}`;
    //@ts-ignore
    if (activeFilters.filters.includes(filterKey)) {
      let filteredRow = activeFilters.filters.filter(e => e !== filterKey)
      setActiveFilters({
        ...activeFilters,
        filters: filteredRow
      })
    } else {
      setActiveFilters({
        ...activeFilters,
        //@ts-ignore
        filters: [...activeFilters.filters, filterKey]
      })
    }
  }

  return (
    <section className="max-w-screen-2xl mx-auto mt-8" id="log">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
        <div style={{width: '100%'}}>
          <h1 className="section-heading-1">
            <img src="/images/icons/blank.svg" alt="" /> Ingame Rewards Log
          </h1>
          <p className="flex items-center gap-2 mt-4">
            <button className="tag-1 tagBg">
              Enjin <img src="/images/enjin.png" alt="" />
            </button>
            <span>View your claimed ingame rewards</span>
            {(telemetry_rewards.length > 0) && (
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
                              <input type="checkbox" checked={activeFilters.filters.includes('pool_ingame')} onClick={() => handleChangeFilters('pool', 'ingame')} />
                            </div>
                            <div className="flexCenter">
                              <img src="/images/telemetry1.png"  style={{width: '16px', height: '16px', borderRadius: '4px', margin: "0 8px"}} />
                              INGAME / Hidden Data
                            </div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div>
                    <div className="filterLabel" onClick={() => handleShowFilterContent('network')}>Network <div className={showFilterContent.includes('network') ? "arrowFilter up" : "arrowFilter down"}/></div>
                    {
                      showFilterContent.includes('network') && (
                        <div className="filterContent">
                          <div className="filterContent__row">
                            <div>
                              <input type="checkbox" checked={activeFilters.filters.includes('network_enjin')} onClick={() => handleChangeFilters('network', 'enjin')} />
                            </div>
                            <div className="flexCenter">
                              <img src="/images/enjin.png"  style={{width: '16px', height: '16px', borderRadius: '4px', margin: "0 8px"}} />
                              Enjin JumpNet
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
                            <div style={{marginRight: '8px'}}>
                              <input type="checkbox" checked={activeFilters.filters.includes('type_ft')} onClick={() => handleChangeFilters('type', 'ft')} />
                            </div>
                            <div className="flexCenter">
                              FT
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
            )}
          </p>
        </div>
      </div>
      <div className="mt-9 flex-1 tableBg relative">
        <Card className="card-1rewards !pb-2 overflow-auto w-full empty-vesting relative transparentWrap" noCard>
        {(!telemetry_rewards.length || !active) && (
            <Overlay>You have not connected your wallet or claimed any rewards yet.</Overlay>
          )}
          <table
            className="text-sm grid grid-cols-1 telemetry-rewards-table"
            style={{
              minWidth: "1200px",
              display: !active ? 'none' : 'grid',
              gridAutoColumns: 'auto'
            }}
          >
            <thead className="grid grid-cols-1 tableHeader transparentWrap" style={{position: 'sticky', top: '0'}}>
              <tr className="text-left !border-b">
                <th>Action</th>
                <th>Pool</th>
                <th>Network</th>
                <th>Type</th>
                <th>Reward</th>
                <th>Claimant Wallet</th>
                <th>Receiver Wallet</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody className="text-base">
              {
                currentTableData.length > 0 && (
                    renderContent()
                )
              }
            </tbody>
          </table>
        </Card>
        {telemetry_rewards.length > 0 && (
          <div className="card-pagination rounded-b-lg pt-2 pb-2 transparentWrap absolute">
          <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={telemetryRewards.length}
                pageSize={PageSize}
                onPageChange={(page:any) => setCurrentPage(page)}
            />
          </div>
        )}
      </div>
    </section>
  );
}
