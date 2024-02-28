import { useQuery } from "react-query";
import { BigNumber, constants } from "ethers";

import { useBalanceBySymbol, useConnection } from "hooks";
import {
  max,
  getProvider,
  gasExpenditureDeposit,
} from "utils";

export function useMaxBalance(
  tokenSymbol,
  chainId
) {
  const { balance } = useBalanceBySymbol(
    tokenSymbol,
    chainId
  );
  const { account, signer } = useConnection();

  return useQuery(
    [
      "max-balance",
      tokenSymbol,
      chainId,
      account,
    ],

    async () => {
      let maxTransferAmount;

      if (account && balance && signer) {
        maxTransferAmount = tokenSymbol !== "ETH"
          ? balance
          :
          await estimateGasCostsForDeposit(chainId).then(
            (estimatedGasCoasts) => max(balance.sub
              (estimatedGasCoasts), 0)
          )
      } else {
        maxTransferAmount = constants.Zero;
      }

      return maxTransferAmount;
    },

    {
      enabled: Boolean(account && balance && signer),
      retry: true,
    }
  )
}

async function estimateGasCostsForDeposit(chainId) {
  const provider = getProvider(chainId);
  const gasPrice = await provider.getGasPrice();
  const gasMultiplier = 3;
  return gasPrice.mul(gasMultiplier).mul(gasExpenditureDeposit);
}