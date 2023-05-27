let aaven = new WebSocket('wss://ws.coincap.io/prices?assets=aave'); 
let stockPriceElementaaven = document.getElementById('aaven-price');
let lastPriceaaven = null;

aaven.onmessage = (evt) => {
    let stockObject = JSON.parse(evt.data);
    let price = parseFloat(stockObject.aave).toFixed(2);
    stockPriceElementaaven.innerText = price + ' $';
    stockPriceElementaaven.style.color = lastPriceaaven === null || lastPriceaaven === price ? 'white': price > lastPriceaaven ? 'lightgreen' : 'red';
    lastPriceaaven = price;
};

aaven.onerror = (evt) => {
  console.error('WebSocket error:', evt);
  stockPriceElementaaven.innerText = 'Error fetching stock price.';
  aaven.close();
};
