function fruits(fruit, weightInGrams, pricePerKg) {
  const weightInKg = weightInGrams / 1000;
  const totalSum = weightInKg * pricePerKg;
  console.log(
    `I need $${totalSum.toFixed(2)} to buy ${weightInKg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

// fruits(); call me (and don't forget the parameters :)
