const ccxt = require("ccxt");

// console.log("exchanges", ccxt.exchanges);

(async () => {
  const kraken = new ccxt.kraken();
  // console.log(kraken);

  await kraken.loadMarkets();

  // console.log(kraken.id, "markets", await kraken.fetchMarkets());

  // console.log(kraken.id, "currencies", await kraken.fetchCurrencies());

  const symbol = "BTC/USD";

  // console.log(kraken.id, "orderBook", await kraken.fetchOrderBook(symbol));

  // console.log(kraken.id, "ticker", await kraken.fetchTicker(symbol));

  // console.log(kraken.id, "tickers", await kraken.fetchTickers([symbol, "ETH/USD"]));

  // console.log(kraken.id, "trades", await kraken.fetchTrades(symbol));

  // console.log(kraken.id, "OHLCV", await kraken.fetchOHLCV(symbol));

  // console.log(kraken.id, "status", await kraken.fetchStatus(symbol));

  intervals(20, async () => {
    const ticker = await kraken.fetchTicker(symbol);
    console.log(kraken.id, "tick", ticker);
  });
})();

function intervals(numTicks, onTick) {
  const id = setInterval(onTick, 1000);

  setTimeout(() => {
    clearInterval(id);
  }, 1000 * numTicks);
}
