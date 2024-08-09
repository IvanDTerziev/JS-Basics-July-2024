function oscars(input) {
    let name = input[0];
    let academyPoints = Number(input[1]);
    let judgesCount = Number(input[2]);
    let totalJudgesScore = 0;
    let nominationPoints = 1250.5;
 
    for (let i = 3; i < judgesCount * 2 + 3; i += 2) {
        let judgeName = input[i]; 
        let judgeScore = Number(input[i+1]); 
        let score = (judgeName.length * judgeScore) / 2;
 
        totalJudgesScore += score;
 
        if ((totalJudgesScore + academyPoints) > nominationPoints) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${(totalJudgesScore + academyPoints).toFixed(1)}!`)
            break;
        }
    }
 
    if ((totalJudgesScore + academyPoints) <= nominationPoints) {
        let difference = Math.abs(totalJudgesScore + academyPoints - nominationPoints);
 
        console.log(`Sorry, ${name} you need ${difference.toFixed(1)} more!`)
    }
}