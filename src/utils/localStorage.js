const TX_HISTORY_PAGE_SIZE_KEY = "txHistoryPageSize";

export function setTxHistoryPageSize(value) {
  localStorage.setItem(TX_HISTORY_PAGE_SIZE_KEY, value.toString());
}

export function getTxHistoryPageSize() {
  return localStorage.getItem(TX_HISTORY_PAGE_SIZE_KEY)
    ? Number(localStorage.getItem(TX_HISTORY_PAGE_SIZE_KEY))
    : undefined;
}

export function setAccountSeenWelcomeTravellerFlow(account) {
  localStorage.setItem(`accountSeenWelcomeTravellerFlow-${account}`, account);
}

export function getAccountSeenWelcomeTravellerFlow(
  account
) {
  return localStorage.getItem(`accountSeenWelcomeTravellerFlow-${account}`);
}
