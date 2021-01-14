function hotelComplex(arg1,arg2) {
    let month = arg1.toLowerCase();
    let nights = Number(arg2);
    let studioPrice = 0;
    let appartmentPrice = 0;

    switch (month) {
        case 'may':
            case 'october':
            studioPrice = 50;
            appartmentPrice = 65; break;
        case 'june':
            case 'september':
                studioPrice = 75.2;
                appartmentPrice = 68.7; break;
        case 'july':
            case 'august':
                studioPrice = 76;
                appartmentPrice = 77; break;
    } if (nights > 14) {
        appartmentPrice *= 0.9;
    } if ((nights <= 14 && nights > 7) && (month === 'may' || month === 'october')) {
        studioPrice *= 0.95;
    } else if (nights > 14 && (month === 'may' || month === 'october')) {
        studioPrice *= 0.7;
    } else if (nights > 14 && (month === 'june' || month === 'september')) {
        studioPrice *= 0.8;
    } 
    console.log('Apartment: ' + (appartmentPrice * nights).toFixed(2) + ' lv.');
    console.log('Studio: ' + (studioPrice * nights).toFixed(2) + ' lv.');
}
hotelComplex('may','15')