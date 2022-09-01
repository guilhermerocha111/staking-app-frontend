import Card from "../Card";
import Button from "../Button";
import Overlay from "../Overlay";
import { useState, useContext, useEffect } from "react";
import { Context } from '../../contextStore';
import { useWeb3React } from "@web3-react/core";
import ApiClient from "../../api/ApiClient";
import { TELEMETRY_ASSETS } from "../../utils/constants";
import moment from "moment";


export default function Vesting() {
//   const [filter, setFilter] = useState<string>("");
//   const [sort, setSort] = useState<string>("");
  const [{telemetry_rewards}, ACTION] = useContext(Context);

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


  return (
    <section className="max-w-screen-2xl mx-auto mt-12">
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
            className="text-sm grid grid-cols-1 rewards-table"
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
              {telemetry_rewards.map((item: any, index: number) => (
                <tr key={index}>
                  <td>
                    FT Reward
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
                  <td>{moment(item.timestamp).format("MMM Do YY")}</td>
                  <td>
                      <Button className="gradient-2 button-3 border border-design-blue !py-2">Action</Button>
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
