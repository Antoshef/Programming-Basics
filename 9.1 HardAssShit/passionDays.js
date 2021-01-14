function passionDays(args) {
    let money = Number(args[0]);
    let enter = false;
    let count = 0;
    for (let i = 1; i <= args.length; i++) {
        var current = args[i];
        if (current == 'mall.Exit') {
            break;
        } else if (current == 'mall.Enter') {
            enter = true;
        } else if (enter == true) {
            let char = current.charCodeAt();
            if (char <= 31 || char >= 127) {
                if (money >= char) {
                money -= char;
                count++;
                continue;
                } else {
                    continue;
                }
            }
            current = current.split('');
            for (let o = 0; o < current.length; o++) {
                let num = current[o].charCodeAt();
                let currentMoney = money;
                if (num >= 65 && num <= 90) {
                    money -= (num / 2);
                    count++;
                    if (money < 0) {
                        money = currentMoney;
                        count--;
                    }
                } else if (num >= 97 && num <= 122) {
                    money -= (num * 0.3);
                    count++;
                    if (money < 0) {
                        money = currentMoney;
                        count--;
                    }
                } else if (num === 37) {
                    money /= 2;
                    count++;
                    if (money <= 0) {
                        money = currentMoney;
                        count--;
                    }
                } else if (num === 42) {
                    money += 10;
                } else {
                    money -= num;
                    count++;
                    if (money < 0) {
                        money = currentMoney;
                        count--;
                    }
                }
            }
        }
    }
    if (count == 0) {
        console.log(`No purchases. Money left: ${money.toFixed(2)} lv.`);
    } else {
        console.log(`${count} purchases. Money left: ${money.toFixed(2)} lv.`);
    }   
}
passionDays(['80.15','dwq', 'mall.Enter','a****a2','mall.Exit', 'fqw'])