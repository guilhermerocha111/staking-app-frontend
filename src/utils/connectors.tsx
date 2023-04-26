import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { ethers, Signer } from "ethers";

const injected = new InjectedConnector({
  supportedChainIds: [Number(process.env.REACT_APP_DEFAULT_CHAIN_ID)],
});

let walletconnect;

if (process.env.REACT_APP_IS_DEV) {
  walletconnect = new WalletConnectConnector({
    qrcode: true,
    bridge: "https://bridge.walletconnect.org",
    infuraId: process.env.REACT_APP_INFURA_KEY,
  });
} else {
  walletconnect = new WalletConnectConnector({
    qrcode: true,
    bridge: "https://bridge.walletconnect.org",
    rpc: { 0x38: "https://bsc-dataseed1.binance.org/"}
  });
}


export const connectors = {
  injected: injected,
  walletConnect: walletconnect,
};

export const getSigner = async (library: any): Promise<Signer> => {
  console.log('getSigner')
  const connectionType = localStorage.getItem('connector')
   if (connectionType === 'metamask') {
      return new ethers.providers.Web3Provider(window.ethereum, 'any').getSigner();
   } else {
    return library.getSigner();
   }
};


interface Chains {
  [key:string]:{
    chainId:string,
    rpcUrls:[string],
    chainName:string,
    nativeCurrency:{
      name:string,
      decimals:number,
      symbol:string
    },
    blockExplorerUrls:[string]
  }
}
export const chains:Chains = {
  "0x38": {
    chainId: "0x38",
    rpcUrls: [`https://bsc-dataseed1.binance.org/`],
    chainName: "Binance Smart Chain",
    nativeCurrency: { name: "BNB", decimals: 18, symbol: "BNB" },
    blockExplorerUrls: ["https://bscscan.com"],
  },
  "0x5": {
    chainId: "0x5",
    rpcUrls: [`https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`],
    chainName: "Goerli Test Network",
    nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
    blockExplorerUrls: ["https://goerli.etherscan.io"],
  },
};
