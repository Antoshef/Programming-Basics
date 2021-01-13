function printReceip() {
    let printReceipHeader = function printReceipHeader() {
        console.log('CASH RECEIPT');
        console.log('------------------------------');
    }
    let printReceipBody = function printReceipBody() {
        console.log('Charged to____________________');
        console.log('Received by___________________');
    }
    let printReceipFooter = function printReceipFooter() {
        console.log('------------------------------');
        console.log('(c) SoftUni');
    }
    printReceipHeader();
    printReceipBody();
    printReceipFooter();
}
printReceip();