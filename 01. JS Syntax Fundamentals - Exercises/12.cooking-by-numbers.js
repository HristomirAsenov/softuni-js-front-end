function cookingByNumbers(number, ...operations) {
  let currentStateOfNumber = number;

  for (const operation of operations) {
    switch (operation) {
      case "chop":
        currentStateOfNumber /= 2;
        break;
      case "dice":
        currentStateOfNumber = Math.sqrt(currentStateOfNumber);
        break;

      case "spice":
        currentStateOfNumber += 1;
        break;

      case "bake":
        currentStateOfNumber *= 3;
        break;

      case "fillet":
        currentStateOfNumber *= 0.8;
        break;
    }
    console.log(parseFloat(currentStateOfNumber.toFixed(2)));
  }
}

// cookingByNumbers(); call me (and don't forget the parameters :)
