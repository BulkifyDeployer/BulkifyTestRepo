import {utils} from "ethers";
import {ChainId, getChainInfo, getConfig, getToken, tokenTable} from "utils";

const config = getConfig();

export const AmountInputError = {
  INVALID: "invalid",
  INSUFFICIENT_LIQUIDITY: "insufficientLiquidity",
  INSUFFICIENT_BALANCE: "insufficientBalance",
  AMOUNT_TOO_LOW: "amountTooLow",
}

export function validateTransferAmount(
  parsedAmountInput,
  currentBalance,
) {
  if (!parsedAmountInput) {
    return {
      error: AmountInputError.INVALID,
    };
  }

  if (currentBalance && parsedAmountInput.gt(currentBalance)) {
    return {
      error: AmountInputError.INSUFFICIENT_BALANCE,
    };
  }

  if (parsedAmountInput.lte(0)) {
    return {
      error: AmountInputError.INVALID,
    };
  }

  return {
    error: undefined,
  };

}


export function getInitialToken(chainId) {
  const tokens = getAllTokens(chainId);
  const initialToken = tokens
    .find((token) => token.symbol === "DAI");

  return initialToken;
}

export function getAllTokens(chainId) {
  return config.getTokenList(chainId);
}