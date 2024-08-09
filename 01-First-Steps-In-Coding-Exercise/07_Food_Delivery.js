function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetarianMenu = Number(input[2]);

    let totalSum = chickenMenu * 10.35 + fishMenu * 12.40 + vegetarianMenu * 8.15;
    let totalSumWithDessert = totalSum * 1.20;
    let finalSum = totalSumWithDessert + 2.50;

    console.log(finalSum);
}
