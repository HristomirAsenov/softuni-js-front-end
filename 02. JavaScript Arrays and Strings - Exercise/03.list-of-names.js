function listOfNames(arr) {
  const result = arr
    .slice()
    .sort((a, b) => a.localeCompare(b))
    .map((x, i) => `${i + 1}.${x}`)
    .join("\n");

  console.log(result);
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
