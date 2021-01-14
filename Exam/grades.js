function grades(arg) {
    let students = Number(arg[0]);
    let under3 = 0;
    let under4 = 0;
    let under5 = 0;
    let under6 = 0;
    let averageGrade = 0;
    for (let i = 1; i <= students; i++) {
        let currentGrade = Number(arg[i]);
        averageGrade += currentGrade;
        if (currentGrade < 3) {
            under3++;
        } else if (currentGrade < 4) {
            under4++;
        } else if (currentGrade < 5) {
            under5++;
        } else  {
            under6++;
        }
    }
    let under3Perc = ((under3 / students) * 100).toFixed(2);
    let under4Perc = ((under4 / students) * 100).toFixed(2);
    let under5Perc = ((under5 / students) * 100).toFixed(2);
    let under6Perc = ((under6 / students) * 100).toFixed(2);
    averageGrade = (averageGrade / students).toFixed(2)
    console.log(`Top students: ${under6Perc}%`);
    console.log(`Between 4.00 and 4.99: ${under5Perc}%`);
    console.log(`Between 3.00 and 3.99: ${under4Perc}%`);
    console.log(`Fail: ${under3Perc}%`);
    console.log(`Average: ${averageGrade}`);
}
grades([6,2,3,4,5,6,2.2])