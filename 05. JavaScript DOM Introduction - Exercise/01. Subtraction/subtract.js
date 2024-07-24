function subtract() {
  const [firstInput, secondInput] =
    document.querySelectorAll('input[type="text"]');

  document.getElementById("result").textContent =
    Number(firstInput.value) - Number(secondInput.value);
}
