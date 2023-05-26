const pricesWsbitcoin = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin')
const Tagbitcoin = document.getElementById('btc-price')

pricesWsbitcoin.onmessage = function (msg) {
    const price = JSON.parse(msg.data).bitcoin;
    Tagbitcoin.textContent = price + " $"
}

const pricesWsethereum = new WebSocket('wss://ws.coincap.io/prices?assets=ethereum')
const Tagethereum = document.getElementById('eth-price')

pricesWsethereum.onmessage = function (msg) {
    const price = JSON.parse(msg.data).ethereum;
    Tagethereum.textContent = price + " $"
}

const pricesWsRipple = new WebSocket('wss://ws.coincap.io/prices?assets=ripple')
const TagRipple = document.getElementById('tet-price')

pricesWsRipple.onmessage = function (msg) {
    const price = JSON.parse(msg.data).ripple;
    TagRipple.textContent = price + " $"
}