function numTable([n]) {
    n = Number(n);
    let result = '';
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            let num = row + col + 1;
            if (num > n) {
                num = (2 * n) - num;
            }
            result += num;
            result += ' ';
        }
        console.log(result);
        result = '';
    }
}
numTable([7])