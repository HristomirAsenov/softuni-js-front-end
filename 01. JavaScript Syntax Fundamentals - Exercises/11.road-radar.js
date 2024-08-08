function roadRadar(speed, area) {
  function printResult(speed, areaLimit) {
    const speedingLimit = 20;
    const excessiveSpeedingLimit = 40;

    if (speed > areaLimit) {
      const difference = speed - areaLimit;
      let status = "";

      if (difference > excessiveSpeedingLimit) {
        status += "reckless driving";
      } else if (difference > speedingLimit) {
        status += "excessive speeding";
      } else {
        status += "speeding";
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${areaLimit} - ${status}`
      );
    } else {
      console.log(`Driving ${speed} km/h in a ${areaLimit} zone`);
    }
  }

  const motorwayLimit = 130;
  const interstateLimit = 90;
  const cityLimit = 50;
  const residentialLimit = 20;

  switch (area) {
    case "motorway":
      printResult(speed, motorwayLimit);
      break;

    case "interstate":
      printResult(speed, interstateLimit);
      break;

    case "city":
      printResult(speed, cityLimit);
      break;

    case "residential":
      printResult(speed, residentialLimit);
      break;
  }
}

// roadRadar(); call me (and don't forget the parameters :)