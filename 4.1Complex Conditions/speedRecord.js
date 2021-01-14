function energyGel(arg1,arg2,arg3) {
    let fruit = arg1;
    let size = arg2;
    let order = parseInt(arg3);

    let mangoSmall = 2 * 36.66;
    let watermellonSmall = 2 * 56;
    let pineappleSmall = 2 * 42.1;
    let raspberrySmall = 2 * 20;

    let mangoBig = 5 * 19.6;
    let watermellongBig = 5 * 28.7;
    let pineappleBig = 5 * 24.8;
    let raspberryBig = 5 * 15.2;

    if (fruit === 'Watermellon') {
        if (size === 'small') {
            let price = watermellonSmall;
            if (price * order < 400) {
                console.log(`${(price * order).toFixed(2)} lv.`);
            }
                else if (price * order >= 400 && price * order < 1000) {
                console.log(`${(price * order * (1 - 0.15)).toFixed(2)} lv.`);
            }   else if (price * order > 999) {
                console.log(`${(price * order * 0.5).toFixed(2)} lv.`);
            }
        } else if (size === 'big') {
            let price = watermellongBig;
            if (price * order < 400) {
                console.log(`${(price * order).toFixed(2)} lv.`);
            }
                else if (price * order >= 400 && price * order < 1000) {
                console.log(`${(price * order * (1 - 0.15)).toFixed(2)} lv.`);
            }   else if (price * order > 999) {
                console.log(`${(price * order * 0.5).toFixed(2)} lv.`);
            }
        }
    }

     else if (fruit === 'Mango') {
        if (size === 'small') {
            let price = mangoSmall;
            if (price * order < 400) {
                console.log(`${(price * order).toFixed(2)} lv.`);
            }
                else if (price * order >= 400 && price * order < 1000) {
                console.log(`${(price * order * (1 - 0.15)).toFixed(2)} lv.`);
            }   else if (price * order > 999) {
                console.log(`${(price * order * 0.5).toFixed(2)} lv.`);
            }
        } else if (size === 'big') {
            let price = mangoBig;
            if (price * order < 400) {
                console.log(`${(price * order).toFixed(2)} lv.`);
            }
                else if (price * order >= 400 && price * order < 1000) {
                console.log(`${(price * order * (1 - 0.15)).toFixed(2)} lv.`);
            }   else if (price * order > 999) {
                console.log(`${(price * order * 0.5).toFixed(2)} lv.`);
            }
        }
}  else if (fruit === 'Pineapple') {
        if (size === 'small') {
            let price = pineappleSmall;
            if (price * order < 400) {
                console.log(`${(price * order).toFixed(2)} lv.`);
            }
                else if (price * order >= 400 && price * order < 1000) {
                console.log(`${(price * order * (1 - 0.15)).toFixed(2)} lv.`);
            }   else if (price * order > 999) {
                console.log(`${(price * order * 0.5).toFixed(2)} lv.`);
            }
        } else if (size === 'big') {
            let price = pineappleBig;
            if (price * order < 400) {
                console.log(`${(price * order).toFixed(2)} lv.`);
            }
                else if (price * order >= 400 && price * order < 1000) {
                console.log(`${(price * order * (1 - 0.15)).toFixed(2)} lv.`);
            }   else if (price * order > 999) {
                console.log(`${(price * order * 0.5).toFixed(2)} lv.`);
            }
        }
}   else if (fruit === 'Raspberry') {
        if (size === 'small') {
            let price = raspberrySmall;
            if (price * order < 400) {
                console.log(`${(price * order).toFixed(2)} lv.`);
            }
                else if (price * order >= 400 && price * order < 1000) {
                console.log(`${(price * order * (1 - 0.15)).toFixed(2)} lv.`);
            }   else if (price * order > 999) {
                console.log(`${(price * order * 0.5).toFixed(2)} lv.`);
            }
        } else if (size === 'big') {
            let price = raspberryBig;
            if (price * order < 400) {
                console.log(`${(price * order).toFixed(2)} lv.`);
            }
                else if (price * order >= 400 && price * order < 1000) {
                console.log(`${(price * order * (1 - 0.15)).toFixed(2)} lv.`);
            }   else if (price * order > 999) {
                console.log(`${(price * order * 0.5).toFixed(2)} lv.`);
            }
        }
    

    }
}

energyGel('Watermellon','big',4)