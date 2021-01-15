function magicNumber(arg) {
    const n = Number(arg);
    let s1, s2, s3, s4, s5, s6;
    let result = '';
    s1 = 1;
    while (s1 < 10) {
        s2 = 1;
    while (s2 < 10) {
        s3 = 1;
    while (s3 < 10) {
        s4 = 1;
        while (s4 < 10) {
            s5 = 1;
            while (s5 < 10) {
                s6 = 1;
                while (s6 < 10) {
                    if (s1 * s2 * s3 * s4 * s5 * s6 == n) {
                      result += `${s1}${s2}${s3}${s4}${s5}${s6} `;
                    }
                    s6++;
                }
                s5++;
            }
            s4++;
        }
        s3++;
    } 
    s2++;
    } 
    s1++;
    }
    console.log(result); 
}
magicNumber(6)