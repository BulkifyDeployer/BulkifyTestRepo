import { utils } from "ethers";

export function parseAndValidAmountInput(
  amountInput,
  amountDecimals,
  maxAmount
) {
  const cleanedInput = amountInput.replaceAll(",", "");

  if (cleanedInput.split(".")[1]?.length > amountDecimals) {
    throw new Error("Input amount decimals exceeds max decimals");
  }

  let amountBN;

  try {
    amountBN = utils.parseUnits(cleanedInput, amountDecimals);
  } catch (error) {
    throw new Error("Invalid amount");
  }

  if (maxAmount.lt(amountBN)) {
    throw new Error("Input amount exceeds max amount");
  }

  if (amountBN.lte(0)) {
    throw new Error("Input amount must be greater than 0");
  }

  return amountBN;
}