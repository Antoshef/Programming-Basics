function drawFort(n) {
    n = Number(n);
    if (n > 4) {
        var low = n - (Math.floor(n / 2)) - 2;
    }
    let leftRoof = ('/' + '^'.repeat(Math.floor(n / 2)) + '\\' + '_'.repeat(low));
    let rightRoof = ('_'.repeat(low) + '/' + '^'.repeat(Math.floor(n / 2)) + '\\');
    let wholeRoof = leftRoof + rightRoof;
    console.log(wholeRoof);
    for (let row = 1 ; row <= n - 3 ; row++) {
        let core = '|';
        for (let col = 1 ; col <= wholeRoof.length - 2; col++) {
            core += ' ';
        }
        core += '|';
        console.log(core);
    }
    console.log
    ('|' + ' '.repeat(Math.floor(n / 2) + 1) + '_'.repeat(low * 2) + ' '.repeat(Math.floor(n / 2) + 1) + '|');
    console.log
    ('\\' + '_'.repeat(Math.floor(n / 2)) + '/' + ' '.repeat(low * 2) + '\\' + '_'.repeat(Math.floor(n / 2)) + '/');
}
drawFort(3)