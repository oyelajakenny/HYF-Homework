function weatherCondition(temperature) {
  if (temperature <= -7 ) {
    return 'Very Thick Clothes and a Winter Jacket';
  } else if (temperature <= 0 ) {
    return 'Wear Thick Clothes and a Winter Jacket';
  } else if (temperature <= 5) {
    return 'Wear a Winter Jacket and a Raincoat';
  } else if (temperature <= 10 ) {
  return 'Wear a Winter Jacket';
  }
  else {
    return 'Wear a Tshirt and Trousers';
  }
}
clothesToWear = weatherCondition(5);
console.log(clothesToWear);
