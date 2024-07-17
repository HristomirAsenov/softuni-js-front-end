function storeTowns(input) {
  const towns = input.reduce((acc, cur) => {
    const [town, latitude, longitude] = cur.split(" | ");
    acc.push({
      town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    });

    return acc;
  }, []);

  towns.forEach((town) => {
    console.log(town);
  });
}
