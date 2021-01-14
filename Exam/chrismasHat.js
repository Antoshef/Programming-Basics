function chrismasHat([n]) {
    n = Number(n);
    let topWide = (n * 2) - 1;
    console.log('.'.repeat(topWide) + '/' + '|' + '\\' + '.'.repeat(topWide));
    console.log('.'.repeat(topWide) + '\\' + '|' + '/' + '.'.repeat(topWide));
    console.log('.'.repeat(topWide) + '***' + '.'.repeat(topWide));
    for (let row = 1; row <= topWide;row++) {
        let line = '';
        line += '.'.repeat(topWide - row);
        line += '*';
        line += '-'.repeat(row);
        line += '*';
        line += '-'.repeat(row);
        line += '*';
        line += '.'.repeat(topWide - row);
        console.log(line);
    }
    console.log('*'.repeat((topWide * 2) + 3));
    console.log('*.'.repeat(n * 2) + '*');
    console.log('*'.repeat((topWide * 2) + 3));
}
chrismasHat([4])