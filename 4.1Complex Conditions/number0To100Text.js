function numberTo100(num) {
    num = Number(num);
    let numTo19 = ['zero','one','two','three','four','five','six','seven','eight','nine','ten',
'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let firstNum = parseInt(num / 10);
    let secondNum = parseInt(num % 10);
    let answer = ['zero','one','twenty','thirty','forty','fifty','sixty','seventy',
            'eighty','ninety','one hundred'];
    if (num < 20 && num >= 0) {
        let i = num;
        console.log(numTo19[i]);
    } else if (num == 20 || num == 30 || num == 40 || num == 50 || num == 60 
        || num == 70 || num == 80 || num == 90 || num == 100) {
            console.log(answer[firstNum]);
        } else if (num < 0 || num > 100) {
            console.log('invalid number');
        }
        else {
            console.log(answer[firstNum] + ' ' + numTo19[secondNum]);
        }
}
numberTo100(-102)