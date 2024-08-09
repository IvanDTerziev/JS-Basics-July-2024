function cleverLilly(input) {
    let age = Number(input[0]);
    let washingMachingPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);
    let savings = 0;
    let moneyPerEvenBirthday = 10;
 
    for (let i = 1; i <= age; i++) {
        let currentAge = i;
 
        if (currentAge % 2 === 0) {
            savings += moneyPerEvenBirthday;
            savings -= 1;
            moneyPerEvenBirthday += 10;
        } else {
            savings += pricePerToy;
        }
    }
 
    let difference = savings - washingMachingPrice;
 
    if (difference >= 0) {
        console.log(`Yes! ${difference.toFixed(2)}`)
    } else {
        let differenceFormatted = Math.abs(difference).toFixed(2);
 
        console.log(`No! ${differenceFormatted}`)
    }
}
