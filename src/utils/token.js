import { ethers } from "ethers";
import { getProvider, getConfig, toWeiSafe, formatUnits } from "utils";

// Загружаем ABI из внешнего файла
const erc20Abi = require('../abi/erc20Abi.json');

/**
 * @param chainId The chain Id of the chain to query
 * @param account The account to query the balance of.
 * @param tokenAddress The address of the ERC20 token.
 * @param blockNumber The block number to execute the query.
 * @returns a Promise that resolves to the balance of the account
 */
export async function getBalance(
  chainId,
  account,
  tokenAddress,
  blockNumber = "latest"
) {
  const provider = getProvider(chainId);
  const contract = new ethers.Contract(tokenAddress, erc20Abi.abi, provider);
  const balance = await contract.balanceOf(account, { blockTag: blockNumber });
  return balance;
}

/**
 * @param chainId The chain Id of the chain to query
 * @param owner The owner in the allowance call.
 * @param spender The spender in the allowance call.
 * @param tokenSymbol The symbol of the ERC20 token.
 * @param blockNumber The block number to execute the query.
 * @returns A Promise that resolves to the allowance of `spender` for the tokens of `owner`.
 */
export async function getAllowance(
  chainId,
  owner,
  spender,
  tokenSymbol,
  blockNumber = "latest"
) {
  const provider = getProvider(chainId);
  const config = getConfig();
  const { isNative, address } = config.getTokenInfoBySymbol(
    chainId,
    tokenSymbol
  );
  // For a native gas token, allowance does not make sense
  if (isNative) {
    return ethers.constants.MaxUint256;
  }
  const contract = new ethers.Contract(address, erc20Abi.abi, provider);
  return contract.allowance(owner, spender, { blockTag: blockNumber });
}

export const calculateRemoveAmount = (
  percent,
  position,
  decimals
) => {
  if (position.toString() === "0") return "0";
  const scaler = ethers.BigNumber.from("10").pow(decimals);

  const removeAmountToWei = toWeiSafe(percent.toString(), decimals);

  const weiAmount = position.mul(removeAmountToWei).div(scaler.mul(100));
  return formatUnits(weiAmount, decimals);
};
