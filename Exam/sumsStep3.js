function sumsStep3(arg) {
    let n = Number(arg[0]);
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    for (var i = 1; i <= n; i++) {
    let currentNum = Number(arg[i]);
    if (i % 3 == 1 || i == 1) {
        sum1 += currentNum;
    } else if (i % 3 == 2 || i == 2) {
        sum2 += currentNum;
    } else if (i % 3 == 0) {
        sum3 += currentNum;
    }
}
    console.log(`sum1 = ${sum1}`);
    console.log(`sum2 = ${sum2}`);
    console.log(`sum3 = ${sum3}`);
}
sumsStep3([4,7,-2,6,12])