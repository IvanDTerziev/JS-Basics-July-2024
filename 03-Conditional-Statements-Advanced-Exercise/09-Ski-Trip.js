function skiTrip(input) {
    const days = Number(input[0]);
    const roomType = input[1];
    const evaluation = input[2];

    const nights = days - 1;
    let price = 0;
    if (roomType === "room for one person") price = 18;
    else if (roomType === "apartment") {
        price = 25;

        if (nights < 10) price *= 0.7;
        else if (nights <= 15) price *= 0.65;
        else price *= 0.5;
    } else if (roomType === "president apartment") {
        price = 35;

        if (nights < 10) price *= 0.9;
        else if (nights <= 15) price *= 0.85;
        else price *= 0.8;
    }

    let totalCosts = nights * price;
    if (evaluation === "positive") totalCosts *= 1.25;
    else totalCosts *= 0.9;

    console.log(totalCosts.toFixed(2));
}