function increasing([a, b]) {
    b = Number(b);
    a = Number(a);
    for (let s1 = a; s1 <= b; s1++) {
        for (let s2 = a; s2 <= b; s2++) {
            for (let s3 = a; s3 <= b; s3++) {
                for (let s4 = a; s4 <= b; s4++) {
                    if (s1 < s2 && s2 < s3 && s3 < s4) {
                        console.log(`${s1} ${s2} ${s3} ${s4}`);
                    } else {
                        console.log('no');
                    }
                }
            }
        }
    }
}
increasing(3, 7)