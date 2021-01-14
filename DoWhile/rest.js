function rest(input) {
    let excursionMoney = Number(input.shift());
    let currentMoney = Number(input.shift());
    let spendDays = 0;
    let daysCounter = 0;
    while (currentMoney < excursionMoney && spendDays < 5) {
        let command = input.shift();
        let money = Number(input.shift());
        if (command === 'spend') {
            currentMoney -= money;
            spendDays++;
            if (currentMoney < 0) {
                currentMoney = 0;
            }
        } else {
            currentMoney += money;
            spendDays = 0;
        }
        daysCounter++;
    }
    if (spendDays == 5) {
        console.log(`You can't save the money.`);
        console.log(daysCounter);
    } 
    if (currentMoney >= excursionMoney) {
        console.log(`You saved the money for ${daysCounter} days.`)
    }
}
rest([110,
    60,
    'spend',
    10,
    'spend',
    10,
    'spend',
    10,
    'spend',
    10,
    'spend',
    10
    
    ])