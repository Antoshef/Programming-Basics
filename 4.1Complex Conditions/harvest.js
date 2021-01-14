function schoolMaterials(arg1,arg2,arg3,arg4) {
    let himikali = parseInt(arg1);
    let markeri = parseInt(arg2);
    let preparat = parseFloat(arg3);
    let discount = parseInt(arg4);

    let tax = discount * 0.01;

    let result = (himikali * 5.8) + (7.2 * markeri) + (preparat * 1.2);
    let disc = result * (1 - tax);
    console.log(disc.toFixed(3));
}

schoolMaterials('7','8','0.5','45')