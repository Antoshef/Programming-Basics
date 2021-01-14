function shopping([arg1,arg2,arg3]) {
    let fruit = arg1.toLowerCase();
    let day = arg2.toLowerCase();
    let piece = Number(arg3);

    if (day === 'saturday' || day === 'sunday') {
        if (fruit === 'banana') {
            console.log((2.7 * piece).toFixed(2));
        } if (fruit === 'apple') {
            console.log((1.25 * piece).toFixed(2));
        } if (fruit === 'orange') {
            console.log((0.9 * piece).toFixed(2));
        } if (fruit === 'grapefruit') {
            console.log((1.6 * piece).toFixed(2));
        } if (fruit === 'kiwi') {
            console.log((3 * piece).toFixed(2));
        } if (fruit === 'pineapple') {
            console.log((5.6 * piece).toFixed(2));
        } if (fruit === 'grapes') {
            console.log((4.2 * piece).toFixed(2));
        } else if (fruit != 'banana' && fruit != 'apple' && fruit != 'orange' && fruit != 'grapefruit' &&
         fruit != 'kiwi' && fruit != 'pineapple' && fruit != 'grapes') {
            console.log('error');
        }
    } else if (day === 'monday' || day === 'tuesday' ||
     day === 'wednesday' || day === 'thursday' || day === 'friday') {
        if (fruit === 'banana') {
            console.log((2.5 * piece).toFixed(2));
        } if (fruit === 'apple') {
            console.log((1.2 * piece).toFixed(2));
        } if (fruit === 'orange') {
            console.log((0.85 * piece).toFixed(2));
        } if (fruit === 'grapefruit') {
            console.log((1.45 * piece).toFixed(2));
        } if (fruit === 'kiwi') {
            console.log((2.7 * piece).toFixed(2));
        } if (fruit === 'pineapple') {
            console.log((5.5 * piece).toFixed(2));
        } if (fruit === 'grapes') {
            console.log((3.85 * piece).toFixed(2));
        } else if (fruit != 'banana' && fruit != 'apple' && fruit != 'orange' && fruit != 'grapefruit' &&
        fruit != 'kiwi' && fruit != 'pineapple' && fruit != 'grapes') {
           console.log('error');
       }
    } else {
        console.log('error');
    }
}

shopping(['bananaa','amonday',2.2])