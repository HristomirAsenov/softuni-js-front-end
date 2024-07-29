function solve() {
  const toEl = document.getElementById("selectMenuTo");

  toEl.innerHTML += `
        <option value="binary">
            Binary
        </option>
        <option value="hexadecimal">
            Hexadecimal
        </option>
        `;

  document.querySelector("button").addEventListener("click", () => {
    const inputEl = document.getElementById("input");

    const base = {
      binary: 2,
      hexadecimal: 16,
    };

    document.getElementById("result").value = Number(inputEl.value)
      .toString(base[toEl.value.toLowerCase()])
      .toUpperCase();
  });
}
