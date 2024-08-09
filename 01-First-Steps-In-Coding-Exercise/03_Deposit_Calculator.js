function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let depositTime = Number(input[1]);
    let interestRate = Number(input[2]) / 100;

    let depositAfter = depositAmount + depositTime * ((depositAmount * interestRate) / 12);

    console.log(depositAfter);
}
