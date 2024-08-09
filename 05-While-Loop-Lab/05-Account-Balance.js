function accountBalance(input) {
    let total = 0;

    while (input.length > 0) {
        let command = input.shift(); 

        if (command === "NoMoreMoney") {
            break;
        }

        let amount = Number(command); 

        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }

        total += amount;
        console.log("Increase:", amount.toFixed(2));
    }

    console.log("Total:", total.toFixed(2));
}