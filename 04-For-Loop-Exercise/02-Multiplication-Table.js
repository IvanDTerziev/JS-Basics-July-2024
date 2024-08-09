function multiplicationTable(input) {
    let numberToMultiply = Number(input[0]);
 
    for (let i = 1; i <= 10; i++) {
        let result = i * numberToMultiply;
 
        console.log(`${i} * ${numberToMultiply} = ${result}`);
    }
}