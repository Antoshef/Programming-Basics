function energyGel([arg1,arg2,arg3]) {
    let fruit = arg1.toLowerCase();
    let size = arg2.toLowerCase();
    let order = Number(arg3);
    let price = 0.00;

    switch (fruit) {
        case 'watermelon':
           if (size === 'small') {
            price = 112;
        } else if (size === 'big') {
            price = 143.5;
        } break ;
        case 'mango': 
            if (size === 'small') {
            price = 73.32;
        } else if (size === 'big') {
            price = 98;
        } break;
        case 'pineapple':
        if (size === 'small') {
            price = 84.2;
        } else if (size === 'big') {
            price = 124;
        } break;
        case 'raspberry':
        if (size === 'small') {
            price = 40;
        } else if (size === 'big') {
            price = 76;
        } break;
    } 
    let result = price * order;
    if (result > 1000) {
        result = result * 0.5;
    } else if (result >= 400) {
        result = result * 0.85;
    } else {
        result = result;
    } console.log(result.toFixed(2) + ' lv.');
} 
energyGel(['Watermelon','big','6'])