function perfectDiamond([n]) {
    n = Number(n);
    let length = n + (n - 1);
    console.log(' '.repeat(n - 1) + '*');
    for (let row = 1; row < n; row++) {
        let space = n - (row + 1);
        let upperBody = '';
        upperBody += ' '.repeat(space);
        upperBody += '*-'.repeat(row);
        upperBody += '*';
        console.log(upperBody);
    }
    for (let col = 1; col <= n - 2; col++) {
        let lowerBody = '';
        lowerBody += ' '.repeat(col);
        lowerBody += '*-'.repeat(n - (col + 1));
        lowerBody += '*';
        console.log(lowerBody);
    }
    if (n > 1) {
    console.log(' '.repeat(n - 1) + '*');
    }
}
perfectDiamond([2])