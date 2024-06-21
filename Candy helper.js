const boughtCandyPrices =[];
const CANDY_PRICE = {
    "sweet": 0.5,
    "chocolate": 0.7,
    "toffee": 1.1,
    "chewing-gum": 0.03
};
function addCandy(candyType, weight){
    const pricePerGram = CANDY_PRICE[candyType];
    if(pricePerGram){
        const totalPrice = pricePerGram * weight;
        boughtCandyPrices.push(totalPrice);
    }else{
        console.log("Invalid candy type");
    }
}
const amountToSpend = Math.random() * 100;
function canBuyMoreCandy(){
    let totalPrice = 0;
    for(let i = 0; i < boughtCandyPrices.length; i++){
        totalPrice += boughtCandyPrices[i];
    }
    return totalPrice < amountToSpend;
}

if (canBuyMoreCandy()){
    console.log("You can buy more, so please do!");
}else{
    console.log("Enough candy for you!");
}

addCandy("sweet", 20);     
addCandy("chocolate", 30);
