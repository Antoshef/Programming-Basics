function changeTiles([arg1,arg2,arg3,arg4,arg5,arg6,arg7]) {
    let budjet = Number(arg1);
    let floorWidth = Number(arg2);
    let floorLength = Number(arg3);
    let a = Number(arg4);
    let h = Number(arg5);
    let tilePrice = Number(arg6);
    let workerSalary = Number(arg7);
    let floorArea = floorLength * floorWidth;
    let tileArea = (a * h) / 2;
    let tilesNeeded = Math.ceil(floorArea / tileArea);
    tilesNeeded += 5;
    let moneyForTiles = tilesNeeded * tilePrice;
    let result = (moneyForTiles + workerSalary);
    if (budjet >= result) {
        console.log((budjet - result).toFixed(2) + ' lv left.');
    } else {
        console.log("You'll need " + (result - budjet).toFixed(2) + ' lv more.');
    }
}
changeTiles([1000,5.55,8.95,0.9,0.85,13.99,321])