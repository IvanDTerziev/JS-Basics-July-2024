function salary(input) {
    let openTabsCount = Number(input[0]);
    let salary = Number(input[1]);
    let penalty = 0;
 
    for (let i = 2; i < openTabsCount + 2; i++) {
        let currentOpenTab = input[i];
 
        switch(currentOpenTab) {
            case "Facebook":
                penalty += 150;
            break;
            case "Instagram":
                penalty += 100;
            break;            
            case "Reddit":
                penalty += 50;
            break;
        }
 
        if (salary - penalty <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }
    }
 
    let difference = salary - penalty;
 
    if (difference > 0) {
        console.log(difference);
    }
}