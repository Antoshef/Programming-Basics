function volleyball(year,fests,travel) {
    year = year.toLowerCase();
    fests = Number(fests);
    travel = Number(travel);
    let weekends = 48;
    let play = ((weekends - travel) * 0.75) + (2/3 * fests) + travel
    if (year == 'leap') {
        console.log(Math.floor(play * 1.15));
    } else {
        console.log(Math.floor(play));
    }
}
volleyball('leap',0,1)