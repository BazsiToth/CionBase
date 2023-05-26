let coinprice = new WebSocket('wss://ws.coincap.io/prices?assets=ethereum'); 
let stockPriceElementEth = document.getElementById('ethereum-price');
let lastPriceEth = null;

coinprice.onmessage = (evt) => {
    let stockObject = JSON.parse(evt.data);
    let price = parseFloat(stockObject.ethereum).toFixed(2);
    stockPriceElementEth.innerText = price + ' $';
    stockPriceElementEth.style.color = lastPriceEth === null || lastPriceEth === price ? 'white': price > lastPriceEth ? 'lightgreen' : 'red';
    lastPriceEth = price;
};

coinprice.onerror = (evt) => {
  console.error('WebSocket error:', evt);
  stockPriceElementEth.innerText = 'Error fetching stock price.';
  coinprice.close();
};
