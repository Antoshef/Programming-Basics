function graduation(input) {
    let name = input[0];
    let grades = 0;
    let average = 0;
    let sum = 0;
    let rerow = 0;
    for (let i = 1; i <= input.length; i++) {
        let currentGrade = Number(input[i]);
        if (currentGrade >= 4) {
            sum += currentGrade;
            grades++;
        } else if (currentGrade < 4) {
            rerow++;
        } 
        if (rerow > 1) {
            grades++;
            break;
        }
    }
    average = (sum / grades).toFixed(2);
    if (rerow > 1) {
        console.log(`${name} has been excluded at ${grades} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${average}`);
    }
}
graduation(['Mimi',
5,
6,
5,
6,
5,
6,
6,
2,
3,

      ])