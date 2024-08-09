function vacationBooksList(input) {
    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let totalDays = Number(input[2]);

    let hoursNeeded = totalPages / pagesPerHour;
    let hoursPerDay = hoursNeeded / totalDays;

    console.log(hoursPerDay);
}
