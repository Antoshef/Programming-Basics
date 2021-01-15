function lettersCombination(arg) {
    let start = arg[0].charCodeAt();
    let end = arg[1].charCodeAt();
    let skip = arg[2].charCodeAt();
    let combinations = 0;
    var result = '';
    for (let d1 = start; d1 <= end; d1++) {
        for (let d2 = start; d2 <= end; d2++) {
            for (let d3 = start; d3 <= end; d3++) {
                if (d1 != skip && d2 != skip && d3 != skip) {
                    result += String.fromCharCode(d1) + String.fromCharCode(d2) + String.fromCharCode(d3) + ' ';
                    combinations++;
                }
            }
        }
    }
    console.log(result + combinations);
}
lettersCombination(['f','k','h'])