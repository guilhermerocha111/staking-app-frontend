import { useEffect, useState, useContext, useCallback } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import SMCW from "./components/Panel/SMCW";
import { Route, Routes } from "react-router-dom";
import Ingame from "./components/Panel/Ingame";
import Vesting from "./components/Panel/Vesting";
import { useWeb3React } from "@web3-react/core";
import { contracts, DEFAULT_CHAINID, toHex } from "./utils/constants";
import { chains } from "./utils/connectors";
import Modal from "react-modal";
import ApiClient from "./api/ApiClient";
import {Context} from "./contextStore";
import IngameRewards from './components/Panel/IngameRewards'
import { tokens } from "./utils/contracts";
import { getSigner } from "./utils/connectors";
import { BigNumber } from "ethers";
import { HashLink } from 'react-router-hash-link';
import { HiOutlineExternalLink } from "react-icons/hi";

export default function App() {
  const [refresh,setRefresh] = useState(false);
  const {active ,chainId , library, account } = useWeb3React();
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [mintRewards, setMintRewards] = useState<any[]>([]);
  const [{telemetry_assets, telemetry_rewards_by_tx, allowance}, ACTION] = useContext(Context);
  const [activeInterval, setActiveInterval] = useState<any>(null)

  const modalStyles = 
        {
            content: {
                maxWidth: mintRewards.length === 1 ? '565px' : '743px',
                maxHeight: mintRewards.length === 1 ? '326px' : '420px',
                overflow: 'hidden',
                background: '#11172C',
                borderColor: '#11172C',
                padding: '24px',
                borderRadius: '24px'
            }
        }

  const onCloseModal = () => {
    setShowRewardModal(false);
    ACTION.SET_REWARDS(null);
  }

  const getTelemetryInfo = (id: any) => {
    return telemetry_assets[id]
  }

  if(active){
    library.on('chainChanged',async (chainId:string|number)=>{
      if( chainId != DEFAULT_CHAINID){
        await switchNetwork()
      }
    })
  }

  const getTelemetryAssets = async () => {
    const telemetryAssets = await new ApiClient().getTelemetryAssets()
    ACTION.SET_TELEMETRY_ASSETS(telemetryAssets)
  }

  const getLpInfo = async () => {
    let lpInfo = await new ApiClient().getAPR()
    ACTION.SET_LP_INFO(lpInfo)
  }
  

  const getPrice = useCallback(async () => {
    const res = await new ApiClient().getPriceSMCW();
    // @ts-ignore
    if (res?.status !== false) {
      ACTION.SET_PRICE({...res});
    }
  }, []);

  useEffect(() => {
    if (telemetry_assets.length === 0) {
      getTelemetryAssets()
    }
  }, [telemetry_assets])

  useEffect(() => {
    getPrice();
  }, [getPrice])

  useEffect(() => {
    if (library) {
      library.pollingInterval = 30000;
    }
  }, [library])

  const parseRewards = async () => {
    const response = telemetry_rewards_by_tx
      console.log(response)
      if (response && response.isMint && response.wallet === account) {
        const mintRewards: any[] = []
        response.rewards.forEach((id: string)=> {
            if (!mintRewards.some(e => e.id === id)) {
                console.log(id)
                mintRewards.push({id: id, quantity: 1})
            } else {
                let index = mintRewards.findIndex(el => el.id === id)
                mintRewards[index].quantity +=1
            }
        })
        if (account) {
          const rewardsResponse = await new ApiClient().getTelemetryRewards(account)
          ACTION.SET_TELEMETRY_REWARDS(rewardsResponse)
        }
        setMintRewards(mintRewards);
        setShowRewardModal(true);
      }
  }

  useEffect(() => {
    parseRewards() 
  }, [account, telemetry_rewards_by_tx])

  const checkAndSetAllowances = () => {
    console.log(process.env)
      const interval = setInterval(async () => {
        console.log('interval')
        const pools = [
          {
            stakingType: 'smcw',
            pool: contracts[DEFAULT_CHAINID].smcwTosmcw,
            key: 'smcw_to_smcw'
          },
          {
            stakingType: 'lp',
            pool: contracts[DEFAULT_CHAINID].lpTosmcw,
            key: 'lp_to_smcw'
          },
          {
            stakingType: 'smcw',
            pool: contracts[DEFAULT_CHAINID].nftStaking,
            key: 'smcw_to_nft'
          },
          // {
          //   stakingType: 'smcw',
          //   pool: process.env.REACT_APP_NFTSTAKING_NEW_CONTRACT_ADDRESS_GOERLI,
          //   key: 'smcw_to_nft_new'
          // }
        ]
  
        const allowances = {}
  
        for (let i=0; i<pools.length; i++) {
          const signer = await getSigner(library);
          const token = tokens[pools[i].stakingType](signer);
          const allowanceToken = await token.allowance(
            await signer.getAddress(),
            pools[i].pool
          );
          if (allowanceToken.eq(BigNumber.from(0))) {
            // @ts-ignore
            allowances[pools[i].key] = false
          } else {
            // @ts-ignore
            allowances[pools[i].key] = true
          }
        }
        ACTION.SET_ALLOWANCE(allowances)
      }, 5000)

      setActiveInterval(interval)
  }

  useEffect(() => {
    if (account && library) {
      checkAndSetAllowances()
    }
  }, [account, library])

  useEffect(() => {
    if (allowance.smcw_to_nft !== null && allowance.smcw_to_smcw !== null && allowance.lp_to_smcw !== null) {
      clearInterval(activeInterval)
    }
  }, [allowance])

  useEffect(() => {
    getLpInfo()
  }, [])
    
  useEffect(()=>{
    if(chainId !== undefined && toHex(chainId) !== DEFAULT_CHAINID){
     switchNetwork().then()
    }
  },[chainId])

  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: DEFAULT_CHAINID}],
      });
    } catch (switchError: any) {
      // 4902 error code indicates the chain is missing on the wallet
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [chains[DEFAULT_CHAINID]],
          });
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  return (
    <div className="bg-design-background text-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home refresh={refresh} setRefresh={setRefresh} />}>
          <Route path="/" element={<SMCW refresh={refresh} setRefresh={setRefresh} />} />
          <Route path="/ingame" element={<Ingame  />} />
          <Route path="/vesting" element={<Vesting/>} />
          <Route path="/rewards" element={<IngameRewards />} />
        </Route>
      </Routes>
      <Toaster
        toastOptions={{
          style: {
            background: "#5E0835",
            color: "#fff",
            border: "1px solid #E71383",
            borderRadius: 0,
            padding: "5px"
          },
        }}
      />
      <Modal isOpen={showRewardModal} onRequestClose={onCloseModal} style={modalStyles}> 
          <img className="closeModalBtn" onClick={onCloseModal} src="/images/icons/closeModal.svg" alt="Close" />
          <div className="modal-title"><img src="/images/icons/congrat.svg"/>Congratulations!  Here are your rewards:</div>
          <div className={`rewardsList ${mintRewards.length === 1 ? 'single' : ''}`} style={{justifyContent: mintRewards.length < 3 ? 'flex-start' : 'space-between'}}>
            {mintRewards.length > 0 && mintRewards.map((reward) => 
              (
                <div className={`telemetryCard ${mintRewards.length === 1 ? 'single' : ''}`} style={{marginRight: mintRewards.length < 3 ? '46px' : '0'}}>
                    <div className={'rewardImgWrapper'}>
                      <img src={getTelemetryInfo(reward.id)?.image} />
                      <div className={'rewardQuantity'}>x{reward.quantity}</div>
                    </div>
                    <div>{getTelemetryInfo(reward.id)?.name}</div>
                </div>
              )
            )}
          </div>
          <HashLink
              to="/rewards"
              className={`navLink popupNavBtn button-3 mt-3 lg:mt-0 lg:ml-3 !w-fit whitespace-nowrap !px-6 z-10`}
              onClick={onCloseModal}
            >
              INGAME REWARDS LOG <HiOutlineExternalLink />
          </HashLink>
      </Modal>
    </div>
  );
}
