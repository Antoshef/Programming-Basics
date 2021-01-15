function building([floors,rooms]) {
    floors = Number(floors);
    rooms = Number(rooms);
    let result = '';
    for (let currentFloor = floors; currentFloor >= 0; currentFloor--) {
        if (currentFloor < floors) {
            console.log(result.trim());
            result = '';
        }
        for (let currentRoom = 0; currentRoom < rooms; currentRoom++) {
            if (currentFloor == floors) {
                result += `L${currentFloor}${currentRoom} `;
            }
            else if (currentFloor % 2 == 0) {
                result += `O${currentFloor}${currentRoom} `;
            } else {
                result += `A${currentFloor}${currentRoom} `;
            }
        }
    }
}
building([6,4])