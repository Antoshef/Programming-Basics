function alcoholMarket(arg1,arg2,arg3,arg4,arg5) {
    let wiskeyPrice = Number(arg1);
    let beer = Number(arg2);
    let wein = Number(arg3);
    let rakia = Number(arg4);
    let wiskey = Number(arg5);

    let rakiaPrice = wiskeyPrice * 0.5;
    let weinPrice = rakiaPrice * 0.6;
    let beerPrice = rakiaPrice * 0.2;

    console.log(((beerPrice * beer) + (wiskeyPrice * wiskey) + 
    (rakiaPrice * rakia) + (wein * weinPrice)).toFixed(2));
}

alcoholMarket(63.44,3.57,6.35,8.15,2.5)