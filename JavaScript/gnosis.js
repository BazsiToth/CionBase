let gnosis = new WebSocket('wss://ws.coincap.io/prices?assets=gnosis'); 
let stockPriceElement = document.getElementById('gnosis-price');
let lastPrice = null;

gnosis.onmessage = (evt) => {
    let stockObject = JSON.parse(evt.data);
    let price = parseFloat(stockObject.gnosis).toFixed(2);
    stockPriceElement.innerText = price + ' $';
    stockPriceElement.style.color = lastPrice === null || lastPrice === price ? 'white': price > lastPrice ? 'lightgreen' : 'red';
    lastPrice = price;
};

ws.onerror = (evt) => {
  console.error('WebSocket error:', evt);
  stockPriceElement.innerText = 'Error fetching stock price.';
  ws.close();
};
