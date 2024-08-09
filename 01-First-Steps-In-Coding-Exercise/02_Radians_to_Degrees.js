function radiansToDegrees(input) {
    let radiansString = input[0];
    let radians = Number(radiansString);

    let degrees = radians * 180 / Math.PI;

    console.log(degrees);
}