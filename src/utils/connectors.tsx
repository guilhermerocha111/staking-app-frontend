import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { ethers, Signer } from "ethers";

const injected = new InjectedConnector({
  supportedChainIds: [5],
});

const walletconnect = new WalletConnectConnector({
  qrcode: true,
  bridge: "https://bridge.walletconnect.org",
  infuraId: process.env.REACT_APP_INFURA_KEY,
});

export const connectors = {
  injected: injected,
  walletConnect: walletconnect,
};

export const getSigner = async (library: any): Promise<Signer> => {
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
  "0x61": {
    chainId: "0x61",
    rpcUrls: [`https://data-seed-prebsc-1-s1.binance.org:8545`],
    chainName: "Binance Smart Chain Testnet",
    nativeCurrency: { name: "tBNB", decimals: 18, symbol: "tBNB" },
    blockExplorerUrls: ["https://testnet.bscscan.com"],
  },
  "0x5": {
    chainId: "0x5",
    rpcUrls: [`https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`],
    chainName: "Goerli Test Network",
    nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
    blockExplorerUrls: ["https://goerli.etherscan.io"],
  },
};
