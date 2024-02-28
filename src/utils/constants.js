import assert from "assert";
import axios from "axios";
import { BigNumber, ethers, providers } from "ethers";
import { parseEtherLike } from './format';
import ethLogo from 'assets/logos/ethereum.svg';
import bscLogo from 'assets/logos/bsc_2.svg';
import optLogo from 'assets/logos/optimism.svg';
import arbLogo from 'assets/logos/arbitrum.svg';
import polLogo from 'assets/logos/polygon.svg';
import baseLogo from 'assets/logos/base-logo.svg';
import unknownLogo from "assets/icons/question-24.svg";

export const ChainId = {
  MAINNET: 1,
  OPTIMISM: 10,
  // BSC: 56,
  ARBITRUM: 42161,
  POLYGON: 137,
  BASE: 8453,
  // testnets
  GOERLI: 5
};

export const COLORS = {
  // Aliases
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  error: "var(--color-error)",
  white: "var(--color-white)",
  dark: "var(--color-dark)",
  "dark-gray": "var(--color-dark-gray)",
  "dark-gray-50": "var(--color-dark-gray-50)",
  "text": "var(--color-light-gray)",
  "gradient": "var(--gradient)"
};

/* Colors and Media Queries section */
export const BREAKPOINTS_V2 = {
  xs: 421,
  sm: 576,
  tb: 1024,
};
const breakpoint = (width) => ({
  andDown: `(max-width: ${width}px)`,
  andUp: `(min-width: ${width}px)`,
});
export const QUERIESV2 = {
  xs: breakpoint(BREAKPOINTS_V2.xs),
  sm: breakpoint(BREAKPOINTS_V2.sm),
  tb: breakpoint(BREAKPOINTS_V2.tb),
};

export const CanonicalChainName = Object.fromEntries(
  Object.entries(ChainId)
    .filter((v) => Number.isNaN(Number(v[0])))
    .map((v) => [v[0].toLowerCase(), Number(v[1])])
);

export const defaultBlockPollingInterval =
  Number(process.env.REACT_APP_DEFAULT_BLOCK_POLLING_INTERVAL_S || 15) * 1000;

export const hubPoolChainId = Number(
  process.env.REACT_APP_HUBPOOL_CHAINID || 1
);

const defaultConstructExplorerLink =
  (exploreUrl) => (txHash) =>
    `${exploreUrl}/tx/${txHash}`;

export const chainInfoList = [
  {
    name: "Ethereum",
    fullName: "Ethereum Mainnet",
    chainId: ChainId.MAINNET,
    logoURI: ethLogo,
    exploreUrl: "https://etherscan.io",
    constructExplorerLink: defaultConstructExplorerLink('https://etherscan.io'),
    nativeCurrencySymbol: 'ETH',
    pollingInterval: defaultBlockPollingInterval,
    customRpcUrl: process.env.REACT_APP_CHAIN_1_PROVIDER_URL,
  },
  {
    name: "Arbitrum",
    fullName: "Arbitrum One",
    chainId: ChainId.ARBITRUM,
    logoURI: arbLogo,
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    exploreUrl: "https://arbiscan.io",
    constructExplorerLink: (txHash) =>
      `https://arbiscan.io/tx/${txHash}`,
    nativeCurrencySymbol: 'AETH',
    pollingInterval: defaultBlockPollingInterval,
    customRpcUrl: process.env.REACT_APP_CHAIN_42161_PROVIDER_URL,
  },
  {
    name: "Optimism",
    chainId: ChainId.OPTIMISM,
    logoURI: optLogo,
    rpcUrl: "https://mainnet.optimism.io",
    explorerUrl: "https://optimistic.etherscan.io",
    constructExplorerLink: (txHash) =>
      `https://optimistic.etherscan.io/tx/${txHash}`,
    nativeCurrencySymbol: 'OETH',
    pollingInterval: defaultBlockPollingInterval,
    customRpcUrl: process.env.REACT_APP_CHAIN_10_PROVIDER_URL,
  },
  {
    name: "Polygon",
    fullName: "Polygon Network",
    chainId: ChainId.POLYGON,
    logoURI: polLogo,
    rpcUrl: "https://rpc.ankr.com/polygon",
    exploreUrl: "https://polygonscan.com",
    constructExplorerLink: defaultConstructExplorerLink(
      "https://polygonscan.com"
    ),
    nativeCurrencySymbol: 'MATIC',
    pollingInterval: defaultBlockPollingInterval,
    customRpcUrl: process.env.REACT_APP_CHAIN_137_PROVIDER_URL,
  },
  {
    name: "Base",
    fullName: "Base",
    chainId: ChainId.BASE,
    logoURI: baseLogo,
    rpcUrl: "https://mainnet.base.org",
    explorerUrl: "https://basescan.org",
    constructExplorerLink: defaultConstructExplorerLink("https://basescan.org"),
    nativeCurrencySymbol: "ETH",
    pollingInterval: 10_000,
    customRpcUrl: process.env.REACT_APP_CHAIN_8453_PROVIDER_URL,
  },

  //TestNet

  {
    name: "Goerli",
    fullName: "Goerli Testnet",
    chainId: ChainId.GOERLI,
    logoURI: ethLogo,
    explorerUrl: "https://goerli.etherscan.io/",
    constructExplorerLink: defaultConstructExplorerLink(
      "https://goerli.etherscan.io/"
    ),
    nativeCurrencySymbol: "ETH",
    pollingInterval: defaultBlockPollingInterval,
    customRpcUrl: process.env.REACT_APP_CHAIN_5_PROVIDER_URL,
  },
]

export const chainInfoTable = Object.fromEntries(
  chainInfoList.map((chain) => {
    return [chain.chainId, chain];
  }, [])
)

export let tokenList = [];

export const updateTokenList = async () => {
  try {
    const response = await fetch('https://gateway.ipfs.io/ipns/tokens.uniswap.org');
    const data = await response.json();
    // console.log(data.tokens)
    return [
      ...data.tokens,
    ];
  } catch (error) {
    console.error('Error updating token list:', error);
    return [];
  }
};

// Вызываем функцию обновления токенов и обновляем tokenList
updateTokenList().then((updatedTokenList) => {
  tokenList = updatedTokenList;
});
// export const tokenList = [


//   const tokenInfo = 


// ];

export const amplitudeAPIKey = process.env.REACT_APP_AMPLITUDE_KEY
  ? process.env.REACT_APP_AMPLITUDE_KEY
  : undefined;

export const amplitudeServerUrl = process.env.REACT_APP_AMPLITUDE_SERVER_URL
  ? process.env.REACT_APP_AMPLITUDE_SERVER_URL
  : undefined;

export const sentryEnv = process.env.REACT_APP_SENTRY_ENV;
export const sentryDsn = process.env.REACT_APP_SENTRY_DSN;
export const isSentryEnabled = Boolean(
  process.env.REACT_APP_ENABLE_SENTRY === "true"
);

export const mediumUrl = process.env.REACT_APP_MEDIUM_URL;
export const disableDeposits = process.env.REACT_APP_DISABLE_DEPOSITS;
export const infuraId =
  process.env.REACT_APP_PUBLIC_INFURA_ID || "e34138b2db5b496ab5cc52319d2f0299";
export const confirmations =
  Number(process.env.REACT_APP_PUBLIC_CONFIRMATIONS) || 1;
export const onboardApiKey = process.env.REACT_APP_PUBLIC_ONBOARD_API_KEY;
export const walletConnectProjectId =
  process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID;
export const MAX_APPROVAL_AMOUNT = ethers.constants.MaxUint256;
export const AddressZero = ethers.constants.AddressZero;

export function isSupportedChainId(chainId) {
  return Object.values(ChainId).includes(chainId);
}

export function getChainInfo(chainId) {
  let chainInfo = chainInfoTable[chainId];

  if (!chainInfo) {
    let { name } = providers.getNetwork(chainId);
    name = name === "unknown" ? `Unknown (${chainId})` : name;

    chainInfo = {
      name,
      fullName: name,
      chainId,
      logoURI: unknownLogo,
      explorerUrl: "https://blockscan.com/",
      constructExplorerLink: (txHash) =>
        `https://blockscan.com/tx/${txHash}`,
      nativeCurrencySymbol: "ETH",
      pollingInterval: defaultBlockPollingInterval,
    };
  }

  return chainInfo;
}

export const tokenTable = Object.fromEntries(
  tokenList.map((token) => {
    return [token.symbol.toUpperCase(), token];
  })
);

export const getToken = (symbol) => {
  const token = tokenTable[symbol.toUpperCase()];
  assert(token, "No token found for symbol: " + symbol);
  return token;
};

/**
 * Resolves a token by address. This is useful for tokens that have multiple addresses on different chains.
 * @param address An address of a token
 * @returns The token info for the token with the given address
 */
export const getTokenByAddress = (address) => {
  const token = Object.values(tokenList).find((token) =>
    Object.values(token.addresses).includes(address)
  );
  assert(token, "No token found for address: " + address);
  return getToken(token.symbol);
};

export const enableMigration = process.env.REACT_APP_ENABLE_MIGRATION;
export const generalMaintenanceMessage =
  process.env.REACT_APP_GENERAL_MAINTENANCE_MESSAGE;

export const fixedPointAdjustment = parseEtherLike("1.0");

export const referrerDelimiterHex = "0xd00dfeeddeadbeef";

export function stringValueInArray(value, arr) {
  return arr.indexOf(value) !== -1;
}

export const supportedNotifyChainIds = [1, 3, 4, 5, 42, 56, 100, 137, 250];
export const secondsPerYear = 31557600;
export const secondsPerDay = 86400; // 60 sec/min * 60 min/hr * 24 hr/day

export const gasMultiplierPerChain = process.env
  .REACT_APP_GAS_ESTIMATION_MULTIPLIER_PER_CHAIN
  ? JSON.parse(process.env.REACT_APP_GAS_ESTIMATION_MULTIPLIER_PER_CHAIN)
  : {};

export const defaultRefetchInterval = 15_000;
export const CACHED_WALLET_KEY = "previous-wallet-service";

export const disabledChainIds = (
  process.env.REACT_APP_DISABLED_CHAINS || ""
).split(",");

export const walletBlacklist = (process.env.REACT_APP_WALLET_BLACKLIST || "")
  .split(",")
  .map((address) => address.toLowerCase());

export const gasExpenditureDeposit = BigNumber.from(90_000);

// Used to determine whether to show the "delayed" warning in the deposits table
export const pendingStateTimeUntilDelayed = 5 * 60; // 5 mins

export const vercelApiBaseUrl =
  process.env.REACT_APP_VERCEL_API_BASE_URL_OVERRIDE || "";