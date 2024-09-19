function calcAvgNum(num1, num2, num3){
    return (num1 + num2 + num3) / 3
}
const args = process.argv.slice(2);
if (args.length < 3){
    console.log("Please provide 3 args")
}else{
    const num1 = parseFloat(args[0]);
    const num2 = parseFloat(args[1]);
    const num3 = parseFloat(args[2]);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
        console.log("All arguments must be numbers.")
    }else{
        const avg = calcAvgNum(num1, num2, num3);
            console.log(
              `The average of ${num1}, ${num2}, and ${num3} is: ${avg.toFixed(2)}`
            );


    }


    
}
