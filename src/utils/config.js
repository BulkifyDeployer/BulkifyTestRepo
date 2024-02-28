import assert from "assert";
import * as constants from './constants';
import * as providerUtils from './providers';
import filter from "lodash/filter";
import sortBy from "lodash/sortBy";

export class ConfigClient {
  constructor(config) {
    // this lets us sort arbitrary array of tokens
    this.tokenOrder = Object.fromEntries(
      Object.entries(constants.tokenList).map(([index, token]) => [
        token.symbol,
        Number(index),
      ])
    );

    // Initialize chainOrder as an empty object
    this.chainOrder = {};

    // this lets us sort arbitrary list of chains
    constants.chainInfoList.forEach((chain, index) => {
      const { chainId } = chain;
      assert(
        constants.isSupportedChainId(chainId),
        'Unsupported chainId: ' + chainId
      );
      this.chainOrder[chainId] = Number(index);
    });

    this.config = config;
  }

  getTransferContractAddress() {
    return (
      process.env.REACT_APP_TRANSFER_CONTRACT_ADDRESS ||
      ""
    )
  }
  // this maintains order specified in the constants file in the chainInfoList
  isSupportedChainId = (chainId) => {
    return (
      constants.isSupportedChainId(chainId)
    );
  };

  getTokenList(chainId) {
    return constants.tokenList
      .filter((token) => token.chainId === chainId)
      .map((token) => {
        const isNative =
          token.address === constants.EthAddress || constants.AddressZero;
        return {
          ...token,
          isNative,
        };
      });
  }

  getTokenInfoByAddress(
    chainId,
    address,
    tokens = this.getTokenList(chainId)
  ) {
    const token = tokens.find((token) => token.address === address);
    assert(
      token,
      `Token not found on chain ${chainId} and address ${address}`
    );

    return token;
  }

  getTokenInfoByAddressSafe(
    chainId,
    address
  ) {
    try {
      return this.getTokenInfoByAddress(chainId, address);
    } catch (error) {
      return undefined;
    }
  }

  getTokenInfoBySymbol(chainId, symbol) {
    const tokens = this.getTokenList(chainId);
    return this._getTokenInfoBySymbol(chainId, symbol, tokens);
  }

  _getTokenInfoBySymbol(
    chainId,
    symbol,
    srcTokenList
  ) {
    const token = srcTokenList.find(
      (token) => token.symbol.toUpperCase() === symbol.toUpperCase()
    );

    assert(token, `Token not found on chain ${chainId} and symbol ${symbol}`);
    const tokenInfo = constants.getToken(symbol);

    return {
      ...tokenInfo,
      address: token.address,
    }
  }

  getNativeTokenInfo(chainId) {
    const chainInfo = constants.getChainInfo(chainId);
    return constants.getToken(chainInfo.nativeCurrencySymbol);
  }
}

let config;
export function getConfig() {
  if (config) return config;
  config = new ConfigClient();
  return config;
}