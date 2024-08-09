function petShop(input) {
    let dogsPackages = Number(input[0]);
    let catsPackages = Number(input[1]);

    let totalCost = dogsPackages * 2.50 + catsPackages * 4;

    let result = `${totalCost} lv.`

    console.log(result);
}
