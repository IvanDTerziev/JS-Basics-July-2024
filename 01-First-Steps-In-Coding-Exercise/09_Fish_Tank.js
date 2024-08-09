function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);

    let percentage = Number(input[3]);

    let totalVolume = length * width * heigth / 1000;
    let activeVolume = totalVolume * (1 - percentage / 100);

    console.log(activeVolume);
}