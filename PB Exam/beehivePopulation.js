function beehivePopulation(startPopulation,years) {
    startPopulation = Number(startPopulation);
    years = Number(years);
    let currentPopulation = startPopulation;
    let newBees = 0;
    let deadBees = 0;
    let beesLost = 0;

    for (let i = 1;i <= years; i++) {
        newBees = Math.trunc(currentPopulation / 10) * 2;
        currentPopulation += newBees;
        if (i % 5 == 0) {
            beesLost = Math.trunc(currentPopulation / 50) * 5;
            currentPopulation -= beesLost;
        }
        deadBees = Math.trunc(currentPopulation / 20) * 2;
        currentPopulation -= deadBees;
    }
    console.log(`Beehive population: ${currentPopulation}`);
}
beehivePopulation(1000,23)