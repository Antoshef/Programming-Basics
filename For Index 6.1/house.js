function house([n]) {
    n = Number(n);
    let stars = 1;
    if (n % 2 == 0) {
        stars++;
    }
    let roofLength = Math.ceil(parseInt(n) / 2);
    for (var row = 1; row <= roofLength; row++) {
        let padding = 0;
        for (let col = 1; col < n; col++) {
            padding = n / 2 - row;
            padding = Math.ceil(padding);
        }
        if (row > 1) {
            stars += 2;
        }
        line = '-'.repeat(padding);
        line += '*'.repeat(stars);
        line += '-'.repeat(padding);
        console.log(line);
    }
    let downSideLenght = Math.floor(n / 2);
    for (let i = 1; i <= downSideLenght; i++) {
        line = '|';
        line += '*'.repeat(n -2);
        line += '|';
        console.log(line);
    }
}
house([5])