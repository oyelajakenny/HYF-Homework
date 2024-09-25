function calcAvgNum(num) {
  if (num.length === 0) return 0;
  const sum = num.reduce((acc, num) => acc + num, 0);
  return sum / num.length;
}

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Please provide at least one number");
} else {
  const num = args.map((arg) => parseFloat(arg));

  if (num.some(isNaN)) {
    console.log("All arguments must be valid numbers.");
  } else {
    const average = calcAvgNum(num);
    console.log(`The average of [${num.join(", ")}] is: ${average.toFixed(2)}`);
  }
}
