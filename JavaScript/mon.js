let coinPriceTether = new WebSocket('wss://ws.coincap.io/prices?assets=monero'); 
let stockPriceElementTether = document.getElementById('monero-price');
let lastPriceTether = null;

coinPriceTether.onmessage = (evt) => {
    let stockObject = JSON.parse(evt.data);
    let price = parseFloat(stockObject.monero).toFixed(2);
    stockPriceElementTether.innerText = price + ' $';
    stockPriceElementTether.style.color = lastPriceTether === null || lastPriceTether === price ? 'white': price > lastPriceTether ? 'lightgreen' : 'red';
    lastPriceTether = price;
    console.log(stockPriceElementTether);
};

coinPriceTether.onerror = (evt) => {
  console.error('WebSocket error:', evt);
  stockPriceElementTether.innerText = 'Error fetching stock price.';
  coinPriceTether.close();
};
