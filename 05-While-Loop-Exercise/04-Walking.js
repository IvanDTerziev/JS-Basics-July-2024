function walking(input) {
    let index = 0;
    let goal = 10_000;
 
    let command = input[index]; 
    index++;
 
    let totalSteps = 0;
 
    while (command !== "Going home") {
        let steps = Number(command);
 
        totalSteps += steps;
 
        if (totalSteps >= goal) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - goal} steps over the goal!`);
            break;
        }
 
        command = input[index];
        index++;
    }
 
    if (command === "Going home") {
        let steps = Number(input[index]);
 
        totalSteps += steps;
 
        if (totalSteps >= goal) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - goal} steps over the goal!`);
        } else {
            console.log(`${goal - totalSteps} more steps to reach goal.`);
        }
    }
}