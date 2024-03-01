import { useEffect, useState } from "react";
import { useConnection, useIsWrongNetwork } from "hooks";

export const useTransferView = () => {

  const { isConnected, provider, chainId, account } = useConnection();
  const { isWrongNetwork, isWrongNetworkHandler } = useIsWrongNetwork(chainId);


  return {
    isWrongNetwork,
    isWrongNetworkHandler,
    isConnected,
    provider,

  }
}