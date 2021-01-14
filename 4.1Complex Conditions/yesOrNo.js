function daysAfterBirth([input]) {
    input = input.split('-');
    let days = Number(input[0]);
    let month = Number(input[1]);
    let year = Number(input[2]);
    let now = new Date(year, month - 1, days);

    now.setDate(now.getDate() + 1000);
    let dd = now.getDate();
    if (dd < 10) {
        dd = '0' + dd;
    }
    let mm = now.getMonth() + 1;
    if (mm < 10) {
        mm = '0'+ mm;
    }
        let yy = now.getFullYear();
    console.log('' + dd + '-' + mm + '-' + yy);
}
daysAfterBirth(['30-12-2002'])