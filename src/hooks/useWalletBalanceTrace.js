import { utils } from "ethers";
import { useConnection } from "hooks";
import {
  ChainId,
  fixedPointAdjustment,
  getBalance,
  getConfig,
  getNativeBalance,
  getToken,
  // reportTotalWalletUsdBalance,
} from "utils";
import { ConvertDecimals, chainInfoList, chainInfoTable, AddressZero } from "utils";
import { useQuery } from "react-query";

export function useWalletBalanceTrace() {
  const { account } = useConnection();

  return useQuery(
    ["wallet-balance", account ?? "loading"],
    async () => {
      if (!account) return;
      // setUserId(account); // Убрано
      const balance = await calculateUsdBalances(account);
      // reportTotalWalletUsdBalance(balance); // Убрано
      return balance;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      retry: 5,
      retryDelay: 3000,
    }
  );
}

// Убраны coingeckoPrices, usdPrices, availableTokens, availableSymbols

const calculateUsdBalances = async (account) => {
  const balances = (
    await Promise.all(
      Object.entries(chainInfoTable).flatMap(async ([chainId, chainInfo]) => {
        const tokens = chainInfoList.map(({ chainId, name, nativeCurrencySymbol }) => ({
          fromChainId: chainId,
          fromTokenSymbol: nativeCurrencySymbol,
          fromTokenAddress: chainInfo.nativeCurrencySymbol === "ETH" ? AddressZero : "",
          balance: chainInfo.nativeCurrencySymbol === "ETH"
            ? getNativeBalance(Number(chainId), account)
            : getBalance(Number(chainId), account, ""),
        }));

        const fn = async () => {
          return {
            fromChainId: Number(chainId),
            fromTokenSymbol: "ETH",
            fromTokenAddress: "0x0000000000000000000000000000000000000000",
            balance: await getNativeBalance(Number(chainId), account),
          };
        };

        tokens.push(await fn());
        return await Promise.all(tokens);
      })
    )
  ).flat(2);

  const totalBalance = balances.reduce((acc, { fromTokenSymbol, balance }) => {
    const token = getToken(fromTokenSymbol);
    const usdBalance = Number(
      utils.formatUnits(
        // логика связанная с usdPrice может быть добавлена здесь, если необходимо
        18
      )
    );
    return acc + usdBalance;
  }, 0);

  return totalBalance;
};

