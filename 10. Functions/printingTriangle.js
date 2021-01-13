function printingTriangle(end, start = 1) {
    let line = '';

    for (let i = start; i <= end; i++) {
        for (let o = 1; o <= i; o++) {
            line += o + ' ';
        }
        console.log(line);
        line = '';
    }
    for (let i = 1; i < end; i++) {
        for (let j = 1; j <= (end - i); j++) {
            line += j + ' ';
        }
        console.log(line);
        line = '';
    }
}
printingTriangle(5)