function rectangleWithStars([n]) {
    n = Number(n);
    let rowLength = Math.ceil(n / 2) - 1;
    let colLength = 2 * n;
    console.log('%'.repeat(colLength));
    for (let i = 1 ; i <= rowLength; i++) {
        let body = '';
        body += '%';
        body += ' '.repeat(colLength - 2);
        body += '%';
        console.log(body);
    }
    console.log('%' + ' '.repeat(n - 2) + '**' + ' '.repeat(n - 2) + '%');
    for (let i = 1 ; i <= rowLength; i++) {
        let body = '';
        body += '%';
        body += ' '.repeat(colLength - 2);
        body += '%';
        console.log(body);
    }
    console.log('%'.repeat(colLength));
}
rectangleWithStars([5])