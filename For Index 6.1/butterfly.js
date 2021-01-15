function butterfly(n) {
    n = Number(n);
    let bodyRow = n - 2;
    for (let row = 1; row <= bodyRow; row++) {
        let leftFeather = '';
        let rightFeather = '';
        if (row % 2 == 1) {
            leftFeather = '*'.repeat(n - 2) + '\\';
            rightFeather = '/' + '*'.repeat(n - 2);
        } else {
            leftFeather = '-'.repeat(n - 2) + '\\';
            rightFeather = '/' + '-'.repeat(n - 2);
        }
        console.log(leftFeather + ' ' + rightFeather);
    }
    console.log(' '.repeat(n - 1) + '@');
    for (let row = 1; row <= bodyRow; row++) {
        let leftFeather = '';
        let rightFeather = '';
        if (row % 2 == 1) {
            leftFeather = '*'.repeat(n - 2) + '/';
            rightFeather = '\\' + '*'.repeat(n - 2);
        } else {
            leftFeather = '-'.repeat(n - 2) + '/';
            rightFeather = '\\' + '-'.repeat(n - 2);
        }
        console.log(leftFeather + ' ' + rightFeather);
    }
}
butterfly(8)