let Maker = new WebSocket('wss://ws.coincap.io/prices?assets=maker'); 
let stockPriceElementMaker = document.getElementById('maker-price');
let lastPriceMaker = null;

Maker.onmessage = (evt) => {
    let stockObject = JSON.parse(evt.data);
    let price = parseFloat(stockObject.maker).toFixed(2);
    stockPriceElementMaker.innerText = price + ' $';
    stockPriceElementMaker.style.color = lastPriceMaker === null || lastPriceMaker === price ? 'white': price > lastPriceMaker ? 'lightgreen' : 'red';
    lastPriceMaker = price;
    console.log(stockPriceElementMaker);
};

Maker.onerror = (evt) => {
  console.error('WebSocket error:', evt);
  stockPriceElementMaker.innerText = 'Error fetching stock price.';
  Maker.close();
};
