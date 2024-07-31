function lockedProfile() {
  const buttonElements = document.querySelectorAll("div.profile button");

  function shoreMoreClickHandler(event) {
    const button = event.target;
    const [, unlockInputEl] = button.parentElement.querySelectorAll("input");

    if (!unlockInputEl.checked) {
      return;
    }

    const hiddenDataEl = button.parentElement.querySelector("div");

    if (button.textContent === "Show more") {
      hiddenDataEl.style.display = "block";
      button.textContent = "Hide it";
    } else {
      hiddenDataEl.style.display = "none";
      button.textContent = "Show more";
    }
  }

  buttonElements.forEach((buttonElement) =>
    buttonElement.addEventListener("click", shoreMoreClickHandler)
  );
}
