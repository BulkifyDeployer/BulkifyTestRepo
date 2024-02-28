import { init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
import gnosisModule from "@web3-onboard/gnosis";
import coinbaseModule from "@web3-onboard/coinbase";
import logo from 'assets/icons/117.svg'

import {
  onboardApiKey,
  walletConnectProjectId,
  chainInfoList,
  providerUrlsTable,
} from "utils";

const injected = injectedModule();
const gnosis = gnosisModule();
const walletConnect = walletConnectModule({
  projectId: walletConnectProjectId,
  version: 2,
});
const coinbase = coinbaseModule();

export function onboardInit() {
  return init({
    apiKey: onboardApiKey,
    wallets: [injected, coinbase, walletConnect, gnosis],

    chains: chainInfoList.map((chainInfo) => ({
      id: chainInfo.chainId,
      label: chainInfo.fullName || chainInfo.name,
      token: chainInfo.nativeCurrencySymbol,
      rpcUrl: chainInfo.rpcUrl || providerUrlsTable[chainInfo.chainId],
    })),

    appMetadata: {
      name: "Bulkify Send",
      icon: logo,
      description:
        "Bulkify is the fastest, cheapest and most secure cross-chain batch transfer for Ethereum, Arbitrum, Optimism, Polygon and other Layer 1 and Layer 2 networks. Transfer tokens with Bulkify.",
      recommendedInjectedWallets: [
        { name: "Metamask", url: "https://metamask.io" },
        { name: "Coinbase", url: "https://wallet.coinbase.com/" },
        { name: "WalletConnect", url: "https://walletconnect.org/" },
        { name: "Gnosis Safe", url: "https://gnosis.safe/" },
      ],
    },
    connect: {
      autoConnectAllPreviousWallet: true
    },
    accountCenter: {
      desktop: {
        enabled: false,
      },
      mobile: {
        enabled: false,
      },
    },
    notify: {
      enabled: false,
    },
  });
}