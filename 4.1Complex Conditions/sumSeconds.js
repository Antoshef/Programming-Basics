function metricConverter([arg1,arg2,arg3]) {
    let number = parseFloat(arg1);
    let entry = arg2.toLowerCase();
    let exit = arg3.toLowerCase();

    if (entry === 'km') {
        number = number / 0.001;
    } if (entry === 'ft') {
        number = number / 3.2808399;
    } if (entry === 'yd') {
        number = number / 1.0936133;
    } if (entry === 'in') {
        number = number / 39.3700787;
    } if (entry === 'mi') {
        number = number / 0.000621371192;
    } if (entry === 'cm') {
        number = number / 100;
    } if (entry === 'mm') {
        number = number / 1000;
    }
     if (exit === 'km') {
            number = number * 0.001;
    } if (exit === 'ft') {
            number = number * 3.2808399;
    } if (exit === 'yd') {
            number = number * 1.0936133;
    } if (exit === 'in') {
            number = number * 39.3700787;
    } if (exit === 'mi') {
            number = number * 0.000621371192;
    } if (exit === 'cm') {
            number = number * 100;
    } if (exit === 'mm') {
            number = number * 1000;
    } 
        console.log(number + '' + exit);
}

metricConverter([21,cm,mm])