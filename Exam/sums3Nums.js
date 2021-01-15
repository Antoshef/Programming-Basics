function sums3Num([arg1,arg2,arg3]) {
    let c = Math.max(arg1,arg2,arg3);
    let a = Math.min(arg1,arg2,arg3);
    let result = c - a;
    if (result == arg1) {
        console.log(`${a} + ${arg1} = ${c}`);
    } else if (result == arg2) {
        console.log(`${a} + ${arg2} = ${c}`);
    } else if (result == arg3) {
        console.log(`${a} + ${arg3} = ${c}`);
    } else {
        console.log('No')
    }
}
sums3Num([1,1,5])