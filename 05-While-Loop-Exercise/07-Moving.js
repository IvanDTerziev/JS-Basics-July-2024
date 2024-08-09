function moving(input) {
    let index = 0;
 
    let width = Number(input[index]); 
    index++; 
 
    let length = Number(input[index]); 
    index++; 
 
    let height = Number(input[index]); 
    index++; 
 
    let apartmentSize = width * length * height;
    let boxSize = 1 * 1 * 1;
 
    let command = input[index]; 
    index++; 
 
    while (command !== "Done") {
        let boxes = Number(command);
 
        apartmentSize -= (boxes * boxSize);
 
        if (apartmentSize < 0) {
            console.log(`No more free space! You need ${Math.abs(apartmentSize)} Cubic meters more.`);
            break;
        }
 
        command = input[index];
        index++;
    }
 
    if (command === "Done") {
        console.log(`${apartmentSize} Cubic meters left.`)
    }
}