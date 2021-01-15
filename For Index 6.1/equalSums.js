function equalSums([start,end]) {
    start = Number(start);
    end = Number(end);
    let result = '';
    for (let i = start; i <= end; i++) {
        let sumEven = 0;
        let sumOdd = 0;
        let current = '' + i;
        for (let o = 0; o < 6; o++) {
            let digit = Number(current[o]);
            if (o % 2 == 0) {
                sumEven += digit;
            } else {
                sumOdd += digit;
            }
        }
        if (sumOdd == sumEven) {
            result += i + ' ';
        }
    }
    if (result != ''){
    console.log(result);
    }
}
equalSums([299900,300000])