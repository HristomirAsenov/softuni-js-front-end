((input) => {
  const [mysteriousSpell, ...commands] = input;

  const spell = commands.reduce((currentSpell, currentCommand) => {
    if (currentCommand === "RemoveEven") {
      const result = currentSpell
        .split("")
        .filter((_, index) => index % 2 === 0)
        .join("");
      console.log(result);
      return result;
    }

    if (currentCommand.startsWith("TakePart!")) {
      const [, from, to] = currentCommand.split("!");
      const result = currentSpell.slice(Number(from), Number(to)); // CHECK THIS IF NOT 100%
      console.log(result);
      return result;
    }

    if (currentCommand.startsWith("Reverse!")) {
      const [, substring] = currentCommand.split("!");

      if (!currentSpell.includes(substring)) {
        console.log("Error");
        return currentSpell;
      }

      const reversedValue = substring.split("").reverse().join("");
      const result = currentSpell.replace(substring, "").concat(reversedValue);
      console.log(result);
      return result;
    }

    return currentSpell;
  }, mysteriousSpell);

  console.log("The concealed spell is:", spell);

})(["asAsl2adkda2mdaczsa", "RemoveEven", "TakePart!1!9", "Reverse!maz", "End"]);