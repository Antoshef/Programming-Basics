function tennisEquipment(arg1,arg2,arg3) {
    let tennisRocketPrice = Number(arg1);
    let rockets = Number(arg2);
    let shoes = Number(arg3);

    let shoesPrice = tennisRocketPrice / 6;
    let allRocketsPrice = rockets * tennisRocketPrice;
    let allShoesPrice = shoes * shoesPrice;

    let allExpences = (allRocketsPrice + allShoesPrice);
    let extraEquipment = 0.2 * allExpences;

    let djokovicExpences = ((allRocketsPrice + allShoesPrice + extraEquipment) * (1 / 8));
    let sponsorsExpences = ((allRocketsPrice + allShoesPrice + extraEquipment) * (7 / 8));

    console.log(`Price to be paid by Djokovic ${Math.floor(djokovicExpences)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsExpences)}`);

}
tennisEquipment(850,4,2)