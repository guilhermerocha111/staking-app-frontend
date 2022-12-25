import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Web3ReactProvider } from '@web3-react/core'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from "@ethersproject/providers";
// import { ethers } from "ethers";
import {ContextProvider} from "./contextStore";
// import reportWebVitals from './reportWebVitals';



const getLibrary = (provider:ExternalProvider | JsonRpcFetchFunc | any) => {
  provider.pollingInterval = 30000;
  const library = new Web3Provider(provider);
  provider.pollingInterval = 30000;
  console.log('getLibrary')
  library.pollingInterval = 30000; // frequency provider is polling
  return library;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Web3ReactProvider getLibrary={getLibrary}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Web3ReactProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
