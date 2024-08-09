function histogram(input) {
    let numbersCount = Number(input[0]);
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;
 
    for (let i = 1; i <= numbersCount; i++) {
        let currentNumber = Number(input[i]);
 
        if (currentNumber < 200) {
            p1Count++;
        } else if (currentNumber <= 399) {
            p2Count++;
        } else if (currentNumber <= 599) {
            p3Count++;
        } else if (currentNumber <= 799) {
            p4Count++;
        } else if (currentNumber >= 800) {
            p5Count++;
        }
    }
 
    let p1Percentage = (p1Count / numbersCount) * 100;
    let p2Percentage = (p2Count / numbersCount) * 100;
    let p3Percentage = (p3Count / numbersCount) * 100;
    let p4Percentage = (p4Count / numbersCount) * 100;
    let p5Percentage = (p5Count / numbersCount) * 100;
 
    console.log(`${p1Percentage.toFixed(2)}%`);
    console.log(`${p2Percentage.toFixed(2)}%`);
    console.log(`${p3Percentage.toFixed(2)}%`);
    console.log(`${p4Percentage.toFixed(2)}%`);
    console.log(`${p5Percentage.toFixed(2)}%`);
}