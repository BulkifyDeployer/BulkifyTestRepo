import React from "react";
import { useConnection } from "hooks";
import { shortenAddress, isSupportedChainId } from "utils";

import {
  ConnectButton,
  UnsupportedNetwork,
} from "./Wallet.styled"

export const Wallet = () => {
  const { wallet, account, ensName, isConnected, chainId, connect, disconnect } = useConnection();

  if (account && !isSupportedChainId(chainId)) {
    return (
      <UnsupportedNetwork data-cy="unsupported-network">
        Unsupported network. Please change networks.
      </UnsupportedNetwork>
    )
  }

  return isConnected ? (
    <ConnectButton onClick={() => disconnect(wallet)}>
      {ensName ?? shortenAddress(account, "..", 4)}
    </ConnectButton>
  ) : (
    <ConnectButton onClick={() => { connect() }}>
      Connect
    </ConnectButton>
  )
};