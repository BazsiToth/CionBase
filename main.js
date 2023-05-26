const pricesWsbitcoin = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin')
const Tagbitcoin = document.getElementById('btc-price')

pricesWsbitcoin.onmessage = function (msg) {
    const price = JSON.parse(msg.data).bitcoin;
    Tagbitcoin.textContent = price + " $"
    console.log(price);
}

const pricesWsethereum = new WebSocket('wss://ws.coincap.io/prices?assets=ethereum')
const Tagethereum = document.getElementById('eth-price')

pricesWsethereum.onmessage = function (msg) {
    const price = JSON.parse(msg.data).ethereum;
    Tagethereum.textContent = price + " $"
    console.log(price);
}