function solve() {
  const inputEl = document.getElementById("input");
  const outputEl = document.getElementById("output");

  const sentences = inputEl.value.split(".").filter(Boolean).map((x) => x.trim());

  for (let i = 0; i < sentences.length; i += 3) {
    const currentText = sentences.slice(i, i + 3).join(". ").concat(".");
    outputEl.innerHTML += `<p>${currentText}</p>`;
  }
}
