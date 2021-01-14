function beehiveDefence(beesCount,bearHealt,bearAttack) {
    beesCount = parseInt(beesCount);
    bearHealt = parseInt(bearHealt);
    bearAttack = parseInt(bearAttack);
    let currentBees = beesCount;
    let currentHealt = bearHealt;

    while (currentBees > 99) {
        currentBees -= bearAttack;
        if (currentBees < 0) {
            currentBees = 0;
        }
        currentHealt -= (currentBees * 5);
        if (currentHealt <= 0) {
            break;
        }
    }
    if (currentBees > 100) {
        console.log(`Beehive won! Bees left ${currentBees}.`);
    } else {
        console.log(`The bear stole the honey! Bees left ${currentBees}.`);
    }
}
beehiveDefence(200,10000,300)