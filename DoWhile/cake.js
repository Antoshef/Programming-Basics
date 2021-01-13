function cake(input) {
    let l = Number(input.shift());
    let w = Number(input.shift());
    let area = l * w;
    let sum = 0;
    while (sum <= area) {
        let current = input.shift();
        if (current === 'STOP') {
            break;
        }
        sum += Number(current);
    }
    if (sum > area) {
        console.log(`No more cake left! You need ${sum - area} pieces more.`);
    } else {
        console.log(`${area - sum} pieces are left.`)
    }
}
cake([10,
    2,
    2,
    4,
    6,
    'STOP'
    
    ])