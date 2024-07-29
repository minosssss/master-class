export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json(),
  );
}

export function fetchCoinPrice(coinId) {
  return fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`).then(
    (response) => response.json(),
  );
}

export function fetchCoinDetail(coinId) {
  return fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`).then(
    (response) => response.json(),
  );
}

export function fetchCoinHistory(coinId) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 14;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}&start=${startDate}&end=${endDate}`,
  ).then((response) => response.json());
}
