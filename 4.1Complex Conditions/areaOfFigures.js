function areaOfFigures([arg1,arg2,arg3]) {
    if (arg1 === 'square') {
        console.log(arg2 * arg2);
    } if (arg1 === 'rectangle') {
        console.log(arg2 * arg3);
    } if (arg1 === 'circle') {
        let circleArea = Math.PI * arg2 * arg2;
        console.log(circleArea.toFixed(3));
    } if (arg1 === 'triangle') {
        console.log((0.5 * arg2) * arg3);
    }
}

areaOfFigures(['triangle',4.5,20])