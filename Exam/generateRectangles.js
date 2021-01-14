function generateRectangles([n, m]) {
    n = Number(n);
    m = Number(m);
    let x1 = -n;
    let y1 = -n;
    let x2 = n;
    let y2 = n;
    let line = 0;
    for (x1 = -n; x1 < n; x1++) {
        for (y1 = -n; y1 < n; y1++) {
            for (x2 = x1 + 1; x2 <= n ; x2++) {
                for (y2  = y1 + 1; y2 <= n; y2++) {
                    let result = Math.abs(x2 - x1) * Math.abs(y2 - y1);
                    if (result >= m) {
                        line++;
                        console.log(`(${x1}, ${y1}) (${x2}, ${y2}) -> ${result}`);
                    } 

                }
            }
        }
    }
    if (line == 0) {
        console.log('No');
    }
}
generateRectangles([1, 2])