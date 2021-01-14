function journey(budjet,season) {
    budjet = Number(budjet);
    season = season.toLowerCase();
    let country = '';
    let price = 0;
    let place = 'Hotel'

    switch (season) {
        case 'summer':
            if (budjet <= 100) {
                country = 'Bulgaria';
                price = budjet * 0.3;
                place = 'Camp';
            } else if (budjet <= 1000) {
                country = 'Balkans';
                price = budjet * 0.4;
                place = 'Camp';
            } else {
                country = 'Europe';
                price = budjet * 0.9;
            }
            break;
        case 'winter':
            if (budjet <= 100) {
                country = 'Bulgaria';
                price = budjet * 0.7;
            } else if (budjet <= 1000) {
                country = 'Balkans';
                price = budjet * 0.8;
            } else {
                country = 'Europe';
                price = budjet * 0.9;
            }
            break;
    }
    console.log(`Somewhere in ${country}`);
    console.log(`${place} - ${price.toFixed(2)}`);
}
journey(1500,'summer')