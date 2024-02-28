import { utils } from "ethers";
import { getProvider } from "./providers";

export function isValidAddress(address) {
  return utils.isAddress(address);
}

export function getAddress(address) {
  return utils.getAddress(address);
}

export const noContractCode = "0x";
export async function getCode(address, chainId) {
  const provider = getProvider(chainId);
  return await provider.getCode(address);
}
