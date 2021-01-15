function pyramid([n]) {
    n = Number(n);
    let start = 1;
    let result = '';
    for (let row = 1; row <= n; row++) {
        result = '';
        if (start > n) {
            break;
        }
        for (let col = 1; col <= row; col++) {
            result += start + ' ';
            start++;
            if (start > n) {
                break;
            } 
        }
        console.log(result);

    }
}
pyramid([2])