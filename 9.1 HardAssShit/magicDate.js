function magicDate(input) {
    let startYear = Number(input[0]);
    let endYear = Number(input[1]);
    let weight = Number(input[2]);
    let date = new Date(startYear, 0, 1);
    let found = false;

    while (date.getFullYear() <= endYear) {
        date.setDate(date.getDate());
        let d1 = Math.floor(date.getDate() / 10);
        let d2 = date.getDate() % 10;
        let d3 = Math.floor((date.getMonth() + 1) / 10);
        let d4 = (date.getMonth() + 1) % 10;
        let d5 = Math.floor(date.getFullYear() / 1000);
        let d6 = Math.floor(date.getFullYear() / 100) % 10;
        let d7 = Math.floor(date.getFullYear() / 10) % 10;
        let d8 = date.getFullYear() % 10;
        let correct = d1 * (d2 + d3 + d4 + d5 + d6 + d7 + d8) +
            d2 * (d3 + d4 + d5 + d6 + d7 + d8) +
            d3 * (d4 + d5 + d6 + d7 + d8) +
            d4 * (d5 + d6 + d7 + d8) +
            d5 * (d6 + d7 + d8) +
            d6 * (d7 + d8) +
            d7 * d8;
        if (correct === weight) {
            console.log('' + d1 + d2 + '-' + d3 + d4 + '-' + d5 + d6 + d7 + d8);
            found = true;
        }
        date.setDate(date.getDate() + 1);
    }
    if (found == false) {
        console.log('No');
    }
}
magicDate([2012,2014,80])