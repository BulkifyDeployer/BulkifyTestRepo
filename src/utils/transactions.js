import {
  fixedPointAdjustment,
  gasMultiplierPerChain,
  hubPoolChainId,
} from "./constants";
import { Contract, ContractTransaction, Signer, providers } from "./ethers";
import { parseUnits } from "./format";

/**
 * This function takes a raw transaction and a signer and returns the result of signing the transaction.
 * @param tx The raw transaction to sign.
 * @param signer A signer used to sign the transaction
 * @returns The raw transaction signed by the given `signer`.
 */
export function signTransaction(
  rawTx,
  signer
) {
  //TODO: here is where we might do safety checks on the transaction
  return signer.signTransaction(rawTx);
}

export async function sendSignedTransaction(
  signedTx,
  provider
) {
  const tx = await provider.sendTransaction(signedTx);
  return tx;
}

export function isValidTxHash(txHash) {
  return new RegExp(/^0x([A-Fa-f0-9]{64})$/).test(txHash);
}