import Staking from '../components/Staking'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useApr } from "../hooks/useApr";
import { contracts, DEFAULT_CHAINID } from "../utils/constants";
import { getStakingPool01 } from "../utils/contracts";
import { useSigner } from "../hooks/useSigner";
import { useState } from 'react';
import Button from "../components/Button"
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../utils/connectors";
import { Web3ReactProvider } from '@web3-react/core'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from "@ethersproject/providers";
import { ethers } from "ethers";
import {ContextProvider} from "../contextStore";
import StakingDoc from "./docs/StakingDoc.mdx"

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
    component: Staking,
    parameters: {
      docs: {
        page: StakingDoc,
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
  } as ComponentMeta<typeof Staking>;

const Template: ComponentStory<typeof Staking> = (args) => {
  const signer = useSigner();
  const { swcw, pool1Avarage } = useApr();
  const pool1 = getStakingPool01(signer);
  const [refresh,setRefresh] = useState(false);
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
        <Staking {...args} apr={swcw} pool={pool1} avarage={pool1Avarage} poolAddress={contracts[DEFAULT_CHAINID].smcwTosmcw} refresh={refresh} setRefresh={setRefresh}/>
      )}
    </>
  )
};

export const SingleStaking = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SingleStaking.args = {
  title:"SMCW Staking",
  defaultAmount:"0.0",
  stakingType:"smcw",
};