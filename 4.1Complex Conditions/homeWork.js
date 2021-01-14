function solve([start,end,magic]) {
    let counter = 0;
    let finish = false;
    for (let i = start; i <= end; i++) {
        if (finish == true) {
            break;
        }
        for (let o = start; o <= end; o++) {
            counter++;
            if (i + o == magic) {
                console.log(`Combination N:${counter} (${i} + ${o} = ${magic})`);
                finish = true;
                break;
            }
        }
    }    
    if (finish == false) {
        console.log(`${counter} combinations - neither equals ${magic}`);
        
    }
}
solve([88,
    888,
    2000])