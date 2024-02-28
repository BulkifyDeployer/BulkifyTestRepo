import { utils } from "ethers";
import { ChainId, getChainInfo, getConfig, getToken } from "utils";

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
  return tokens.length > 0 ? tokens[0] : null;
}

export function getAllTokens(chainId) {
  return config.getTokenList(chainId);
}


// export function parseAndValidAmountInput(
//   amountInput,
//   amountDecimals,
//   maxAmount
// ) {
//   const cleanedInput = amountInput.replaceAll(",", "");

//   if (cleanedInput.split(".")[1]?.length > amountDecimals) {
//     throw new Error("Input amount decimals exceeds max decimals");
//   }

//   let amountBN;

//   try {
//     amountBN = utils.parseUnits(cleanedInput, amountDecimals);
//   } catch (error) {
//     throw new Error("Invalid amount");
//   }

//   if (maxAmount.lt(amountBN)) {
//     throw new Error("Input amount exceeds max amount");
//   }

//   if (amountBN.lte(0)) {
//     throw new Error("Input amount must be greater than 0");
//   }

//   return amountBN;
// }