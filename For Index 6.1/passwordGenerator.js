function passwordGenerator([n,l]) {
    n = Number(n);
    l = Number(l);
    let letterOne = '';
    let letterTwo = '';
    let result = '';
    for (let d1 = 1; d1 < n; d1++) {
        for (let d2 = 1; d2 < n; d2++) {
            for (let d3 = 97; d3 < 97 + l; d3++) {
                 letterOne = String.fromCharCode(d3);
                for (let d4 = 97; d4 < 97 + l; d4++) {
                    letterTwo = String.fromCharCode(d4);
                    for (let d5 = Math.max(d1,d2) + 1; d5 <= n; d5++) {
                        result += '' + d1 + d2 + letterOne + letterTwo + d5 + ' ';    
                    }
                }
            }
        }
    }
    console.log(result);
}
passwordGenerator(3,2)