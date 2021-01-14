function swimmingPool([arg1,arg2,arg3,arg4]) {
    let v = parseInt(arg1);
    let p1 = parseInt(arg2);
    let p2 = parseInt(arg3);
    let h = parseFloat(arg4);

    let v1 = (p1 + p2) * h;
    if (v1 <= v) {
    var whole = 100 * (v1 / v);
    var allp1 = 100 * (p1 / v1) * h;
    var allp2 = 100 * (p2 / v1) * h;
    console.log(`The Pool is ${Math.trunc(whole)}% full.
        Pipe 1: ${Math.trunc(allp1)}%.
        Pipe 2: ${Math.trunc(allp2)}%`);
    } else {
        console.log(`For ${h} hours the pool overflows with ${v1 - v} liters.`);
    }
}   

swimmingPool([1000,100,120,3])