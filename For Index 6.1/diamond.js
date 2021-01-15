function diamond(n) {
    n = Number(n);
    let rowLength = Math.ceil(n / 2);

    for (let row = 1; row <= rowLength; row++) {
        let side = Math.ceil((n / 2) - row);
        let stars = 1;
        let mid = 0;
        if (n % 2 == 0 && row == 1) {
            stars++;
        }
        for (let col = 1; col <= n; col++) {
            mid = (n - 2) - (2 * side);
            if (mid < 0) {
                mid = 0;
            }
        } 

        line = '-'.repeat(side);
        line += '*'.repeat(stars);
        line += '-'.repeat(mid);
        if (row > 1) {
        line += '*'.repeat(stars);
        }
        line += '-'.repeat(side);
        console.log(line);
    }
    let downSideLength = Math.ceil(n / 2) - 1;
    for (let row = 1; row <= downSideLength; row++) {
        let bid = 0;
        let stars = 1;

        for (let col = 1; col <= n; col++) {
            bid = (n - 2) - (2 * row);
            if (bid < 0) {
                bid = 0;
            }
        }
        if (n % 2 == 0 && row == downSideLength) {
            stars++;
        }

        downSide = '-'.repeat(row);
        downSide += '*'.repeat(stars);
        downSide += '-'.repeat(bid);
        if (row !== downSideLength) {
        downSide += '*'.repeat(stars);
        }
        downSide += '-'.repeat(row);
        console.log(downSide)
    }
}
diamond(4)