function equalSumsEvenOddPositions(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let printLine = "";
 
    for (let currentNum = start; currentNum <= end; currentNum++) {
        let currentNumberToString = currentNum.toString();
        let sumOdd = 0;
        let sumEven = 0;
 
        for (let i = 0; i < currentNumberToString.length; i++) {
            let position = i + 1;
            let currentDigit = Number(currentNumberToString[i]);
 
            if (position % 2 === 0) {
                sumEven += currentDigit;
             } else {
                sumOdd += currentDigit;
            }
        }
 
        if (sumEven === sumOdd) {
            printLine += currentNum + " ";
        }
    }
 
    console.log(printLine);
}