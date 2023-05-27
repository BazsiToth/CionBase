let Litecoin = new WebSocket('wss://ws.coincap.io/prices?assets=litecoin'); 
let stockPriceElementLitecoin = document.getElementById('litecoin-price');
let lastPriceLitecoin = null;

Litecoin.onmessage = (evt) => {
    let stockObject = JSON.parse(evt.data);
    let price = parseFloat(stockObject.litecoin).toFixed(2);
    stockPriceElementLitecoin.innerText = price + ' $';
    stockPriceElementLitecoin.style.color = lastPriceLitecoin === null || lastPriceLitecoin === price ? 'white': price > lastPriceLitecoin ? 'lightgreen' : 'red';
    lastPriceLitecoin = price;
};

Litecoin.onerror = (evt) => {
  console.error('WebSocket error:', evt);
  stockPriceElementLitecoin.innerText = 'Error fetching stock price.';
  Litecoin.close();
};
