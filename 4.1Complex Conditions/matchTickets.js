function footballTickets([arg1,arg2,arg3]) {
    let budjet = parseFloat(arg1);
    let category = arg2.toLowerCase();
    let people = parseInt(arg3);
    let moneyForFootball = 0.00;
    let difference = 0.00;
    let result = '';

    if (people >= 1 && people <= 4) {
        moneyForFootball = budjet / people * 0.25;
    } else if (people <= 9) {
        moneyForFootball = budjet / people * 0.4;
    } else if (people <= 24) {
        moneyForFootball = budjet / people * 0.5;
    } else if (people < 50) {
        moneyForFootball = budjet / people * 0.6;
    } else if (people >= 50) {
        moneyForFootball = budjet / people * 0.75;
    } if (category === 'normal') {
        difference = moneyForFootball - 249.99;
        if (difference >= 0) {
            result = 'Yes! You have ' + (difference * people).toFixed(2) + ' leva left.';
        } else {
            result = 'Not enough money! You need ' + Math.abs(difference * people).toFixed(2) + ' leva.';
        }
    } else if (category === 'vip') {
        difference = moneyForFootball - 499.99;
        if (difference >= 0) {
            result = 'Yes! You have ' + (difference * people).toFixed(2) + ' leva left.';
        } else {
            result = 'Not enough money! You need ' + Math.abs(difference * people).toFixed(2) + ' leva.';
        }
    } console.log(result)
}   
footballTickets([30000,'vip',49])