function magicNumber(arg) {
    const n = Number(arg);
    let result = '';
    for (var s1 = 1; s1 <= 9; s1++) {
        for (var s2 = 1; s2 <= 9; s2++) {
            for (var s3 = 1; s3 <= 9; s3++) {
                for (var s4 = 1; s4 <= 9; s4++) {
                    for (var s5 = 1; s5 <= 9; s5++) {
                        for (var s6 = 1; s6 <= 9; s6++) {
                            if (s1 * s2 * s3 * s4 * s5 * s6 == n) {
                                result += `${s1}${s2}${s3}${s4}${s5}${s6} `;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}
magicNumber(38)