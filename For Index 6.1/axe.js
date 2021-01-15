function axe([n]) {
    n = Number(n);
    let leftMinus = 3 * n;
    let midMinus = 0;
    let lineLength = 5 * n;
    let rightMinus = lineLength - leftMinus - midMinus - 2;
    for (let row = 0; row < n; row++) {
        line = '-'.repeat(leftMinus);
        line += '*' + '-'.repeat(midMinus) + '*';
        line += '-'.repeat(rightMinus);
        console.log(line);
        midMinus++;
        rightMinus--;
    }
    midMinus--;
    rightMinus++;
    leftMinus++;
    let hand = Math.trunc(n / 2);
    for (let row = 0 ; row < hand; row++) {
        line = '*'.repeat(leftMinus);
        line += '-'.repeat(midMinus) + '*';
        line += '-'.repeat(rightMinus);
        console.log(line);
    }
    leftMinus--;
    for (let row = 0; row < hand - 1; row++) {
        line = '-'.repeat(leftMinus) + '*';
        line += '-'.repeat(midMinus) + '*';
        line += '-'.repeat(rightMinus);
        console.log(line);
        midMinus += 2;
        leftMinus--;
        rightMinus--;
    }
    console.log('-'.repeat(leftMinus) + '*' + '*'.repeat(midMinus) + '*' + '-'.repeat(rightMinus));    
}
axe([2])