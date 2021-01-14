function fishingBoat(bujdet, season, n) {
    bujdet = Number(bujdet);
    season = season.toLowerCase();
    n = Number(n);
    let price = 4200;
    switch (season) {
        case 'spring':
            price = 3000;
            break;
        case 'winter':
            price = 2600;
            break;
    }
    if (n <= 6) {
        price *= 0.9;
    } else if (n <= 11) {
        price *= 0.85;
    } else {
        price *= 0.75;
    }
    if (n % 2 == 0 && season !== 'autumn') {
        price *= 0.95;
    }
    if (bujdet >= price) {
        console.log(`Yes! You have ${(bujdet - price).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(price - bujdet).toFixed(2)} leva.`)
    }
}
fishingBoat(2000, 'Winter', 13)