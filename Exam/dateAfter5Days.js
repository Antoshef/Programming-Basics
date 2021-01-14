function dayAfter([d, m]) {
    d = Number(d);
    m = Number(m);
    let dayPlus = d + 5;
    let result = 0;
    let daysInMonth = 31;

    if (m == 2) {
        daysInMonth = 28;
        if (dayPlus > daysInMonth) {
            result = dayPlus - daysInMonth;
            m++;
        } else {
            result = dayPlus;
        }
    } else if (m == 4 || m == 6 || m == 9 || m == 11) {
        daysInMonth = 30;
        if (dayPlus > daysInMonth) {
            result = dayPlus - daysInMonth;
            m++;
        } else {
            result = dayPlus;
        }
    } else {
        if (dayPlus > daysInMonth) {
            result = dayPlus - daysInMonth;
            m++;
        } else {
            result = dayPlus;
        }
    }
    if (m < 10) {
        m = '0' + m;
    } else if (m > 12) {
        m = '0' + 1;
    }


    console.log(result + '.' + m);
}
dayAfter([28, 12])