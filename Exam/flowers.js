function flowers([arg1,arg2,arg3,arg4,arg5]) {
    let hrizantemas = Number(arg1);
    let roses = Number(arg2);
    let tulips = Number(arg3);
    let season = arg4;
    let fest = arg5;
    let hrizantemasPrice = 3.75;
    let rosesPrice = 4.5;
    let tulipsPrice = 4.15;
    switch (season) {
        case 'Spring': hrizantemasPrice = 2; rosesPrice = 4.1; tulipsPrice = 2.5; break;
        case 'Summer': hrizantemasPrice = 2; rosesPrice = 4.1; tulipsPrice = 2.5; break;
    }
    let price = (hrizantemas * hrizantemasPrice) + (roses * rosesPrice) + (tulipsPrice * tulips);
    switch (fest) {
        case 'Y': price *= 1.15;
    }
    if (tulips > 7 && season == 'Spring') {
        price *= 0.95;
    }
    if (roses >= 10 && season == 'Winter') {
        price *= 0.9;
    }
    if ((hrizantemas + roses + tulips) > 20) {
        price *= 0.8;
    }
    price += 2;
    console.log(price.toFixed(2));
}
flowers(3,10,9,'Winter','N')