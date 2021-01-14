function distanceWent([arg1,arg2,arg3,arg4]) {
    let speed = Number(arg1);
    let time1 = Number(arg2) / 60;
    let time10 = Number(arg3) / 60;
    let time5 = Number(arg4) / 60;
    let distance1 = speed * time1;
    let distance2 = speed * 1.1 * time10;
    speed = speed * 1.1;
    let distance3 = (speed * 0.95) * time5;
    let distance = distance1 + distance2 + distance3;
    console.log(distance.toFixed(2));
}