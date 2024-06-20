function getEventDays(daysFromToday){
    const days = [
        'Sunday', 
        'Monday', 
        'Tuesday', 
        'Wednesday', 
        'Thursday', 
        'Friday', 
        'Saturday'
    ];
    const todaysDate = new Date();
    const todaysDay = todaysDate.getDay();
    let eventDays = (todaysDay + daysFromToday) % 7;
    return days[eventDays];
}
console.log(getEventDays(2));