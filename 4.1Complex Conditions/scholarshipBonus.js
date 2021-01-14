function scolarship(arg1, arg2, arg3) {
    let profit = Number(arg1);
    let value = Number(arg2);
    let averageSalary = Number(arg3);
    let bonusExcellent = false;
    let bonusSocial = false;

    if (value >= 5.5) {
        bonusExcellent = true;
        var excellentBonus = value * 25;
    } if (profit < averageSalary && value > 4.5) {
        bonusSocial = true;
        var socialBonus = averageSalary * 0.35;
    }
    if (bonusSocial == true && bonusExcellent == true) {
        if (excellentBonus >= socialBonus) {
            console.log('You get a scholarship for excellent results ' + Math.floor(excellentBonus) + ' BGN');
        } else {
            console.log('You get a Social scholarship ' + Math.floor(socialBonus) + ' BGN');
        }
    } else if (bonusSocial == true && bonusExcellent == false) {
    console.log('You get a Social scholarship ' + Math.floor(socialBonus) + ' BGN');
    } else if (bonusSocial == false && bonusExcellent == true) {
        console.log('You get a scholarship for excellent results ' + Math.floor(excellentBonus) + ' BGN');
    } else {
    console.log('You cannot get a scholarship!');
    }
}
scolarship(['860.00', '4.20', '1000.00'])