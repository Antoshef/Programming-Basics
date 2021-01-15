function increasingElements(args) {
    let n = Number(args[0]);
    let result = 1;
    let lastNum = 0;
    let biggestResult = 0;
    for (let i = 1; i <= n; i++) {
        let currentNum = Number(args[i]);
        if (i > 1 && currentNum > lastNum) {
            result++;
        } else if (i > 1 && currentNum <= lastNum) {
            result = 1;
        }
        if (result > biggestResult) {
            biggestResult = result;
        }
        lastNum = currentNum;
    }
    console.log(biggestResult);
}
increasingElements([9,
    5,
    6,
    7,1,2,3,5,2,
    8])