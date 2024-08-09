function trainTheTrainers(input) {
    let index = 0;
    let gradesCount = Number(input[index]);
    index++; 
    
    let command = input[index]; 
    index++; 
 
    let totalGradesSum = 0;
    let presentationsCount = 0;
 
    while (command !== "Finish") {
        let currentPresentationTitle = command;
        let gradesSum = 0;
 
        for (let i = 0; i < gradesCount; i++) {
            let grade = Number(input[index]); 
            index++;
 
            gradesSum += grade;
        }
 
        let averageCount = gradesSum / gradesCount;
        console.log(`${currentPresentationTitle} - ${averageCount.toFixed(2)}.`);
 
        totalGradesSum += averageCount;
        presentationsCount++;
 
        command = input[index];
        index++;
    }
 
    let totalAverageGrade = totalGradesSum / presentationsCount;
 
    console.log(`Student's final assessment is ${totalAverageGrade.toFixed(2)}.`)
}