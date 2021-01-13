function exampleCoins(input) {
    let numberOfchange = 0;
    input = Number(input);
    let change = input * 100;
    if (change >= 200) {
        numberOfchange += Math.floor(change / 200);
        change = change % 200;
    }
    if (change >= 100) {
        numberOfchange += Math.floor(change / 100);
        change = change % 100;
    }
    if (change >= 50) {
        numberOfchange += Math.floor(change / 50);
        change = change % 50;
    }
    if (change >= 20) {
        numberOfchange += Math.floor(change / 20);
        change = change % 20;
    }
    if (change >= 10) {
        numberOfchange += Math.floor(change / 10);
        change = change % 10;
    }
    if (change >= 5) {
        numberOfchange += Math.floor(change / 5);
        change = change % 5;
    }
    if (change >= 2) {
        numberOfchange += Math.floor(change / 2);
        change = change % 2;
    }
    if (change >= 1) {
        numberOfchange += Math.floor(change / 1);
        change = change % 1;
    }
    console.log(numberOfchange);
}
exampleCoins(2.73)