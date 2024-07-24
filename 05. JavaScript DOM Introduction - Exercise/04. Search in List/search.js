function search() {
  const townEls = document.querySelectorAll("#towns li");

  function getMatchElements(input) {
    return [...townEls].filter((x) =>
      x.textContent.toLowerCase().includes(input.toLowerCase())
    );
  }

  function clearPreviousState() {
    townEls.forEach((el) => {
      el.style.fontWeight = "normal";
      el.style.textDecoration = "none";
    });
  }

  // clear previous matches
  clearPreviousState();

  const [inputEl] = document.getElementsByTagName("input");

  const matchElements = getMatchElements(inputEl.value);

  matchElements.forEach((matchEl) => {
    matchEl.style.fontWeight = "bold";
    matchEl.style.textDecoration = "underline";
  });

  document.querySelector(
    "div#result"
  ).textContent = `${matchElements.length} matches found`;
}
