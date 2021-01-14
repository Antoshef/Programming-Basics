function operationBetweenNum([arg1, arg2, arg3]) {
    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let oper = arg3;
    let result = -1;
    let evenOrOdd = '';

    if (oper === '+') {
        result = n1 + n2;
        if (result % 2 === 0) {
            evenOrOdd = '- even';
        } else {
            evenOrOdd = '- odd';
        } console.log(`${n1} ${oper} ${n2} = ${result} ${evenOrOdd}`);
    } else if (oper === '-') {
        result = n1 - n2;
        if (result % 2 === 0) {
            evenOrOdd = '- even';
        } else {
            evenOrOdd = '- odd';
        } console.log(`${n1} ${oper} ${n2} = ${result} ${evenOrOdd}`);
    } else if (oper === '*') {
        result = n1 * n2;
        if (result % 2 === 0) {
            evenOrOdd = '- even';
        } else {
            evenOrOdd = '- odd';
        } console.log(`${n1} ${oper} ${n2} = ${result} ${evenOrOdd}`);
    } else if (oper === '/') {
        result = n1 / n2;
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`)
            } else {
                console.log(`${n1} ${oper} ${n2} = ${result.toFixed(2)}`)
            }
    } else if (oper === '%') {
        result = n1 % n2;
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`)
        } else {
            console.log(`${n1} ${oper} ${n2} = ${result}`);
        }
    }
}

operationBetweenNum(['123','0', '/'])