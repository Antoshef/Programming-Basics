function moving(input) {
    let l = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let capacity = l * w * h;
    let boxes = 0;
    let result = '';
    for (let i = 3; i < input.length; i++) {
        let num = input[i];
        if (num === 'Done') {
            break;
        }
        let currentBox = Number(input[i]);
        boxes += currentBox;
        result = `${(capacity - boxes)} Cubic meters left.`;
        if (boxes > capacity) {
            result = `No more free space! You need ${Math.abs(capacity - boxes)} Cubic meters more.`;
            break;
        }
    }
    console.log(result);
}
moving([10,
    1,
    2,
    4,
    6,
    'Done'
    
    ])