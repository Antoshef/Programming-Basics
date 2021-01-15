function chrismasTree([n]) {
    n = Number(n);
    for (let row = 0; row <= n; row++) {
        let line = '';
        let star = '';
        let starRight = '';
        for (let col = 1; col <= n - row; col++) {
            line += ' ';
        }
        for (let col = 0; col <= row - 1; col++) {
            star += '*';
            starRight += '*';
        }
        console.log(line + star + ' | ' + starRight);
    }
}
chrismasTree([4])