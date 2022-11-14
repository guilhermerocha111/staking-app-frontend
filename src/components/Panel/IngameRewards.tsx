import Card from "../Card";
import Button from "../Button";
import Overlay from "../Overlay";
import { useState, useContext, useEffect } from "react";
import { Context } from '../../contextStore';
import { useWeb3React } from "@web3-react/core";
import ApiClient from "../../api/ApiClient";
import { TELEMETRY_ASSETS } from "../../utils/constants";
import moment from "moment";

interface rewardItem {
  asset_id: string;
  claim_address: string;
  reciever_address: string;
  timestamp: number;
}

export default function IngameRewards() {
//   const [filter, setFilter] = useState<string>("");
//   const [sort, setSort] = useState<string>("");
  const [{telemetry_rewards}, ACTION] = useContext(Context);
  const [telemetryRewards, setTelemetryRewards] = useState({})
  const [showCollapsed, setCollapsed] = useState<any>([]);

  const { account } = useWeb3React();

  const handleGetRewards = async () => {
      if (account) {
        const response = await new ApiClient().getTelemetryRewards(account)
        ACTION.SET_TELEMETRY_REWARDS(response)
      }
  }

  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  }

  const getTelemetryInfo = (id: any) => {
    return TELEMETRY_ASSETS.find(telemetry => telemetry.id === id)
  }

  useEffect(() => {
    if (account) {
        handleGetRewards()
    }
  }, [account])

  useEffect(() => {
    if (telemetry_rewards) {
      const groupByDate = {}
      telemetry_rewards.forEach((reward: rewardItem) => {
          let key = moment(reward.timestamp).format('L');
          // @ts-ignore
          if (groupByDate[key] === undefined) {
            // @ts-ignore
            groupByDate[key] = [ reward ]
          } else {
            // @ts-ignore
            groupByDate[key] = [ ...groupByDate[key], reward ]
          }
          
          setTelemetryRewards(groupByDate)
      })

    }
    

  }, [telemetry_rewards])

  const handleToggleCollapsed = (group: string) => {
    if (showCollapsed.includes(group)) {
      setCollapsed(showCollapsed.filter((item: string) => item !== group))
    } else {
      setCollapsed([...showCollapsed, group])
    }
  }

  const renderContent = () => {
      const contextJSX = []
      for (let group in telemetryRewards) {
        contextJSX.push((
          <>
          <tr>
              <td>
                FT Reward
              </td>
              <td>
                  
                  {// @ts-ignore
                    telemetryRewards[group].length
                  } items
              </td>
              <td>
                 
              </td>
              <td>
                  
              </td>
              
              <td>{moment(group).format("MMM Do YY")}</td>
              <td>
                  <Button className="gradient-2 button-3 border border-design-blue !py-2" onClick={() => handleToggleCollapsed(group)}>{
                    showCollapsed.includes(group) ? 'Hide' : 'Show'
                  }</Button>
              </td>
          </tr>
          <>{showCollapsed.includes(group) ? (
            // @ts-ignore
            telemetryRewards[group].map((item: any, index: number) => (
              <tr key={index}>
                <td>
                  
                </td>
                <td>
                    <img src={getTelemetryInfo(item.asset_id)?.image} />
                    {getTelemetryInfo(item.asset_id)?.label}
                </td>
                <td>
                    {`${item.claim_address?.substr(0, 6)}...${item.claim_address?.substr(-4)}`}
                    <img src="/images/icons/copy.svg" className="cursor-pointer" onClick={() => copyAddress(item.claim_address)} />
                </td>
                <td>
                    {`${item.reciever_address?.substr(0, 6)}...${item.reciever_address?.substr(-4)}`}
                    <img src="/images/icons/copy.svg" className="cursor-pointer" onClick={() => copyAddress(item.reciever_address)} />
                </td>
                <td>{moment(item.timestamp).format("LT")}</td>
                <td>
                    
                </td>
              </tr>
            ))
          ) : null}</></>
        ))
      }

      return contextJSX
  }


  return (
    <section className="max-w-screen-2xl mx-auto mt-8" id="log">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
        <div>
          <h1 className="section-heading-1">
            <img src="/images/icons/blank.svg" alt="" /> Ingame Rewards Log
          </h1>
          <p className="flex items-center gap-2 mt-4">
            SMCW Staking
            <button className="tag-1">
              BSC <img src="/images/Binance.png" alt="" />
            </button>
          </p>
        </div>
      </div>
      <div className="mt-6 flex-1">
        <Card className="card-1 !pb-2 overflow-auto w-full empty-vesting">
        {!telemetry_rewards.length && (
            <Overlay>You don't have any telemetry rewards</Overlay>
          )}
          <table
            className="text-sm grid grid-cols-1 telemetry-rewards-table"
            style={{
              minWidth: "1200px",
            }}
          >
            <thead className="grid grid-cols-1">
              <tr className="text-left !border-b">
                <th>Type</th>
                <th>Reward</th>
                <th>Claimant Wallet</th>
                <th>Receiver Wallet</th>
                <th>Timestamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-base">
              {
                Object.keys(telemetryRewards).length > 0 && (
                    renderContent()
                )
              }
              
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  );
}
