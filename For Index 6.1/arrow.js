function arrow([n]) {
    n = Number(n);
    let dotSide = Math.floor(n / 2);
    console.log('.'.repeat(dotSide) + '#'.repeat(n) + '.'.repeat(dotSide));
    for (let row = 1; row < n - 1; row++) {
        line = '.'.repeat(dotSide);
        line += '#';
        line += '.'.repeat(n - 2);
        line += '#';
        line += '.'.repeat(dotSide);
        console.log(line);
    }
    let mid = ('#'.repeat(dotSide + 1) + '.'.repeat(n - 2) + '#'.repeat(dotSide + 1));
    console.log(mid);
    for (let row = 1; row < n - 1; row++) {
        let dotMid = mid.length - 2 - (2 * row);
        line = '.'.repeat(row);
        line += '#';
        line += '.'.repeat(dotMid);
        line += '#';
        line += '.'.repeat(row);
        console.log(line);
    }
    console.log('.'.repeat(n - 1) + '#' + '.'.repeat(n - 1));
}
arrow([7])