function onTimeForExam(hourExam,minuteExam,hourArrive,minuteArrive) {
    hourExam = Number(hourExam);
    minuteExam = Number(minuteExam);
    hourArrive = Number(hourArrive);
    minuteArrive = Number(minuteArrive);
    let result = 'Late';
    let examTime = (hourExam * 60) + minuteExam;
    let arrivalTime = (hourArrive * 60) + minuteArrive;
    let totalMinutesDifferance = Math.abs(examTime - arrivalTime);
    let total = '';
    let hours = Math.floor(totalMinutesDifferance / 60);
    let minutes = (totalMinutesDifferance % 60);
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (examTime == arrivalTime) {
        result = 'On time';
        total = '';
    }
    else if (examTime > arrivalTime && totalMinutesDifferance <= 30 && minutes < 10) {
        result = 'On time';
        total = `${minutes % 10} minutes before the start`;
    } else if (examTime > arrivalTime && totalMinutesDifferance <= 30 && minutes >= 10) {
        result = 'On time';
        total = `${minutes} minutes before the start`;
    } else if (examTime > arrivalTime && totalMinutesDifferance < 60) {
        result = 'Early';
        total = `${minutes} minutes before the start`;
    } else if (examTime > arrivalTime && hours > 0) {
        result = 'Early';
        total = `${hours}:${minutes} hours before the start`;
    } 
    else if (examTime < arrivalTime && totalMinutesDifferance < 60 && minutes < 10) {
        total = `${minutes % 10} minutes after the start`;
    } else if (examTime < arrivalTime && totalMinutesDifferance < 60 && minutes >= 10) {
        total = `${minutes} minutes after the start`;
    } 
     else {
        total = `${hours}:${minutes} hours after the start`;
    }
    console.log(result);
    console.log(total);
}
onTimeForExam(16,20,16,29)