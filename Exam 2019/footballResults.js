function footballResults(arg1,arg2,arg3) {
    let teamWon = 0;
    let teamLost = 0;
    let teamDraw = 0;

        let result = arg1;
        result = result.split(':');
        let home = Number(result[0]);
        let away = Number(result[1]);
        if (home > away) {
            teamWon++;
        } else if (home < away) {
            teamLost++;
        } else {
            teamDraw++;
        }
        result = arg2;
        result = result.split(':');
        home = Number(result[0]);
        away = Number(result[1]);
        if (home > away) {
            teamWon++;
        } else if (home < away) {
            teamLost++;
        } else {
            teamDraw++;
        }
        result = arg3;
        result = result.split(':');
        home = Number(result[0]);
        away = Number(result[1]);
        if (home > away) {
            teamWon++;
        } else if (home < away) {
            teamLost++;
        } else {
            teamDraw++;
        }

    console.log(`Team won ${teamWon} games.`);
    console.log(`Team lost ${teamLost} games.`);
    console.log(`Drawn games: ${teamDraw}`);
}

footballResults("4:2", "0:3", "1:0")