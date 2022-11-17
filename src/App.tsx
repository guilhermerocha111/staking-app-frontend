import { useEffect, useState, useContext } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import SMCW from "./components/Panel/SMCW";
import { Route, Routes } from "react-router-dom";
import Ingame from "./components/Panel/Ingame";
import Vesting from "./components/Panel/Vesting";
import { useWeb3React } from "@web3-react/core";
import {  DEFAULT_CHAINID, toHex } from "./utils/constants";
import { chains } from "./utils/connectors";
import { wsClient } from './api/wsClient';
import Modal from "react-modal";
import { TELEMETRY_ASSETS } from "./utils/constants";
import ApiClient from "./api/ApiClient";
import {Context} from "./contextStore";
import IngameRewards from './components/Panel/IngameRewards'
import loaderGif from './static/preloader.gif';
import Button from "./components/Button";

export default function App() {
  const [refresh,setRefresh] = useState(false);
  const {active ,chainId , library, account } = useWeb3React();
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [mintRewards, setMintRewards] = useState<any[]>([]);
  const [{tx_loader}, ACTION] = useContext(Context);

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
  }

  const getTelemetryInfo = (id: any) => {
    return TELEMETRY_ASSETS.find(telemetry => telemetry.id === id)
  }

  if(active){
    library.on('chainChanged',async (chainId:string|number)=>{
      if( chainId != DEFAULT_CHAINID){
        await switchNetwork()
      }
    })
  }

  useEffect(() => {
    wsClient.onmessage = async (message) => {
      const response = JSON.parse(String(message?.data))
      if (response.isMint && response.wallet === account) {
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
    };
  }, [account])
    
  useEffect(()=>{
    if(chainId !== undefined && toHex(chainId) !== DEFAULT_CHAINID){
     switchNetwork().then()
    }
  },[chainId])

  useEffect(() => {
    if (tx_loader) {
      document.querySelector('body')?.classList.add('collapsed')
    } else {
      document.querySelector('body')?.classList.remove('collapsed')
    }
  }, [tx_loader])

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
      <div
        className="max-w-screen-2xl mx-auto pt-12"
        style={{zIndex: 2, position: 'relative'}}
      >
        <div className="flex items-center text-sm font-semibold justify-between gap-4 py-3">
          <a href="/">
            <img
              src="/images/logo2.png"
              alt=""
              className="hidden lg:block h-14"
            />
          </a>
        </div>
      </div>
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
            background: "#11172C",
            color: "#fff",
            border: "1px solid #2966F5",
          },
        }}
      />
      <Modal isOpen={showRewardModal} onRequestClose={onCloseModal} style={modalStyles}> 
          <div className="modal-title"><img src="/images/icons/congrat.svg"/>Congratulations!  Here are your rewards:</div>
          <div className={`rewardsList ${mintRewards.length === 1 ? 'single' : ''}`} style={{justifyContent: mintRewards.length < 3 ? 'flex-start' : 'space-between'}}>
            {mintRewards.length > 0 && mintRewards.map((reward) => 
              (
                <div className={`telemetryCard ${mintRewards.length === 1 ? 'single' : ''}`} style={{marginRight: mintRewards.length < 3 ? '46px' : '0'}}>
                    <div className={'rewardImgWrapper'}>
                      <img src={getTelemetryInfo(reward.id)?.image} />
                      <div className={'rewardQuantity'}>x{reward.quantity}</div>
                    </div>
                    <div>{getTelemetryInfo(reward.id)?.label}</div>
                </div>
              )
            )}
          </div>
      </Modal>
      {tx_loader && (
        <div className={'loaderWrapper'}>
          <img src={loaderGif} />
        </div>
      )}
    </div>
  );
}
