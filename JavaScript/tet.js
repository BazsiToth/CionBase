let coinPriceTether = new WebSocket('wss://ws.coincap.io/prices?assets=tether'); 
let stockPriceElementTether = document.getElementById('tether-price');
let lastPriceTether = null;

coinPriceTether.onmessage = (evt) => {
    let stockObject = JSON.parse(evt.data);
    let price = parseFloat(stockObject.tether).toFixed(2);
    stockPriceElementTether.innerText = price + ' $';
    stockPriceElementTether.style.color = lastPriceTether === null || lastPriceTether === price ? 'black': price > lastPriceTether ? 'lightgreen' : 'red';
    lastPriceTether = price;
    console.log(stockPriceElementTether);
};

coinPriceTether.onerror = (evt) => {
  console.error('WebSocket error:', evt);
  stockPriceElementTether.innerText = 'Error fetching stock price.';
  coinPriceTether.close();
};
