function nums(arg) {
    let num = Number(arg);
    let first = parseInt(num / 100);
    let second = parseInt((num / 10) % 10);
    let third = num % 10;
    let n = first + second;
    let m = first + third;
    let result = '';
    let currentNum = num;
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= m; col++) {
            if (currentNum % 5 == 0) {
                currentNum -= first;
                result += `${currentNum} `;
            } else if (currentNum % 3 == 0) {
                currentNum -= second;
                result += `${currentNum} `;
            } else {
                currentNum += third;
                result += `${currentNum} `;
            }
        }
        console.log(result);
        result = '';
    }
}
nums(376)