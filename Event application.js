// Event application
function getEventWeekday(eventDay) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const day = today.getDay();
    const eventWeekday = (day + eventDay) % 7;
    return daysOfWeek[eventWeekday];
}
console.log(getEventWeekday(9)); 
console.log(getEventWeekday(3)); 