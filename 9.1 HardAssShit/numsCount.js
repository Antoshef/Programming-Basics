function numsCount([args]) {
    let sum = 0;
    let firstDigit = 0;
    let secondDigit = 0;
    let sign = '';
    let brackets = '';
    let signBeforeBrackets = '';
    let nextDigit = 0;
    args = args.split('');
        for (let i = 0; brackets != '='; i++) {
            if (i > 0) {
                if (sign == '+') {
                    sum = Number(firstDigit) + Number(secondDigit);
                } else if (sign == '-') {
                    sum = Number(firstDigit) - Number(secondDigit);
                } else if (sign == '*') {
                    sum = Number(firstDigit) * Number(secondDigit);
                } else if (sign == '/') {
                    sum = Number(firstDigit) / Number(secondDigit);
                } 
                args.unshift(sum);
            } 
            for (let o = 0; o < 3; o++) {
                let current = args[0];
                if (current === '=') {
                    brackets = args.shift();
                    break;
                }
                else if (current === ')') {
                    brackets = args.shift();
                    if (signBeforeBrackets == '+') {
                        sum = Number(nextDigit) + Number(firstDigit);
                    } else if (signBeforeBrackets == '-') {
                        sum = Number(nextDigit) - Number(firstDigit);
                    } else if (signBeforeBrackets == '*') {
                        sum = Number(nextDigit) * Number(firstDigit);
                    } else if (signBeforeBrackets == '/') {
                        sum = Number(nextDigit) / Number(firstDigit);
                    }
                    args.unshift(sum);
                    o = -1;
                    continue;
                }
                else if (current === '+' || current === '-' || current === '*' || current === '/') {
                sign = args.shift();
                } else if (current === '(') {
                    brackets = args.shift();
                    o = -1;
                    nextDigit = firstDigit;
                    signBeforeBrackets = sign;
                    continue;
                } else {
                    if (o === 0) {
                        firstDigit = args.shift();
                    } else {
                        secondDigit = args.shift();
                    }
                }
            } 
        }
    console.log(sum.toFixed(2));
}
numsCount(['=']);