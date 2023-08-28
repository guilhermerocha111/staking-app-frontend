import Card from "../Card";
import Button from "../Button";
import Overlay from "../Overlay";
import { BigNumber } from "ethers";
import toast from "react-hot-toast";
import { BiLock } from "react-icons/bi";
import { useEffect, useState, useContext } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useWeb3React } from "@web3-react/core";
import { useStaked } from "../../hooks/useStaked";
import { useVesting } from "../../hooks/useIngame";
import { Link, useLocation } from "react-router-dom";
import { usePendings } from "../../hooks/usePendings";
import { useTimeDiff } from "../../hooks/useCountdown";
import { HiOutlineExternalLink } from "react-icons/hi";
import { usePrice, TokenInfo } from "../../hooks/usePrice";
import { useVestingPanel } from "../../hooks/useVestingPanel";
import { contracts, DEFAULT_CHAINID, toHex } from "../../utils/constants";
import { useTokenBalance } from "../../hooks/useTokenBalance";
import { Context } from '../../contextStore';
import useCommon from '../../hooks/useCommon';
import { HashLink } from 'react-router-hash-link';
import Loader from '../Loader';

interface RefreshProps {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Info({ refresh, setRefresh }: RefreshProps) {
  const vestRewards = useVesting();
  const { pathname } = useLocation();
  const { locked } = useVestingPanel();
  const lpBalance = useTokenBalance("lp",refresh);
  const smcwBalance = useTokenBalance("smcw",refresh);
  const { chainId, active, account, library } = useWeb3React();
  const [isInfoOpen, setInfoOpen] = useState(false);
  const [showLocked, setShowLocked] = useState(false);
  const { smcw_Rewards, lp_rewards, total } = usePendings();
  const { smcw_staked, lp_staked, ingame_staked, smcw_staked_total, lp_staked_total } = useStaked(refresh);
  const [isTotalRewardsOpen, setTotalRewardsOpen] = useState(false);
  const { days, hours, minutes, seconds } = useTimeDiff(
    locked.length ? locked[locked.length - 1][3] : BigNumber.from("0")
  );
  const { addCommasToNumber } = useCommon();
  const [{max_apr, tokenInfo}, ACTION] = useContext(Context);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1280) {
        setTotalRewardsOpen(true);
        setInfoOpen(true);
      }
    });
    if (days > 0 || hours > 0 || minutes > 0 || seconds > 0) {
      setShowLocked(true);
    }
    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth >= 1280) {
          setTotalRewardsOpen(true);
          setInfoOpen(true);
        }
      });
    };
  }, [refresh, locked, days, hours, minutes, chainId,account]);

  const vest = async () => {
    ACTION.SET_TX_LOADER(true);
    setLoader(true);
    try {
      await vestRewards(library);
      ACTION.SET_TX_LOADER(false);
      window.location.reload();
    } catch (error: any) {
      ACTION.SET_TX_LOADER(false);
      setLoader(false);
      console.log(error.message)
      if (error.message.includes('rejected')) {
        toast.error('User rejected transaction')
      } else {
        toast.error('Execution reverted: not enough rewards. (happens when trying to claim “0” pending rewards)');
      }
    }
  };

  return (
    <section className="max-w-screen-2xl mx-auto mt-12">
      {/* Staking Pools */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <img src="/images/logo2.svg" style={{zIndex: '10'}} className="sm:hidden" />
        <div className="flex navMenu">
          <div className="text-sm flex flex-col lg:flex-row items-start lg:items-center gap-2 w-full lg:w-auto overflow-hidden">
            <HashLink
              to="/rewards"
              className={`navLink button-3 mt-3 mt-0 lg:ml-3 !w-fit whitespace-nowrap !px-6 z-10 ${window.location.href.includes('rewards') ? 'selected' : ''}`}
            >
              <img src="/images/icons/smcwlogo.svg" /> INGAME REWARDS LOG
            </HashLink>
          </div>
          <div className="text-sm flex flex-col lg:flex-row items-start lg:items-center gap-2 w-full lg:w-auto overflow-hidden">
            <Link
              to="/vesting"
              className={`navLink button-3 mt-3 mt-0 lg:ml-3 !w-fit whitespace-nowrap !px-6 z-10 ${window.location.href.includes('vesting') ? 'selected' : ''}`}
            >
              <img src="/images/icons/smcwtoken.svg" />
              CLAIM / VESTING PANEL
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col xl:flex-row gap-8 mt-6">

        <Card className="flex-1 custom-border" styles={{height: isTotalRewardsOpen ? 'auto' : 'fit-content', minHeight: '280px'}}>
          {(!active || DEFAULT_CHAINID !== toHex(chainId)) && (
            <Overlay>Connect your wallet to access this panel.</Overlay>
          )}
          <h3 className="card-heading-1">SMCW / LP Rewards</h3>
          {!isTotalRewardsOpen && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-6 mt-6">
                <div className="balance-item">
                  <h4 className="card-heading-4">Available in Wallet</h4>
                  <p className="balance-1 py-2">
                    <img src="/images/coin.png" alt="" />
                    {addCommasToNumber(Number(smcwBalance), 4)}
                  </p>
                  <p className="balance-1">
                    <img src="/images/lp.png" alt="" />
                    {addCommasToNumber(Number(lpBalance), 4)}
                  </p>
                </div>
                <div className="balance-item">
                  <h4 className="card-heading-4">Staked Tokens</h4>
                  <p className="balance-1 py-2">
                    <img src="/images/coin.png" alt="" />
                    {addCommasToNumber(Number(smcw_staked), 4)}
                  </p>
                  <p className="balance-1">
                    <img src="/images/lp.png" alt="" />
                    {addCommasToNumber(Number(lp_staked), 4)}
                  </p>
                </div>
                <div className="balance-item">
                  <h4 className="card-heading-4">Pending Rewards</h4>
                  <p className="balance-1 py-2">
                    <img src="/images/coin.png" alt="" />
                    {addCommasToNumber(Number(smcw_Rewards), 4)}
                  </p>
                  <p className="balance-1">
                    <img src="/images/coin.png" alt="" />
                    {addCommasToNumber(Number(lp_rewards), 4)}
                  </p>
                </div>
            </div>
          )}
          {
            !isTotalRewardsOpen && (
              <Button
                onClick={() => setTotalRewardsOpen(!isTotalRewardsOpen)}
                className="gradient-1 button-3 mt-[36px]"
              >
                VEST SMCW REWARDS
                <FiChevronDown />
              </Button>
            )
          }
          
          <div
            className="overflow-hidden"
            style={{
              maxHeight: isTotalRewardsOpen ? "2000px" : "0px",
            }}
          >
        {/* SMCW Rewards */}
            <div className="gradient-orange p-px mt-4">
              <div className="bg-design-background5 p-3">
              <h3 className="card-heading-3 !mb-2">
                <img src="/images/coin.png" alt="" />
                Rewards
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 ">
                  <div className="balance-item">
                    <h4 className="card-heading-4">Available in Wallet</h4>
                    <p className="balance-1">
                      <img src="/images/coin.png" alt="" />
                      {addCommasToNumber(Number(smcwBalance), 4)}
                    </p>
                  </div>
                  <div className="balance-item">
                    <h4 className="card-heading-4">Staked Tokens</h4>
                    <p className="balance-1">
                      <img src="/images/coin.png" alt="" />
                      {addCommasToNumber(Number(smcw_staked), 4)}
                    </p>
                  </div>
                  <div className="balance-item">
                    <h4 className="card-heading-4">Pending Rewards</h4>
                    <p className="balance-1">
                      <img src="/images/coin.png" alt="" />
                      {addCommasToNumber(Number(smcw_Rewards), 4)}
                    </p>
                  </div>
              </div>
              </div>
            </div>
            {/* LP Rewards */}
            <div className="gradient-1 p-px mt-4">
              <div className="bg-design-background5 py-3 px-3">
                <h3 className="card-heading-3 !mb-2">
                  <img src="/images/lp.png" alt="" />
                  Rewards
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                  <div className="balance-item">
                    <h4 className="card-heading-4">Available in Wallet</h4>
                    <p className="balance-1">
                      <img src="/images/lp.png" alt="" />
                      {addCommasToNumber(Number(lpBalance), 4)}
                    </p>
                  </div>
                  <div className="balance-item">
                    <h4 className="card-heading-4">Staked Tokens</h4>
                    <p className="balance-1">
                      <img src="/images/lp.png" alt="" />
                      {addCommasToNumber(Number(lp_staked), 4)}
                    </p>
                  </div>
                  <div className="balance-item">
                    <h4 className="card-heading-4">Pending Rewards</h4>
                    <p className="balance-1">
                      <img src="/images/coin.png" alt="" />
                      {addCommasToNumber(Number(lp_rewards), 4)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="balance-item mt-4">
              <h4 className="card-heading-4 justify-end">
                Total Pending Rewards
              </h4>
              <p className="balance-1 justify-end">
                <img src="/images/coin.png" alt="" />
                {addCommasToNumber(Number(total), 4)}
              </p>
            </div>
            <p className="mt-4 text-center lg:text-left">
              *You can claim rewards once/week. Rewards must vest for 1 month.{" "}
              <Link to="/vesting" className="external-link">
                Vesting Panel  <HiOutlineExternalLink />
              </Link>
            </p>
            {/* Todo: Add a locked state here */}
            {showLocked ? (
              <Button className="gradient-1 button-3 mt-3 cursor-not-allowed">
                <BiLock className="text-xl" /> Locked: {days}d {hours}h{" "}
                {minutes}m {seconds}s (Remaining Time)
              </Button>
            ) : (
              <Button onClick={vest} className={`gradient-1 button-3 mt-3 ${Number(total) === 0 ? 'disabled' : ''}`}>
               {loader ? 'Vesting...' : 'VEST SMCW REWARDS NOW (1 month)'}  {loader ? <Loader /> : <HiOutlineExternalLink />}
              </Button>
            )}
          </div>
          {
            isTotalRewardsOpen && (
              <Button
                onClick={() => setTotalRewardsOpen(!isTotalRewardsOpen)}
                className="gradient-5 button-3 mt-3 arrowBtn"
              >
                <FiChevronUp />
              </Button>
            )
          }
        </Card>

        {/* SMCW Info */}

        <Card className="flex-1 custom-border" styles={{height: isInfoOpen ? 'auto' : 'fit-content', minHeight: '280px', display: 'flex', flexDirection: 'column'}}>
          <h3 className="card-heading-1">Info</h3>
          <div className="flex items-start lg:items-center flex-col lg:flex-row mt-6 gap-4 max-w-full mobileInfo">
              <p className="tag-1 tagBg">
                BSC <img src="/images/Binance.png" alt="" />
              </p>
              <p className="flex items-center w-full max-w-full">
                Contract:
                <span
                  className="inline-block text-design-pink ml-3 truncate mobHidden"
                  style={{
                    maxWidth: "68%",
                  }}
                >
                  {tokenInfo?.platform?.token_address}
                </span>
                <span
                  className="inline-block text-design-pink ml-3 truncate desktopHidden"
                  style={{
                    maxWidth: "68%",
                  }}
                >
                  {`${tokenInfo?.platform?.token_address.substr(0, 6)}...${tokenInfo?.platform?.token_address.substr(-4)}`}
                </span>
                <button
                  className="min-w-fit ml-3"
                  onClick={() => {
                    window.navigator.clipboard.writeText(
                      tokenInfo?.platform?.token_address
                    );
                    toast.success("Copied to clipboard");
                  }}
                >
                  <img src="/images/copy.png" alt="" />
                </button>
              </p>
            </div>
            {!isInfoOpen && (
              <div className="grid grid-cols-1 md:grid-cols-4 mt-6 md:mt-6 mobileGrid">
              <div className="mb-4 lg:mb-0 gridItem">
                <h4 className="card-heading-4 !border-b-2 !pb-1.5 !mb-3">
                  Buy SMCW
                </h4>
                <div className="flex items-center gap-2">
                  <a
                    href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&&outputCurrency=0xb2ea51BAa12C461327d12A2069d47b30e680b69D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/icons/1.png" alt="" />
                  </a>
                  <a
                    href="https://www.huobi.com/en-us/exchange/smcw_usdt/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/icons/2.png" alt="" />
                  </a>
                  <a
                    href="https://www.mexc.com/exchange/SMCW_USDT"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/icons/3.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="mb-4 lg:mb-0 gridItem">
                <h4 className="card-heading-4 !border-b-2 !pb-1.5 !mb-3">
                  Price tracking
                </h4>
                <div className="flex items-center gap-2">
                  <a
                    href="https://coinmarketcap.com/currencies/space-misfits/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/icons/4.png" alt="" />
                  </a>
                  <a
                    href="https://www.coingecko.com/en/coins/space-misfits"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/icons/5.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="mb-4 lg:mb-0 gridItem">
                <h4 className="card-heading-4 !border-b-2 !pb-1.5 !mb-3">
                  Whitepaper
                </h4>
                <div className="flex items-center gap-2">
                  <a
                    href="https://space-misfits.gitbook.io/whitepaper/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/icons/6.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="gridItem">
                <h4 className="card-heading-4 !border-b-2 !pb-1.5 !mb-3">
                  Audit
                </h4>
                <div className="flex items-center gap-2">
                  <a
                    href="https://staking.spacemisfits.com/static/media/20220418_Paladin_SpaceMisfitsStaking_Final_Report.8ae6fb80860aeb7ca8d8.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/icons/7.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            )}
            {!isInfoOpen && (
              <Button
                onClick={() => setInfoOpen(!isInfoOpen)}
                className="gradient-2 button-3 mt-[16px] collapseBtn"
              >
                + INFO
                <FiChevronDown />
              </Button>
            )}
          <div
            className="overflow-hidden"
            style={{
              maxHeight: isInfoOpen ? "2000px" : "0px",
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
            }}
          >
            <div className="mt-8 grid grid-cols-1 gap-3">
              <div className="grid grid-cols-2 gap-1">
                <p className="text-design-grey">Total Staked in SMCW Pool</p>
                <div className="flex items-start lg:items-center mobFlexEnd">
                  <img
                    src="/images/coin.png"
                    alt=""
                    className="w-5 h-5 object-contain object-center mr-2 mt-0.5 lg:mt-0"
                  />
                  <p className="flex flex-col lg:flex-row items-start lg:items-end leading-5 ">
                    {addCommasToNumber(Number(smcw_staked_total), 4)}
                    <span className="text-design-grey text-xs mt-1 lg:mt-0 lg:ml-2">
                      ${" "}
                      {
                      addCommasToNumber(Number((
                        parseFloat(smcw_staked_total) * tokenInfo?.quote?.USD?.price
                      ).toFixed(4)), 4)}
                    </span>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <p className="text-design-grey">Total Staked in Ingame Pools</p>
                <div className="flex items-start lg:items-center mobFlexEnd">
                  <img
                    src="/images/coin.png"
                    alt=""
                    className="w-5 h-5 object-contain object-center mr-2 mt-0.5 lg:mt-0"
                  />
                  <p className="flex flex-col lg:flex-row items-start lg:items-end leading-5">
                    {addCommasToNumber(Number(ingame_staked), 4)}
                    <span className="text-design-grey text-xs mt-1 lg:mt-0 lg:ml-2">
                      ${" "}
                      {
                      addCommasToNumber(Number((
                        parseFloat(ingame_staked) * tokenInfo?.quote?.USD?.price
                      ).toFixed(4)), 4)}
                    </span>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <p className="text-design-grey">Total Staked in LP Pools</p>
                <div className="flex items-start lg:items-center mobFlexEnd">
                  <img
                    src="/images/lp.png"
                    alt=""
                    className="w-5 h-5 object-contain object-center mr-2 mt-0.5 lg:mt-0"
                  />
                  <p className="flex flex-col lg:flex-row items-start lg:items-end leading-5">
                    {addCommasToNumber(Number(lp_staked_total), 4)}
                  </p>
                </div>
              </div>
              {max_apr && (
                <div className="grid grid-cols-2 gap-1">
                  <p className="text-design-grey">Staking APR</p>
                  <div className="flex items-center mobFlexEnd">
                    <img
                      src="/images/coin.png"
                      alt=""
                      className="w-5 h-5 object-contain object-center mr-2"
                    />
                    <p className="flex items-end leading-5 gradient-3 clip-text">
                      Up to {addCommasToNumber(Number(max_apr.toFixed(0)), 0)}%
                    </p>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 gap-1">
                <p className="text-design-grey">Total Supply</p>
                <div className="flex items-center mobFlexEnd">
                  <img
                    src="/images/coin.png"
                    alt=""
                    className="w-5 h-5 object-contain object-center mr-2"
                  />
                  <p className="flex items-end leading-5">
                    {addCommasToNumber(tokenInfo?.total_supply)}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <p className="text-design-grey">Circulating Supply</p>
                <div className="flex items-center mobFlexEnd">
                  <img
                    src="/images/coin.png"
                    alt=""
                    className="w-5 h-5 object-contain object-center mr-2"
                  />
                  <p className="flex items-end leading-5">
                    {addCommasToNumber(Number(tokenInfo?.self_reported_circulating_supply.toFixed(0)), 0)}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <p className="text-design-grey">Max Supply</p>
                <div className="flex items-center mobFlexEnd">
                  <img
                    src="/images/coin.png"
                    alt=""
                    className="w-5 h-5 object-contain object-center mr-2"
                  />
                  <p className="flex items-end leading-5">
                    {addCommasToNumber(tokenInfo?.max_supply)}
                  </p>
                </div>
              </div>
            </div>
            {/* Buy */}
            <div className="grid grid-cols-1 md:grid-cols-4 mt-8 md:mt-[2.25rem] pt-6 mobileGrid" style={{marginTop: 'auto', marginBottom: '16px'}}>
              <div className="mb-4 lg:mb-0 gridItem">
                <h4 className="card-heading-4 !border-b-2 !pb-1.5 !mb-3">
                  Buy SMCW
                </h4>
                <div className="flex items-center gap-2">
                  <a
                    href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&&outputCurrency=0xb2ea51BAa12C461327d12A2069d47b30e680b69D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/icons/1.png" alt="" />
                  </a>
                  <a
                    href="https://www.huobi.com/en-us/exchange/smcw_usdt/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/icons/2.png" alt="" />
                  </a>
                  <a
                    href="https://www.mexc.com/exchange/SMCW_USDT"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/icons/3.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="mb-4 lg:mb-0 gridItem">
                <h4 className="card-heading-4 !border-b-2 !pb-1.5 !mb-3">
                  Price tracking
                </h4>
                <div className="flex items-center gap-2">
                  <a
                    href="https://coinmarketcap.com/currencies/space-misfits/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/icons/4.png" alt="" />
                  </a>
                  <a
                    href="https://www.coingecko.com/en/coins/space-misfits"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/icons/5.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="mb-4 lg:mb-0 gridItem">
                <h4 className="card-heading-4 !border-b-2 !pb-1.5 !mb-3">
                  Whitepaper
                </h4>
                <div className="flex items-center gap-2">
                  <a
                    href="https://space-misfits.gitbook.io/whitepaper/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/icons/6.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="gridItem">
                <h4 className="card-heading-4 !border-b-2 !pb-1.5 !mb-3">
                  Audit
                </h4>
                <div className="flex items-center gap-2">
                  <a
                    href="https://staking.spacemisfits.com/static/media/20220418_Paladin_SpaceMisfitsStaking_Final_Report.8ae6fb80860aeb7ca8d8.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/icons/7.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {isInfoOpen && (
              <Button
                onClick={() => setInfoOpen(!isInfoOpen)}
                className="gradient-5 button-3 mt-[auto] arrowBtn"
              >
                <FiChevronUp />
              </Button>
            )}
        </Card>
      </div>
      <div className="flex-column">
          <p className="text-design-grey whitespace-nowrap text-[24px] mt-12 mb-4">Staking pools</p>
          <div className="poolsMenu w-auto inline-flex overflow-auto card-1 !bg-transparent !border-0 lg:!border !p-0 lg:!p-1 items-center gap-3 lg:gap-0">
            <Link
              to="/"
              className={
                pathname === "/" ? "button-pools-active" : "button-pools"
              }
            >
              <img src="/images/coin.png" alt="" />
              SMCW
            </Link>
            <Link
              to="/ingame"
              className={
                pathname === "/ingame" ? "button-pools-active" : "button-pools"
              }
            >
              <img src="/images/logo.png" alt="" />
              INGAME
            </Link>
            <Link
              to="/pledge"
              className={
                pathname === "/pledge" ? "button-pools-active" : "button-pools"
              }
            >
              <img src="/images/logo.png" alt="" />
              PLEDGE
            </Link>
            <Link
              to="/"
              className="button-pools opacity-50 pointer-events-none"
            >
              <img src="/images/handshake.png" alt="" />
              PARTNER
            </Link>
            <Link
              to="/"
              className="button-pools opacity-50 pointer-events-none"
            >
              <img src="/images/star.png" alt="" />
              EVENTS
            </Link>
          </div>
      </div>
    </section>
  );
}
