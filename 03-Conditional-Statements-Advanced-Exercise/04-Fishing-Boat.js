function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let price = 0;
 
    switch(season) {
        case "Spring":
            price = 3000;
        break;
        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter": 
            price = 2600;
            break;
    }
 
    if (fishermen <= 6) {
        price = price - (price * 0.1);
    } else if (fishermen <= 11) {
        price = price - (price * 0.15);
    } else if (fishermen > 12) {
        price = price - (price * 0.25);
    }
 
    if (fishermen % 2 === 0 && season !== "Autumn") {
        price = price - (price * 0.05);
    }
 
    let difference = budget - price;
 
    if (difference >= 0) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${Math.abs(difference).toFixed(2)} leva.`)
    }
}