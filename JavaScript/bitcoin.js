let ws = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin'); 
let stockPriceElementGnosi = document.getElementById('bitcoin-price');
let lastPriceGnosi = null;

ws.onmessage = (evt) => {
    let stockObject = JSON.parse(evt.data);
    let price = parseFloat(stockObject.bitcoin).toFixed(2);
    stockPriceElementGnosi.innerText = price + ' $';
    stockPriceElementGnosi.style.color = lastPriceGnosi === null || lastPriceGnosi === price ? 'white': price > lastPriceGnosi ? 'lightgreen' : 'red';
    lastPriceGnosi = price;
};

gnosis.onerror = (evt) => {
  console.error('WebSocket error:', evt);
  stockPriceElementGnosi.innerText = 'Error fetching stock price.';
  gnosis.close();
};
