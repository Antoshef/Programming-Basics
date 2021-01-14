function tradeCommission([arg1,arg2]){
    let town = arg1.toLowerCase();
    let sale = Number(arg2);
    let commission = -1;

    if (town === 'sofia') {
        if (sale >= 0 && sale <= 500) commission = 0.05;
        else if (sale > 500 && sale <= 1000) commission = 0.07;
        else if (sale > 1000 && sale <= 10000) commission = 0.08;
        else if (sale > 10000) commission = 0.12;
        if (commission >= 0) {
            console.log((sale * commission).toFixed(2))
        } else {
            console.log('error');
        }
    }   else if (town === 'varna') {
        if (sale >= 0 && sale <= 500) commission = 0.045;
        else if (sale > 500 && sale <= 1000) commission = 0.075;
        else if (sale > 1000 && sale <= 10000) commission = 0.1;
        else if (sale > 10000) commission = 0.13;
        if (commission >= 0) {
            console.log((sale * commission).toFixed(2))
        } else {
            console.log('error');
        }
    }   else if (town === 'plovdiv') {
        if (sale >= 0 && sale <= 500) commission = 0.055;
        else if (sale > 500 && sale <= 1000) commission = 0.08;
        else if (sale > 1000 && sale <= 10000) commission = 0.12;
        else if (sale > 10000) commission = 0.145;
        if (commission >= 0) {
            console.log((sale * commission).toFixed(2))
        } else {
            console.log('error');
        }
    } else {
        console.log('error');
    } 
}   

tradeCommission(['sofia',2500])