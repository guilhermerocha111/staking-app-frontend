import IngameStaking1 from '../components/IngameStaking1'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from "../components/Button"
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../utils/connectors";
import { Web3ReactProvider } from '@web3-react/core'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from "@ethersproject/providers";
import { ethers } from "ethers";
import {ContextProvider} from "../contextStore";
import IngameStakingDoc from "./docs/IngameStakingDoc.mdx"

const getLibrary = (provider:ExternalProvider | JsonRpcFetchFunc) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Staking',
    component: IngameStaking1,
    parameters: {
      docs: {
        page: IngameStakingDoc,
      },
    },
    decorators: [
      (Story) => (
        <Web3ReactProvider getLibrary={getLibrary}>
          <ContextProvider>
            <Story/>
          </ContextProvider>
        </Web3ReactProvider>
      )
    ]
  } as ComponentMeta<typeof IngameStaking1>;

const Template: ComponentStory<typeof IngameStaking1> = () => {
  const { activate, deactivate, active, library, connector } = useWeb3React();

  const connect = async (type: string | null) => {
    switch (type) {
      case "metamask":
        activate(connectors.injected);
        localStorage.setItem("isConnected", "true");
        localStorage.setItem("connector", "metamask");
        break;
      case "walletconnect":
        activate(connectors.injected);
        localStorage.setItem("isConnected", "true");
        localStorage.setItem("connector", "walletconnect");
        break;
      default:
        break;
    }
    await connector?.activate();
  };

  

  return (
    <>
      
      {!active && (
            <Button
              className="button-1 !rounded-md"
              onClick={() => connect("metamask")}
            >
              <img src="/images/Metamask.png" alt="" />
              Connect to Metamask
            </Button>
      )}
      {active && (
        <IngameStaking1 />
      )}
    </>
  )
};

export const IngameStaking = Template.bind({});
