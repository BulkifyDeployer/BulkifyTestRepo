/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { utils } from "ethers";
import { chainInfoTable, CACHED_WALLET_KEY } from "utils";
import { useConnection } from "hooks";

export function useWalletTrace() {
  useWalletNetworkTrace();
  useWalletChangeTrace();
}

export function useWalletNetworkTrace() {
  const [prevTracked, setPrevTracked] = useState();

  const { account, chainId } = useConnection();

  useEffect(() => {
    if (!chainId || !account) {
      return;
    }

    if (prevTracked?.account === account && prevTracked?.chainId === chainId) {
      return;
    }

    const chainInfo = chainInfoTable[Number(chainId)];
    console.log(`Выбрана сеть кошелька: ChainId=${chainId}, ChainName=${chainInfo?.name || "неизвестно"}`);

    setPrevTracked({ account, chainId });
  }, [chainId, account]);
}

export function useWalletChangeTrace() {
  const [prevTrackedWallet, setPrevTrackedWallet] = useState();

  const { wallet } = useConnection();

  useEffect(() => {
    if (!wallet || !wallet.accounts.length) {
      return;
    }

    const connectedWalletAddress = utils.getAddress(wallet.accounts[0].address);

    if (prevTrackedWallet === connectedWalletAddress) {
      return;
    }

    const previousConnection = window.localStorage.getItem(CACHED_WALLET_KEY);
    console.log(`Завершена транзакция подключения кошелька. Адрес подключенного кошелька: ${connectedWalletAddress}, Предыдущее подключение: ${previousConnection}`);

    setPrevTrackedWallet(connectedWalletAddress);
  }, [wallet, wallet?.accounts.length]);
}
