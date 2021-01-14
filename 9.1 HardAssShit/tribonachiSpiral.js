function tribonachi([one, two, three, first, step]) {
    one = Number(one);
    two = Number(two);
    three = Number(three);
    let nextOne = 0;
    let tribonachi = one + ',' + two + ',' + three + ',';
    let stop = Number(first);
    step = Number(step);
    let result = stop;
    while (nextOne <= 1000000) {
        nextOne = one + two + three;
        tribonachi += nextOne + ',';
        one = two;
        two = three;
        three = nextOne;
    }
    tribonachi = tribonachi.split(',');
    tribonachi.pop();
    tribonachi.pop();
    for (let i = 1; i < 100000; i++) {
        if (stop > 1000000) {
            break;
        }
        for (let o = 0; o < i; o++) {
            stop += step;
        }
        result += ',' + stop;
        for (let e = 0; e < i; e++) {
            stop += step;
        }
        result += ',' + stop;
    }
    result = result.split(',');
    result.pop();
    let end = false;
    for (row = 0; row < result.length; row++) {
        let currentRes = result[row];
        if (end == true) {
            break;
        }
        for (col = 0; col < tribonachi.length; col++) {
            var currentTri = tribonachi[col];
            if (currentTri == currentRes) {
                console.log(currentTri);
                end = true;
                break;
            }
        }
    }
    if (end == false) {
        console.log('No');
    }
}
tribonachi(['1','4','7','23','3'])