function specialNumbers(input) {
    let userInput = Number(input[0]);
    let start = 1111;
    let end = 9999;
    let printLine = "";

    for (let currentNumber = start; currentNumber <= end;  currentNumber++) {
        let currentNumberToString = currentNumber.toString();
        let isSpecial = true;
 
        for (let i = 0; i < currentNumberToString.length; i++) {
            let currentDigit = Number(currentNumberToString[i]);
 
            if (userInput % currentDigit !== 0) {
                isSpecial = false;
            }
        }
 
        if (isSpecial === true) {
            printLine += currentNumber + " ";
        }
    }
 
    console.log(printLine);
}