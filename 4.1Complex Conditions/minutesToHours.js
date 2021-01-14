function sleepy([rest]) {
    let workingDays = 365 - rest;
    let totalPlayMinutes = (workingDays * 63) + (rest * 127);
    let differance = Math.abs(totalPlayMinutes - 30000);
    let hours = Math.floor(differance / 60);
    let minutes = differance % 60;

    console.log(hours)
    console.log(minutes);
}

sleepy([47])