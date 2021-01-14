function trip([arg1,arg2]) {
    let budjet = parseFloat(arg1);
    let season = arg2.toLowerCase();
    let destinationBulgaria = 100;
    let destinationBalkans = 1000;
    let destinationEurope = 5000;
    let result = -1;
    let type = '';
    let text = 'Somewhere in '
    let destination = '';

    if (budjet <= destinationBulgaria) {
        destination = 'Bulgaria'
        if (season === 'summer') {
            result = budjet * 0.3;
            type = 'Camp - ';
         } else if (season === 'winter') {
            result = budjet * 0.7;
            type = 'Hotel - '; }
    } else if (budjet <= destinationBalkans) {
        destination = 'Balkans'
        if (season === 'summer') {
            result = budjet * 0.4;
            type = 'Camp - ';
         } else if (season === 'winter') {
            result = budjet * 0.8;
            type = 'Hotel - '; }
    } else if (budjet <= destinationEurope) {
        destination = 'Europe'
        result = budjet * 0.9;
        type = 'Hotel - ';
    }
    console.log(text + destination);
    console.log(type + result.toFixed(2));
}

trip([60,'summer'])