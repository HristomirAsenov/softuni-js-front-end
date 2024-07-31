function solve() {
  const sectionElements = document.querySelectorAll("section");

  const correctAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents",
  ];
  const userAnswers = [];

  function showUserResults() {
    const correctAnswersCount = userAnswers.reduce(
      (totalCount, currentAnswers, index) =>
        currentAnswers === correctAnswers[index]
          ? (totalCount += 1)
          : totalCount,
      0
    );

    const headingResultEl = document.querySelector("ul#results h1");

    headingResultEl.textContent =
      correctAnswersCount === correctAnswers.length
        ? `You are recognized as top JavaScript fan!`
        : `You have ${correctAnswersCount} right answers`;

    headingResultEl.parentElement.parentElement.style.display = "block";
  }

  function showNextSection() {
    const sectionToHide = sectionElements[userAnswers.length];
    const sectionToShow = sectionElements[userAnswers.length + 1];

    if (!!sectionToHide) {
      sectionToHide.style.display = "none";
    }

    if (!!sectionToShow) {
      sectionToShow.style.display = "block";
    }
  }

  function onClickHandler(event) {
    showNextSection();

    userAnswers.push(event.target.textContent.trim());

    if (userAnswers.length === correctAnswers.length) {
      showUserResults();
    }
  }

  document
    .querySelectorAll(".answer-wrap")
    .forEach((wrapEl) => wrapEl.addEventListener("click", onClickHandler));
}
