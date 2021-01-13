function solve([n]) {
    n = Number(n);
    function printHeader(n) {
    console.log('-'.repeat(2 * n));
    }
    function printBody(n) {
        if (n > 2) {

        let end = n - 2;
        // if (n % 2 == 1) {
        //     end = Math.ceil(n / 2);
        // }
        for (let i = 0; i < end; i++) {
            let line = '-';
            line += '\\/'.repeat(n - 1);
            line += '-';
            console.log(line);
        }
        }
    }
    function printFooter(n) {
    console.log('-'.repeat(2 * n));
    }

    printHeader(n)
    printBody(n)
    printFooter(n)
    }

solve([3])