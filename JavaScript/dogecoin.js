let dogecoin = new WebSocket('wss://ws.coincap.io/prices?assets=dogecoin'); 
let stockPriceElementdogecoin = document.getElementById('dogecoin-price');
let lastPriceDogecoin = null;

dogecoin.onmessage = (evt) => {
    let stockObject = JSON.parse(evt.data);
    let price = parseFloat(stockObject.dogecoin).toFixed(2);
    stockPriceElementdogecoin.innerText = price + ' $';
    stockPriceElementdogecoin.style.color = lastPriceDogecoin === null || lastPriceDogecoin === price ? 'white': price > lastPriceDogecoin ? 'lightgreen' : 'red';
    lastPriceDogecoin = price;
};

dogecoin.onerror = (evt) => {
  console.error('WebSocket error:', evt);
  stockPriceElementdogecoin.innerText = 'Error fetching stock price.';
  dogecoin.close();
};
