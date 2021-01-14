function basketballEquipment(arg) {
    let yearlyTax = Number(arg);
    let shoes = 0.6 * yearlyTax;
    let equipment = shoes * 0.8;
    let ball = 0.25 * equipment;
    let accessories = 0.2 * ball;

    let expences = yearlyTax + shoes + equipment + ball + accessories;
    console.log(expences.toFixed(2));

}
basketballEquipment(320)