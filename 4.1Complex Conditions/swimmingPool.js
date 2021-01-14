function swimmingPool([volume,pipe1,pipe2,hours]) {
    let water = (pipe1 + pipe2) * hours;

    if (water <= volume) {
        console.log(`The pool is ${Math.trunc(100 * (water / volume))}% full.
        Pipe 1: ${Math.trunc(100 * (pipe1 / water * hours))}%.
        Pipe 2: ${Math.trunc(100 * (pipe2 / water * hours))}%`);
    } else {
        console.log(`For ${hours} hours the pool overflows with ${water - volume} liters.`);
    }
}   

swimmingPool([100,100,100,2.5])