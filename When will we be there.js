const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function travelDistance(travelInformation) {
  const { speed, destinationDistance } = travelInformation;
  const totalTimeInHours = destinationDistance / speed;
  const hours = Math.floor(totalTimeInHours);
  const minutes = Math.round((totalTimeInHours - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = travelDistance(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
