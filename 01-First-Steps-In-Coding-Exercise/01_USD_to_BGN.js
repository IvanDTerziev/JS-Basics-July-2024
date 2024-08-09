function usdToBgn(input) {
    let usdExchange = 1.79549;

    let usd = Number(input[0]);
    let bgn = usd * usdExchange;

    console.log(bgn);
}