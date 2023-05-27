let Cosmos = new WebSocket('wss://ws.coincap.io/prices?assets=cardano');
let stockPriceElementCosmos = document.getElementById('cardano-price');
let lastPriceCosmos = null;

Cosmos.onmessage = (evt) => {
    let stockObject = JSON.parse(evt.data);
    let price = parseFloat(stockObject.cardano).toFixed(2);
    stockPriceElementCosmos.innerText = price + ' $';
    stockPriceElementCosmos.style.color = lastPriceCosmos === null || lastPriceCosmos === price ? 'white': price > lastPriceCosmos ? 'lightgreen' : 'red';
    lastPriceCosmos = price;
};

Cosmos.onerror = (evt) => {
    console.error('WebSocket error:', evt);
    stockPriceElementCosmos.innerText = 'Error fetching stock price.';
    Cosmos.close();
  };