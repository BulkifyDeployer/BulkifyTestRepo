import {BigNumber, ethers} from "ethers";
import assert from "assert";
import numeral from "numeral";

export function isValidString(s) {
  if (s != null && typeof s === "string" && s !== "") {
    return true;
  }
  return false;
}

/**
 *
 * @param address valid web3 address
 * @param delimiter string to put between your split string, eg: "...", "---"
 * @param numChars number of characters to keep on each part of the string
 * @returns string. Formatted version of address param.
 */

export function shortenAddress(
  address,
  delimiter,
  numChars
) {
  if (!isValidString(address)) {
    return "";
  }
  return shortenString(address, delimiter, numChars);
}

/**
 *
 * @param str string to shorten
 * @param delimiter string to put between your split string, eg: "...", "---"
 * @param numChars number of characters to keep on each part of the string
 * @returns string. Formatted version of str param.
 */
export function shortenString(
  str,
  delimiter,
  numChars
) {
  // Cannot shorten this string, force early return.
  if (str.length < 2 * numChars) return str;
  return `${str.substring(0, numChars)}${delimiter}${str.substring(
    str.length - numChars,
    str.length
  )}`;
}

/**
 * Shortens an arbitrary string to a fixed number of characters, mindful of the character length of the delimiter
 * @param str The string to be potentially shortened
 * @param delimiter The delimiter
 * @param maxChars The number of characters to constrain this string
 * @returns `str` if string is less than maxChars. The first `maxChars` chars if the delimiter is too large. A collapsed version with the delimiter in the middle.
 */
export function shortenStringToLength(
  str,
  delimiter,
  maxChars
) {
  if (str.length <= maxChars) {
    return str;
  } else {
    const charsNeeded = maxChars - delimiter.length;
    // Delimiter is out of bounds
    if (charsNeeded <= 0) {
      return str.slice(0, maxChars);
    } else {
      const charDivision = charsNeeded / 2;
      const left = str.slice(0, Math.ceil(charDivision));
      const right =
        charDivision < 1 ? "" : str.slice(-Math.floor(charDivision));
      return `${left}${delimiter}${right}`;
    }
  }
}

export function shortenTransactionHash(hash) {
  return `${hash.substring(0, 5)}...`;
}

// for number less than 1, this will ensure at least 1 digit is shown ( not rounded to 0)
export const smallNumberFormatter = (num, precision) =>
  new Intl.NumberFormat("en-US", {
    minimumSignificantDigits: 1,
    maximumSignificantDigits: precision || 3,
  }).format(num);

// for numbers 1 or greater, this will ensure we never round down and lose values > 1, while minimizing decimals to max of 3
export const largeNumberFormatter = (num, precision) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: precision || 3,
  }).format(num);

// for numbers 1000 or greater, this will remove any fractional component to make it a bit cleaner
export const veryLargeNumberFormatter = (num, precision) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: precision || 0,
  }).format(num);

export function formatUnits(
  wei,
  decimals,
  maxFractions
) {
  const value = Number(ethers.utils.formatUnits(wei, decimals));
  // if (value >= 1000) {
  //   return veryLargeNumberFormatter(value, maxFractions?.xl);
  // }
  if (value >= 1) {
    return largeNumberFormatter(value, maxFractions?.l);
  }
  return smallNumberFormatter(value, maxFractions?.s);
}

export function formatUnitsFnBuilder(decimals) {
  function closure(wei) {
    return formatUnits(wei, decimals);
  }

  return closure;
}

export function makeFormatUnits(decimals) {
  return (wei) => formatUnits(wei, decimals);
}

export function formatEther(wei) {
  return formatUnits(wei, 18);
}

export function formatEtherRaw(wei) {
  return ethers.utils.formatUnits(wei, 18);
}

export function parseUnits(value, decimals) {
  return ethers.utils.parseUnits(value, decimals);
}

export function parseUnitsFnBuilder(decimals) {
  function closure(value) {
    return parseUnits(value, decimals);
  }

  return closure;
}

export function parseEtherLike(value) {
  return parseUnits(value, 18);
}

/**
 * Checks if a given input is parseable
 * @param amount A bignumberish value that will be attempted to be parsed
 * @returns A boolean if this value can be parsed
 */
export function isNumberEthersParseable(amount) {
  try {
    parseEtherLike(amount.toString());
    return true;
  } catch (_e) {
    return false;
  }
}

/**
 * Returns the formatted number version of a BigNumber value
 * @param value A bignumber to be converted via `formatEther` and returned
 * @param decimals The number of units to format `value` with. Default: 18
 * @returns `formatEther(value)` as a Number, or NaN if impossible
 */
export function formattedBigNumberToNumber(
  value,
  decimals = 18
) {
  try {
    return Number(formatUnits(value, decimals));
  } catch (_e) {
    return Number.NaN;
  }
}

export function stringToHex(value) {
  return ethers.utils.hexlify(ethers.utils.toUtf8Bytes(value));
}

// appends hex tag to data
export function tagHex(
  dataHex,
  tagHex,
  delimitterHex = ""
) {
  assert(ethers.utils.isHexString(dataHex), "Data must be valid hex string");
  return ethers.utils.hexConcat([dataHex, delimitterHex, tagHex]);
}

// converts a string tag to hex and appends, currently not in use
export function tagString(dataHex, tagString) {
  return tagHex(dataHex, stringToHex(tagString));
}

// tags only an address
export function tagAddress(
  dataHex,
  address,
  delimiterHex = ""
) {
  assert(ethers.utils.isAddress(address), "Data must be a valid address");
  return tagHex(dataHex, address, delimiterHex);
}

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to sentence case delineated by spaces
 * @param str The string to convert
 * @returns The string in sentence case
 */
export function convertToCapitalCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

const twoSigFormatter = new Intl.NumberFormat("en-US", {
  maximumSignificantDigits: 2,
});

export const formatNumberTwoSigDigits =
  twoSigFormatter.format.bind(twoSigFormatter);

const threeMaxFracFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 3,
});

export const formatNumberMaxFracDigits = threeMaxFracFormatter.format.bind(
  threeMaxFracFormatter
);

const twoMaxFracFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});

export const formatNumberTwoFracDigits =
  twoMaxFracFormatter.format.bind(twoMaxFracFormatter);

export function formatMaxFracDigits(number, maxFracDigits) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: maxFracDigits,
  });
  return formatter.format(number);
}

export function formatPoolAPY(
  wei,
  decimals
) {
  return formatNumberMaxFracDigits(
    Number(ethers.utils.formatUnits(wei, decimals))
  );
}

export function formatWeiPct(wei, precision = 3) {
  if (wei === undefined) {
    return undefined;
  }

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: precision,
  }).format(Number(ethers.utils.formatEther(wei)) * 100);
}

/**
 * Formats a number into a human readable format
 * @param num The number to format
 * @returns A human readable format. I.e. 1000 -> 1K, 1001 -> 1K+
 */
export function humanReadableNumber(num, decimals = 0) {
  if (num <= 0) return "0";
  return (
    numeral(num)
      .format(decimals <= 0 ? "0a" : `0.${"0".repeat(decimals)}a`)
      .toUpperCase() + "+"
  );
}

/**
 * Formats an 18 decimal WEI representation of USD into standard USD format
 * @param value A 18 decimal fixed-point integer representation of USD
 * @returns A string formatted as USD. A number with 2 decimal places.
 * @note USD only has 2 decimal places of precision, so this will round to the nearest cent.
 */
export function formatUSD(value) {
  const formattedString = ethers.utils.formatUnits(value, 18);
  return numeral(Number(formattedString).toFixed(2)).format("0,0.00");
}

export function parseUnitsWithExtendedDecimals(
  value,
  decimals
) {
  let valueToParse = String(value);
  if (valueToParse.includes(".")) {
    const [whole, fraction] = value.split(".");
    valueToParse = `${whole}.${(fraction ?? "").slice(0, decimals)}`;
  }
  return ethers.utils.parseUnits(valueToParse, decimals);
}
