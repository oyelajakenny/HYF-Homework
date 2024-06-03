//Startup name generator)
//Create a function that returns a random startup name


const firstWords = ["Juicy", "Golly", "Fwenzy", "Winky", "Sunny", "Breezy", "Slick", "Zippy", "Dizzy", "Dandy"];
const secondWords = ["Labs", "Studios", "Solutions", "Co", "Corp", "Industries", "Enterprises", "Tech", "Web", "Net"];
const randomNumber = Math.floor(Math.random() * 10) + 0;
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log(`The startup: "${startupName}" contains ${startupName.length} characters.`);