function examPreparation (input) {
    let index = 0;
    let maxAllowedPoorGrades = Number(input[index]);
    index++;
 
    let command = input[index]; 
    index++; 
    let grade = Number(input[index]);
    index++; 
 
    let poorGradesCount = 0;
    let problemsSolved = 0;
    let totalGradesCount = 0;
    let lastProblemSolved = "";
 
    while (command !== "Enough") {
        lastProblemSolved = command;
 
        if (grade <= 4) {
            poorGradesCount++;
        }
 
        if (poorGradesCount === maxAllowedPoorGrades) {
            console.log(`You need a break, ${poorGradesCount} poor grades.`);
            break;
        }
 
        command = input[index];
        index++; 
        
        problemsSolved++;
        totalGradesCount += grade;
        grade = Number(input[index]);
        index++;
    }
 
    if (command === "Enough") {
        console.log(`Average score: ${(totalGradesCount / problemsSolved).toFixed(2)}`);
        console.log(`Number of problems: ${problemsSolved}`);
        console.log(`Last problem: ${lastProblemSolved}`);
    }
}