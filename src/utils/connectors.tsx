import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { ethers, Signer } from "ethers";

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 80001, 57, 97],
});

const walletconnect = new WalletConnectConnector({
  qrcode: true,
  bridge: "https://bridge.walletconnect.org",
  rpc: { 3: `https://ropsten.infura.io/v3/4913daa7178a4c77823ddea002c39d00` },
});

export const connectors = {
  injected: injected,
  walletConnect: walletconnect,
};

export const getSigner = async (library: any): Promise<Signer> => {
   if (!library) {
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
  "0x3": {
    chainId: "0x3",
    rpcUrls: [`https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`],
    chainName: "Ropsten Test Network",
    nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
    blockExplorerUrls: ["https://ropsten.etherscan.io"],
  },
};
