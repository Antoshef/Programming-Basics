function sleepingTom([rest]) {
    let maxPlay = 30000;
    let workDays = (365 - rest) * 63;
    let restDays = rest * 127;
    let tomPlay = workDays + restDays;

    if (tomPlay > maxPlay) {
        let more = tomPlay - maxPlay;
        let h = more / 60;
        let exact = Math.floor(h);
        min = exact * 60;
        let minutes = more - min;

        console.log('Tom will run away');
        console.log(`${exact} hours and ${minutes} minutes more for play`);
    } else {
        let more = maxPlay - tomPlay;
        let h = more / 60;
        let exact = Math.floor(h);
        min = exact * 60;
        let minutes = more - min;

        console.log('Tom sleeps well');
        console.log(`${exact} hours and ${minutes} minutes less for play`)
    }
  
}

sleepingTom([58])