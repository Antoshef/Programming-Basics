function equalTwoNumbers(entry) {
    let n = Number(entry[0]);
    let maxDiff = 0;
    let answer = '';

    if (n > 0) {
        var sumOne = 0;
            for (var i = 1; i <= 2 ;i++) {
                let currentNumber = Number(entry[i]);
                sumOne += currentNumber;
                maxDiff = sumOne;
                answer = 'Yes, value=' + maxDiff;
        } 
    } if (n > 1) {
        var sumTwo = 0;
        for (var t = 3; t < 5; t++) {
            currentNumber = Number(entry[t]);
            sumTwo += currentNumber;
            if (sumOne != sumTwo) {
                maxDiff = Math.abs(sumTwo - sumOne);
                answer = 'No, maxdiff=' + maxDiff; 
            } else {
                maxDiff = sumTwo;
            }
        } 
    } if (n > 2) {
        var sumThree = 0;
        for (var y = 5; y < 7; y++) {
            currentNumber = Number(entry[y]);
            sumThree += currentNumber;
            if (sumOne == sumTwo && sumOne == sumThree) {
                maxDiff = sumTwo;
                answer = 'Yes, value=' + maxDiff;
            } else {
                var max = 0;
                var min = 0;
                max = Math.max(sumOne,sumTwo,sumThree);
                min = Math.min(sumOne,sumTwo,sumThree);
                maxDiff = (max - min);
                answer = 'No, maxdiff=' + maxDiff; 
            }
        } 
    } if (n > 3) {
        var sumFour = 0;
        for (var q = 7; q < 9; q++) {
            currentNumber = Number(entry[q]);
            sumFour += currentNumber;
            if (sumOne == sumTwo && sumOne == sumThree && sumThree == sumFour) {
                maxDiff = sumTwo;
                answer = 'Yes, value=' + maxDiff;
            } else {
                max = Math.max(sumOne,sumTwo,sumThree,sumFour);
                min = Math.min(sumOne,sumTwo,sumThree,sumFour);
                maxDiff = max - min;
                answer = 'No, maxdiff=' + maxDiff; 
            }
        } 
    }
    console.log(answer);
}
equalTwoNumbers([2,1,2,2,2])