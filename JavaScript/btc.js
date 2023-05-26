let ws = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin'); 
let stockPriceElement = document.getElementById('bitcoin-price');
let lastPrice = null;

ws.onmessage = (evt) => {
    let stockObject = JSON.parse(evt.data);
    let price = parseFloat(stockObject.bitcoin).toFixed(2);
    stockPriceElement.innerText = price + ' $';
    stockPriceElement.style.color = lastPrice === null || lastPrice === price ? 'black': price > lastPrice ? 'lightgreen' : 'red';
    lastPrice = price;
};

ws.onerror = (evt) => {
  console.error('WebSocket error:', evt);
  stockPriceElement.innerText = 'Error fetching stock price.';
  ws.close();
};
