import { useMemo } from "react";
import { useQuery } from "react-query";
import { getChainInfo, getProvider } from "utils";

export function useTransaction(chainId, txHash) {
  const provider = useMemo(
    () => (chainId ? getProvider(chainId) : undefined),
    [chainId]
  );

  const explorerUrl = txHash
    ? getChainInfo(chainId).constructExplorerLink(txHash)
    : undefined;

  const query = useQuery(
    ["transaction-tracking", txHash],
    () => getTransactionReceipt(txHash, provider),
    {
      enabled: !!txHash && !!provider,
      refetchInterval: 5000,
    }
  );

  return {
    receipt: query.data?.receipt,
    explorerUrl,
    ...query,
  };
}

async function getTransactionReceipt(tx, provider) {
  const receipt = await provider.getTransactionReceipt(tx);
  return { receipt };
}
