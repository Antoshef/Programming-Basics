function fiveSpecialNums([start, end]) {
    start = Number(start);
    end = Number(end);
    let weight = '';
    let points = 0;
    let lastIndex = 0;   
    let result = '';
    let answer = false;
    for (d1 = 97; d1 <= 101; d1++) {
        var d1Letter = String.fromCharCode(d1);

        for (d2 = 97; d2 <= 101; d2++) {
            var d2Letter = String.fromCharCode(d2);

            for (d3 = 97; d3 <= 101; d3++) {
                var d3Letter = String.fromCharCode(d3);

                for (d4 = 97; d4 <= 101; d4++) {
                    var d4Letter = String.fromCharCode(d4);

                    for (d5 = 97; d5 <= 101; d5++) {
                        var d5Letter = String.fromCharCode(d5);
                        let score = 0;    
                        weight = (d1Letter + d2Letter + d3Letter + d4Letter + d5Letter);
                        weight = weight.split('');

                        if (d5Letter == d4Letter || d5Letter == d3Letter || d5Letter == d2Letter ||
                            d5Letter == d1Letter) {
                                lastIndex = weight.lastIndexOf(d5Letter);
                                delete weight[lastIndex];
                            }
                        if (d4Letter == d3Letter || d4Letter == d2Letter || d4Letter == d1Letter) {
                                lastIndex = weight.lastIndexOf(d4Letter);
                                delete weight[lastIndex];
                            }
                        if (d3Letter == d2Letter || d3Letter == d1Letter) {
                                lastIndex = weight.lastIndexOf(d3Letter);
                                delete weight[lastIndex];
                            }
                        if (d2Letter == d1Letter) {
                                lastIndex = weight.lastIndexOf(d2Letter);
                                delete weight[lastIndex];   
                            }    
                        
                            weight = weight.filter(Boolean);
                            for (let i = 0; i < weight.length; i++) {
                                let currentLetter = weight[i];
                                switch (currentLetter) {
                                    case 'a': points = 5; break
                                    case 'b': points = -12; break
                                    case 'c': points = 47; break
                                    case 'd': points = 7; break
                                    case 'e': points = -32; break
                                }
                                score += points * (i + 1);
                            }
                        if (score >= start && score <= end) {
                            weight = (d1Letter + d2Letter + d3Letter + d4Letter + d5Letter);
                            result += weight + ' ';
                            answer = true;
                        }
                    }
                }
            }
        }
    }
    if (answer == true) {
    console.log(result.trim());
    } else {
        console.log('No');
    }
}
fiveSpecialNums(['40', '42'])