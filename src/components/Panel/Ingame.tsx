import IngameStaking1 from "../IngameStaking1";
import IngameStaking2 from "../IngameStaking2";

export default function Ingame() {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <h1 className="section-heading-1">
        <img src="/images/logo.png" alt="" /> INGAME
      </h1>
      <p className="flex items-center gap-2 mt-4">
        <button className="tag-1 tagBg">
          BSC <img src="/images/Binance.png" alt="" />
        </button>
        Stake SMCW and earn ingame rewards
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-9">
        {/* <IngameStaking1
          MIN_STAKE_AMOUNT={5000}
          MAX_STAKE_AMOUNT={100000}
          pool_address={process.env.REACT_APP_NFTSTAKING_CONTRACT_ADDRESS_GOERLI}
          pool_key="smcw_to_nft"
          pool_label="[OLD]"
        /> */}

        <IngameStaking1
          MIN_STAKE_AMOUNT={5000}
          MAX_STAKE_AMOUNT={100000}
          pool_address={process.env.REACT_APP_NFTSTAKING_CONTRACT_ADDRESS_GOERLI}
          pool_key="smcw_to_nft"
          pool_label=""
        />
        {/* <IngameStaking2
          title="Santa’s Sleigh - Fighter Skin - 2021"
          remaining={125}
          image="/images/icons/game2.png"
        />
        <IngameStaking2
          title="Example NFT - MSFT-X"
          remaining={20}
          image="/images/icons/msftx.png"
          locked
        /> */}
      </div>
    </section>
  );
}
