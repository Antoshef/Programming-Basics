function pointInFigure(arg1,arg2,arg3) {
    let n = Number(arg1);
    let x = Number(arg2);
    let y = Number(arg3);

    let outRectangle1 = (x < 0 || x > 3 * n) || (y < 0 || y > n);
    let outRectangle2 = (x < n || x > 2 * n) || (y < n || y > 4 * n);
    let inRectangle1 = (x > 0 && x < 3* n) && (y > 0 && y < n);
    let inRectangle2 = (x > n && x < 2 * n) && (y > n && y < 4 * n);
    let commonBorder = (x > n && x < 2 * n) && y == n;

    if (outRectangle2 == true && outRectangle1 == true) {
        console.log('outside');
    } else if (inRectangle1 == true || inRectangle2 == true || commonBorder == true) {
        console.log('inside');
    } else {
        console.log('border');
    }
}
pointInFigure('2','3','10')