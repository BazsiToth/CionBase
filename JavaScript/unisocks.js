let unisocks = new WebSocket('wss://ws.coincap.io/prices?assets=unisocks'); 
let stockPriceElementUnisocks = document.getElementById('unisocks-price');
let lastPriceUnisocks = null;

unisocks.onmessage = (evt) => {
    let stockObject = JSON.parse(evt.data);
    let price = parseFloat(stockObject.unisocks).toFixed(2);
    stockPriceElementUnisocks.innerText = price + ' $';
    stockPriceElementUnisocks.style.color = lastPriceUnisocks === null || lastPriceUnisocks === price ? 'white': price > lastPriceUnisocks ? 'lightgreen' : 'red';
    lastPriceUnisocks = price;
};

unisocks.onerror = (evt) => {
  console.error('WebSocket error:', evt);
  stockPriceElementUnisocks.innerText = 'Error fetching stock price.';
  unisocks.close();
};
