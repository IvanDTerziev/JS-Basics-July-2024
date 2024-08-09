function vacation(input) {
    let index = 0;
     
    let vacationMoney = Number(input[index]); 
    index++; 
 
    let earnings = Number(input[index]); 
    index++; 
 
    let consecutiveDaysSpending = 0;
    let totalDays = 0;
 
    while (earnings < vacationMoney) {
        let action = input[index];
        index++; 
 
        let sum = Number(input[index]);
        index++; 
 
        totalDays++;
        switch (action) {
            case "spend":
                consecutiveDaysSpending++;
 
                if (sum > earnings) {
                    earnings = 0;
                } else {
                    earnings -= sum;
                }
            break;
            case "save":
                consecutiveDaysSpending = 0;
                earnings += sum;
            break;
        }
 
        if (consecutiveDaysSpending === 5) {
            console.log("You can't save the money.");
            console.log(totalDays);
            break;
        }
    }
 
    if (earnings >= vacationMoney) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}