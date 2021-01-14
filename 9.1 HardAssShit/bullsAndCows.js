function bullsAndCows([entry, bulls, cows]) {
    entry = entry.split('');
    bulls = Number(bulls);
    cows = Number(cows);
    let entryOne = entry[0];
    let entryTwo = entry[1];
    let entryThree = entry[2];
    let entryFour = entry[3];
    let currentBulls = 0;
    let currentCows = 0;
    let result = '';
        for (let d1 = 1; d1 < 10; d1++) {
            let currentD1 = d1;
            for (let d2 = 1; d2 < 10; d2++) {
                let currentD2 = d2;
                for (let d3 = 1; d3 < 10; d3++) {
                    let currentD3 = d3;
                    for (let d4 = 1; d4 < 10; d4++) {
                        let currentD4 = d4;
                        // Bulls check

                        if (d1 == entryOne) {
                            currentBulls++;
                            entryOne = 0;
                            d1 = '';
                        }
                        if (d2 == entryTwo) {
                            currentBulls++;
                            entryTwo = 0;
                            d2 = '';
                        }
                        if (d3 == entryThree) {
                            currentBulls++;
                            entryThree = 0;
                            d3 = '';
                        }
                        if (d4 == entryFour) {
                            currentBulls++;
                            entryFour = 0;
                            d4 = '';
                        }
                        // Cows check

                        if (d1 != entryOne && (d1 == entryTwo || d1 == entryThree || d1 == entryFour)) {
                            currentCows++;
                            if (d1 == entryTwo) {
                                entryTwo = 0;
                            } else if (d1 == entryThree) {
                                entryThree = 0;
                            } else if (d1 == entryFour) {
                                entryFour = 0;
                            }
                        }
                        if (d2 != entryTwo && (d2 == entryOne || d2 == entryThree || d2 == entryFour)) {
                            currentCows++;
                            if (d2 == entryOne) {
                                entryOne = 0;
                            } else if (d2 == entryThree) {
                                entryThree = 0;
                            } else if (d2 == entryFour) {
                                entryFour = 0;
                            }
                        }
                        
                        if (d3 != entryThree && (d3 == entryOne || d3 == entryTwo || d3 == entryFour)) {
                            currentCows++;
                            if (d3 == entryOne) {
                                entryOne = 0;
                            } else if (d3 == entryTwo) {
                                entryTwo = 0;
                            } else if (d3 == entryFour) {
                                entryFour = 0;
                            }
                        }
                       
                        if (d4 != entryFour && (d4 == entryOne || d4 == entryTwo || d4 == entryThree)) {
                            currentCows++;
                            if (d4 == entryOne) {
                                entryOne = 0;
                            } else if (d4 == entryTwo) {
                                entryTwo = 0;
                            } else if (d4 == entryThree) {
                                entryThree = 0;
                            }
                        }
                        // result check

                        if (currentBulls === bulls && currentCows === cows) {
                            result += '' + currentD1 + currentD2 + currentD3 + currentD4 + ' ';
                        }
                        // entry reverse
                        
                        currentBulls = 0;
                        currentCows = 0;
                        entryOne = entry[0];
                        entryTwo = entry[1];
                        entryThree = entry[2];
                        entryFour = entry[3];
                        d1 = currentD1;
                        d2 = currentD2;
                        d3 = currentD3;
                        d4 = currentD4;
                    }
                }
            }
        }
    if (result != '') {
    console.log(result.trim());
    } else {
        console.log('No');
    }
}
bullsAndCows(['2228', '2', '1'])