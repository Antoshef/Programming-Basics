function oldLibary(input) {
    let myBook = input.shift();
    let libarySize = input.shift();
    let search = 0;
    let result = '';
    while (libarySize > 0) {
        let currentBook = input.shift();
        libarySize--;
        if (myBook !== currentBook) {
            search++;
            result = `The book you search is not here!
You checked ${search} books.`;
        } else {
            result = `You checked ${search} books and found it.`
            break;
        }
    }
    console.log(result);
}
oldLibary(['Bourne',
    32,
    'True Story',
    'Forever',
    'More Space',
    'The Girl',
    'Spaceship',
    'Strongest',
    'Profit',
    'Tripple',
    'Stella',
    'The Matrix',
    'Bourne',
    ])