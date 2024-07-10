function printCharactersInRange(firstCharacter, secondCharacter) {

  function getCharCodeFromCharacters(stringOne, stringTwo) {
    const firstCharCode = stringOne.charCodeAt(0);
    const secondCharCode = stringTwo.charCodeAt(0);

    return [firstCharCode, secondCharCode];
  }

  function getCharactersInRange (firstCharCode, secondCharCode) {
    const arrayLength = Math.abs(firstCharCode - secondCharCode);
    const minNumber = Math.min(firstCharCode, secondCharCode) + 1;

    const characters = new Array(arrayLength - 1).fill(0).map((_, i) => String.fromCharCode(minNumber + i));

    return characters;
  }

  const [firstCharCode, secondCharCode] = getCharCodeFromCharacters(
    firstCharacter,
    secondCharacter
  );

  const characters = getCharactersInRange(firstCharCode, secondCharCode);
  console.log(characters.join(" "));
}

// printCharactersInRange("a", "d");
// printCharactersInRange("#", ":");
printCharactersInRange("C", "#");
