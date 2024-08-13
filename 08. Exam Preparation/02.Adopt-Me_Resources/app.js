window.addEventListener("load", solve);

function solve() {
  const adoptButtonElement = document.getElementById("adopt-btn");

  const typeInputElement = document.getElementById("type");
  const ageInputElement = document.getElementById("age");
  const genderInputElement = document.getElementById("gender");

  const adoptionInfoListElement = document.getElementById("adoption-info");
  const adoptedListElement = document.getElementById("adopted-list");

  function clearInputFields() {
    typeInputElement.value = "";
    ageInputElement.value = "";
    genderInputElement.value = "";
  }

  function createArticleElement() {
    const articleElement = document.createElement("article");

    const typeParagraphElement = document.createElement("p");
    typeParagraphElement.textContent = `Pet:${typeInputElement.value}`;
    articleElement.appendChild(typeParagraphElement);

    const genderParagraphElement = document.createElement("p");
    genderParagraphElement.textContent = `Gender:${genderInputElement.value}`;
    articleElement.appendChild(genderParagraphElement);

    const ageParagraphElement = document.createElement("p");
    ageParagraphElement.textContent = `Age:${ageInputElement.value}`;
    articleElement.appendChild(ageParagraphElement);

    return articleElement;
  }

  function createButtonElements() {
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons");

    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit";
    buttonsContainer.appendChild(editButton);

    const doneButton = document.createElement("button");
    doneButton.classList.add("done-btn");
    doneButton.textContent = "Done";
    buttonsContainer.appendChild(doneButton);

    return {
      buttonsContainer,
      editButton,
      doneButton,
    };
  }

  function createClearButton(liElement) {
    const clearButton = document.createElement("button");
    clearButton.classList.add("clear-btn");
    clearButton.textContent = "Clear";
    clearButton.addEventListener("click", () => liElement.remove());

    return clearButton;
  }

  function createAnimalListItem() {
    const liElement = document.createElement("li");
    const articleElement = createArticleElement();
    const { buttonsContainer, doneButton, editButton } = createButtonElements();

    editButton.addEventListener("click", () => {
      liElement.remove();

      const [, type] = liElement.querySelector("p:nth-child(1)").textContent.split(":");
      const [, gender] = liElement.querySelector("p:nth-child(2)").textContent.split(":");
      const [, age] = liElement.querySelector("p:nth-child(3)").textContent.split(":");

      typeInputElement.value = type;
      genderInputElement.value = gender;
      ageInputElement.value = age;
    });

    doneButton.addEventListener("click", () => {
      liElement.remove();
      buttonsContainer.remove();

      const clearButton = createClearButton(liElement);
      liElement.appendChild(clearButton);

      adoptedListElement.appendChild(liElement);
    });

    liElement.appendChild(articleElement);
    liElement.appendChild(buttonsContainer);

    adoptionInfoListElement.appendChild(liElement);
    clearInputFields();
  }

  function onAdoptClickHandler(event) {
    event.preventDefault();
    createAnimalListItem();
  }

  adoptButtonElement.addEventListener("click", onAdoptClickHandler);
}
