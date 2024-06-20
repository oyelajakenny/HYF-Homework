// Event application
function getEventWeekday(eventDay) {
    if (typeof eventDay !== 'number'){
        return console.log('Please enter a number');
    }
   if (eventDay < 0){
        return console.log('Event day must be greater than 0');
    }
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const day = today.getDay();
    const eventWeekday = (day + eventDay) % 7;
    return daysOfWeek[eventWeekday];
}
console.log(getEventWeekday(1)); 
console.log(getEventWeekday(-4)); 