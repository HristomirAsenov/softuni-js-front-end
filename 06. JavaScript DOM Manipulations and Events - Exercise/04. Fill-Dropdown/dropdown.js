function addItem() {
  const [textInputEl, valueInputEl] = document.querySelectorAll("input");

  function createOptionElement(text, value) {
    const option = document.createElement("option");
    option.textContent = text;
    option.value = value;

    return option;
  }

  function clearInputs() {
    textInputEl.value = "";
    valueInputEl.value = "";
  }

  const optionEl = createOptionElement(textInputEl.value, valueInputEl.value);
  document.getElementById("menu").appendChild(optionEl);

  clearInputs();
}
