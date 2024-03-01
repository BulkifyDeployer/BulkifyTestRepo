import { useState, useEffect, useCallback } from "react";
import { utils } from "ethers";
import { useBalanceBySymbol, usePrevious } from "hooks";
import { getConfig } from "utils";
import { validateTransferAmount } from "../utils";
import { useMaxBalance } from "./useMaxBalance";

export function useAmountInput(chainId, tokenSymbol) {
  const [userAmountInput, setUserAmountInput] = useState("");
  const [parsedAmount, setParsedAmount] = useState();

  const prevTokenSymbol = usePrevious();

  const { balance } = useBalanceBySymbol(
    chainId,
    tokenSymbol
  );

  const { maxBalance } = useMaxBalance(chainId, tokenSymbol);

  const token = getConfig().getTokenInfoBySymbol(
    chainId, tokenSymbol
  );

  const handleClickMaxBalance = useCallback(() => {
    if (maxBalance) {
      setUserAmountInput(utils.formatUnits(maxBalance, token.decimals));
    }
  }, [maxBalance, token.decimals]);

  const handleChangeAmountInput = useCallback((changedInput) => {
    setUserAmountInput(changedInput);
  }, []);

  const clearInput = useCallback(() => {
    setUserAmountInput("");
    setParsedAmount(undefined);
  }, []);

  useEffect(() => {
    if (prevTokenSymbol === tokenSymbol) {
      return;
    }

    clearInput();
  }, [prevTokenSymbol, tokenSymbol, clearInput]);

  useEffect(() => {
    try {
      const parsed = utils.parseUnits(userAmountInput, token.decimals);
      setParsedAmount(parsed);
    } catch (error) {
      setParsedAmount(undefined);
    }
  }, [userAmountInput, token.decimals]);

  return {
    handleChangeAmountInput,
    handleClickMaxBalance,
    clearInput,
    parsedAmount,
    balance,
    maxBalance,
    userAmountInput,
  };
}

export function useValidAmount(
  parsedAmount,
  maxBalance
) {

  const [validationError, setValidationError] = useState();

  useEffect(() => {
    const { error } = validateTransferAmount(
      parsedAmount,
      maxBalance
    );

    setValidationError(error);
  }, [parsedAmount, maxBalance]);

  return {
    amountValidationError: validationError,
    isAmountValid: !Boolean(validationError),
  };
}