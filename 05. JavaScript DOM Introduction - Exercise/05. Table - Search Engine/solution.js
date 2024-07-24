function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  const searchFieldEl = document.getElementById("searchField");
  const tableRowEls = document.querySelectorAll("table.container tbody tr");

  function getMatchElements(input) {
    return [...tableRowEls].filter((rowEl) =>
      rowEl.textContent.toLocaleLowerCase().includes(input.toLowerCase())
    );
  }

  function clearPreviousState() {
    [...tableRowEls].forEach((rowEl) => {
      rowEl.classList.remove("select");
    });
  }

  function onClick() {
    clearPreviousState();

    getMatchElements(searchFieldEl.value).forEach((matchRow) => {
      matchRow.classList.add("select");
    });

    searchFieldEl.value = "";
  }
}

