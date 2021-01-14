function dancingHall(arg1,arg2,arg3) {
    let l = Number(arg1);
    let w = Number(arg2);
    let a = Number(arg3);
    let wardrobe = (a * 100) * (a * 100);
    let area = (l * 100) * (w * 100);
    let bench = area / 10;
    let freeSpace = area - wardrobe - bench;
    let dancers = freeSpace / (40 + 7000);

    console.log(Math.trunc(dancers));
}

dancingHall(50,25,2)