function beehiveRole(inteligence,strenght,genre) {
    inteligence = Number(inteligence);
    strenght = Number(strenght);
    let result = '';

    if (inteligence >= 80 && strenght >= 80 && genre === 'female') {
        result = 'Queen Bee';
    } else if (inteligence >= 80) {
        result = 'Repairing Bee';
    } else if (inteligence >= 60) {
        result = 'Cleaning Bee';
    } else if (strenght >= 80 && genre === 'male') {
        result = 'Drone Bee';
    } else if (strenght >= 60) {
        result = 'Guard Bee';
    } else {
        result = 'Worker Bee';
    }
    console.log(result);
    
}
beehiveRole(82,81,'female')