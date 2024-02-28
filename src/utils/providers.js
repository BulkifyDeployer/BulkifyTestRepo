import { ethers, providers } from "ethers";
import { hubPoolChainId, ChainId, infuraId, chainInfoTable } from "./constants";

function getInfuraProviderUrl(chainId) {
  try {
    return new providers.InfuraProvider(chainId, infuraId).connection.url;
  } catch (e) {
    return undefined;
  }
}

function getProviderUrl(chainId) {
  const resolvedRpcUrl =
    chainInfoTable[chainId]?.customRpcUrl ||
    getInfuraProviderUrl(chainId) ||
    chainInfoTable[chainId]?.rpcUrl;
  if (resolvedRpcUrl) {
    return resolvedRpcUrl;
  } else {
    throw new Error(`No provider URL found for chainId ${chainId}`);
  }
}

export const providersTable = Object.values(ChainId)
  .filter((c) => !Number.isNaN(Number(c)))
  .reduce(
    (acc, v) => ({
      ...acc,
      [Number(v)]: new ethers.providers.StaticJsonRpcProvider(
        getProviderUrl(Number(v)),
        Number(v)
      ),
    }),
    {}
  );

export const providerUrlsTable = Object.fromEntries(
  Object.entries(providersTable).map(([k, v]) => [k, v.connection.url])
);

export function getProvider(
  chainId
) {
  return providersTable[chainId];
}
