

function answer(f,s,l) {
    const firstName = f;
    const secondName = s;
    const lastName = l;
    const result = names();

    function names(firstName,secondName,lastName) {
        const name = firstName + ' ' + lastName;
        const fullName = firstName + ' ' + secondName + ' ' + lastName;
        return [name,fullName];
    }
    console.log(result);
    
}
answer('Anton','Stanimirov','Stanev')