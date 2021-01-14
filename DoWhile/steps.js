function walkSteps(input) {
    let steps = 0;
    let goingHome = false;
    while (steps < 10000 && goingHome == false) {
        let current = input.shift();
        if (current === 'Going home') {
            goingHome = true;
            steps += Number(input.shift());
        } else {
            steps += Number(current);
        }
    }
    if (steps < 10000) {
        console.log(`${10000 - steps} more steps to reach goal.`);
    } else {
        console.log('Goal reached! Good job!');
    }
}
walkSteps([1500,
    3000,
    250,
    1548,
    2000,
    'Going home'
    2000,
    
    ])