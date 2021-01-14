function numTo100(arg1) {
    let num = Number(arg1);
    let numToNineteen = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven',
            'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

        if (num < 20) {
    console.log(numToNineteen[num - 1]);
        } else if (num <= 100 && num > 19) {
            if (num / 10 === 3) {
        
                var deset = 'twenty'
            }
        }   console.log(deset)
}

numTo100(31)