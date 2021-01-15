function pointOnLine([first,second,point]) {
    first = Number(first);
    second = Number(second);
    point = Number(point);
    let left = Math.min(first,second);
    let right = Math.max(first,second);
    if (point >= left && point <= right) {
        console.log('In');
    } else {
        console.log('Out');
    }
    let distanceOne = Math.abs(left - point);
    let distanceTwo = Math.abs(right - point);
    let result = Math.min(distanceOne,distanceTwo);
    console.log(result);
}
pointOnLine([1,-2,3])