function preparation(input) {
    let maxLowGrades = Number(input[0]);
    let length = input.length;
    let lastProblem = '';
    let numberOfProblems = 0;
    let average = 0;
    let sum = 0;
    let lowGrades = 0;
    for (let i = 1; i <= length; i++) {
        if (lowGrades === maxLowGrades) {
            console.log(`You need a break, ${lowGrades} poor grades.`);
        }
        else if (input[i] === 'Enough') {
            console.log(`Average score: ${average.toFixed(2)}`)
            console.log(`Number of problems: ${numberOfProblems}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }
        if (i % 2 == 1) {
            lastProblem = input[i];
            numberOfProblems++;
        } else {
            let currentGrade = Number(input[i]);
            if (currentGrade <= 4) {
                lowGrades++;
            }
            sum += currentGrade;
            average = sum / (i / 2);
        }
    }
}
preparation([2,
    'Income',
    3,
    'Game Info',
    6,
    'Best Player',
    4,
])