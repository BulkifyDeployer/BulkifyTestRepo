import { useParams } from "react-router-dom";
import { useConnection, useIsWrongNetwork } from "hooks";

export const useTransferView = () => {
  const { isConnected, provider } = useConnection();
  const { isWrongNetwork, isWrongNetworkHandler } = useIsWrongNetwork();

  return {
    isWrongNetwork,
    isWrongNetworkHandler,
    isConnected,
    provider,
  }
}