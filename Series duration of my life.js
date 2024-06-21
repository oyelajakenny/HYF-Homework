const seriesDurations = [
  {
    title: "Prison Break",
    days: 35,
    hours: 30,
    minutes: 0,
  },
  {
    title: "Lost",
    days: 18,
    hours: 15,
    minutes: 0,
  },
  {
    title: "24",
    days: 30,
    hours: 25,
    minutes: 0,
  },
];

function calPercentageOfLife(seriesDurations){
 const averageLifespanYears = 80;
 const minutesInHour = 60;
 const minutesInADay = 24 * minutesInHour;
 const minutesInAYear = 365 * minutesInADay;
 const totalLifespanInMinutes = averageLifespanYears * minutesInAYear;
 let totalPercentage = 0

 seriesDurations.forEach(series => {
  const totalMinutes = (series.days * minutesInADay) + (series.hours * minutesInHour) + series.minutes;

  const percentageOfLife = (totalMinutes / totalLifespanInMinutes) * 100;
  totalPercentage += percentageOfLife;

  console.log(`${series.title} took ${percentageOfLife.toFixed(3)}% of my life`)
 
 });
 console.log(`In total that is ${totalPercentage.toFixed(2)}% of my life`);
}

calPercentageOfLife(seriesDurations);
