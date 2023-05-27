let digg = new WebSocket('wss://ws.coincap.io/prices?assets=digg'); 
let stockPriceElementDigg = document.getElementById('digg-price');
let lastPriceDigg = null;

digg.onmessage = (evt) => {
    let stockObject = JSON.parse(evt.data);
    let price = parseFloat(stockObject.digg).toFixed(2);
    stockPriceElementDigg.innerText = price + ' $';
    stockPriceElementDigg.style.color = lastPriceDigg === null || lastPriceDigg === price ? 'white': price > lastPriceDigg ? 'lightgreen' : 'red';
    lastPriceDigg = price;
};

digg.onerror = (evt) => {
  console.error('WebSocket error:', evt);
  stockPriceElementDigg.innerText = 'Error fetching stock price.';
  digg.close();
};
