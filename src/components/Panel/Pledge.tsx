import FleetPledgePool from "../FleetPledgePool";

import { contracts, DEFAULT_CHAINID, toHex } from "../../utils/constants";

export default function Pledge() {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <h1 className="section-heading-1">
        <img src="/images/logo.png" alt="" /> PLEDGE
      </h1>
      <p className="flex items-center gap-2 mt-4">
        <button className="tag-1 tagBg">
          BSC <img src="/images/Binance.png" alt="" />
        </button>
        Pledge SMCW and unlock exclusive rewards
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-9">
        <FleetPledgePool
          MIN_STAKE_AMOUNT={5000}
          MAX_STAKE_AMOUNT={100000}
          pool_address={contracts[DEFAULT_CHAINID].pledgeStaking}
          pool_key="smcw_to_pledge"
          pool_label="Fleet Pledge Pool"
        />
      </div>
    </section>
  );
}
