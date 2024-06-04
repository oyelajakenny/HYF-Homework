/*Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. 
The garden size is 100m2. The house costs 2.500.000.*/

//Peter's House Cost

const peterHouseWidth = 8;
const peterHouseDepth = 10;
const peterHouseHeight = 10;
const peterGardenSizeInM2 = 100;
const realHouseCost = 2500000;

const volumeInMeters = houseWidth * houseDepth * houseHeight;
const estimatedPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (estimatedPrice > realHouseCost) {
  console.log(
    `The house is too expensive! The price is ${estimatedPrice - realHouseCost} more than the house cost of ${realHouseCost}.`
  );
}else {
  console.log(
    `The house is cheap! The price is ${realHouseCost - estimatedPrice} less than the house cost ${realHouseCost}.`
  );
}


/*Julia is considering a house that is 5m wide, 11m deep and 8m high. 
The garden size is 70m2. This house costs 1.000.000..*/
//Julia's House

const juliaHouseWidth = 5;
const juliaHouseDepth = 11;
const juliaHouseHeight = 8;
const juliaGardenSizeInM2 = 70;
const juliaHouseCost = 1000000;

let juliaVolumeInMeters = juliaHouseWidth * juliaHouseDepth * juliaHouseHeight;
let juliaHousePrice = juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSizeInM2 * 300;

if (juliaHousePrice > juliaHouseCost) {
  console.log(
    `Julia's house is too expensive! The price is ${juliaHousePrice - juliaHouseCost} more than the house cost of ${juliaHouseCost}.`
  );
} else {
  console.log(
    `Julia's house is cheap! The price is ${juliaHouseCost - juliaHousePrice} less than the house cost of ${juliaHouseCost}.`
  );
}


