import {
  useContext,
  useEffect,
  useState,
  createContext
} from "react"
import {
  UnsupportedChainIdError,
  isSupportedChainId,
  insideStorybookRuntime,
  CACHED_WALLET_KEY,
  walletBlacklist
} from "utils"
import { onboardInit } from "utils"

import { useConnectWallet, useSetChain } from "@web3-onboard/react"
import { ethers } from "ethers"

export function useOnboardManager() {
  const [onboard, setOnboard] = useState(null)
  const [provider, setProvider] = useState(null)
  const [signer, setSigner] = useState(undefined)
  const [account, setAccount] = useState(null)
  const [error, setError] = useState(undefined)

  /** Immediately resolve the onboard when it becomes available */
  if (!onboard) setOnboard(onboardInit());

  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain()



  useEffect(() => {

    if (
      wallet?.accounts.some(account =>
        walletBlacklist.includes(account.address.toLowerCase())
      )
    ) {
      disconnect(wallet)
      return
    }

    if (wallet?.accounts) {
      setAccount(wallet.accounts[0])
    } else {
      setAccount(null)
    }

    if (wallet?.provider) {
      setProvider(new ethers.providers.Web3Provider(wallet.provider, "any"))
      setSigner(
        new ethers.providers.Web3Provider(wallet.provider, "any").getSigner()
      )
    } else {
      setProvider(null)
      setSigner(undefined)
    }

    if (wallet?.chains) {
      const chainId = Number(wallet.chains[0].id)
      if (!isSupportedChainId(chainId)) {
        setError(new UnsupportedChainIdError(chainId))
      } else {
        setError(undefined)
      }
    } else {
      setError(undefined)
    }
  }, [wallet, disconnect])

  useEffect(() => {
    // Only acknowledge the state where onboard is defined
    // Also disable for when running inside of storybook
    if (onboard && !insideStorybookRuntime) {
      // Retrieve the list of onboard's wallet connections
      const walletState = onboard?.state.select("wallets")
      // Subscribe to the state for any changes
      const { unsubscribe } = walletState.subscribe(wallets => {
        // Iterate over all wallets and extract their label
        const connectedWallets = wallets.map(({ label }) => label)
        // If a wallet label is present, update the browser state
        // so that this information is preserved on refresh
        if (connectedWallets.length > 0) {
          window.localStorage.setItem(CACHED_WALLET_KEY, connectedWallets[0])
        }
      })
      // Unsubscribe to the observer when this component is
      // unmounted
      // return () => {
      //   unsubscribe()
      // }
    }
  }, [onboard])

  return {
    onboard,
    chains,
    connecting,
    connect,
    disconnect,
    connectedChain,
    settingChain,
    setChain,
    wallet,
    isConnected: !!connectedChain,
    signer,
    provider,
    account,
    chainId: Number(wallet?.chains[0].id),
    error,
  }
}

export const OnboardContext = createContext(undefined)
OnboardContext.displayName = "OnboardContext"
export const OnboardProvider = ({ children }) => {
  const value = useOnboardManager()
  return (
    <OnboardContext.Provider value={value}>{children}</OnboardContext.Provider>
  )
}


OnboardProvider.displayName = "OnboardProvider"

export function useOnboard() {
  const context = useContext(OnboardContext)
  if (!context) {
    throw new Error("useOnboard must be used within an <OnboardProvider>")
  }
  return context
}
