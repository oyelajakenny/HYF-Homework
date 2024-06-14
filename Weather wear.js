function todaysWeather(temperature){
    if (temperature <= 0){
        return "Wear a heavy winter jacket, hat, gloves, and scarf.";
    }

    if (temperature <= 5){
        return "Wear a winter jacket, hat, and gloves.";
    }

    if (temperature <= 10){
        return "Wear a winter jacket.";
    }

    if (temperature <= 15){
        return "Wear a sweater shirt and a jean.";
    }
    if (temperature <= 20){
        return "Wear a long sleeve shirt and a jean.";
    }
    else{
        return "Wear a t-shirt and shorts.";
    }
}

const clothesToWear = todaysWeather(10);
console.log(clothesToWear); // Output: Wear a winter jacket.