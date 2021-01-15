function pointInFigure([x,y]) {
    x = Number(x);
    y = Number(y);
    let centerFigure = (x >= 2 && x <= 12) && (y >= -3 && y <= 1);
    let upperFigure = (x >= 4 && x <= 10) && (y >= -5 && y <= 3);
    if (centerFigure || upperFigure) {
        console.log('in');
    } else {
        console.log('out');
    }
}
pointInFigure([11,2])