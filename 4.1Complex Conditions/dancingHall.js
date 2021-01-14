function clarityCampaign(arg1,arg2,arg3,arg4,arg5) {
    let days = Number(arg1);
    let cookers = Number(arg2);
    let cake = Number(arg3);
    let gofret = Number(arg4);
    let pancake = Number(arg5);

    let allCakePrice = days * cookers * cake * 45;
    let allGofretPrice = days * cookers * gofret * 5.8;
    let allPancakePrice = days * cookers * pancake * 3.2;
    let result = allCakePrice + allGofretPrice + allPancakePrice;
    let all = result * (1 - 0.125);

    console.log(all.toFixed(2));
}

clarityCampaign(131,5,9,33,46)