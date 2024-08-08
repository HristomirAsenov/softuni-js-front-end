function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/phonebook";

  const fetchOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  async function customFetch(url, options) {
    try {
      const data = await fetch(url, options).then((res) => res.json());
      return { data, error: null };
    } catch (error) {
      console.error(error);
      return { data: null, error };
    }
  }

  const phonebookElement = document.getElementById("phonebook");
  const loadButtonElement = document.getElementById("btnLoad");
  const createButtonElement = document.getElementById("btnCreate");

  const [personInputElement, phoneInputElement] =
    document.querySelectorAll("input");

  async function fetchAllContactsHandler() {
    const { data, error } = await customFetch(BASE_URL);

    if (error) {
      return;
    }

    const posts = Object.values(data);

    appendAllContactElements(posts);
  }

  async function deleteContactHandler(contact) {
    const { data, error } = await customFetch(`${BASE_URL}/${contact._id}`, {
      ...fetchOptions,
      method: "DELETE",
    });

    if (error) {
      return;
    }

    console.log(data);
    fetchAllContactsHandler();
  }

  function appendAllContactElements(posts) {
    phonebookElement.innerHTML = "";

    posts.forEach((contact) => {
      const { person, phone } = contact;

      const liElement = document.createElement("li");
      liElement.textContent = `${person}: ${phone}`;

      const deleteButtonElement = document.createElement("button");
      deleteButtonElement.textContent = "Delete";
      deleteButtonElement.addEventListener("click", (e) =>
        deleteContactHandler(contact, e)
      );

      liElement.appendChild(deleteButtonElement);
      phonebookElement.appendChild(liElement);
    });
  }

  async function createContactHandler() {
    const { value: phone } = phoneInputElement;
    const { value: person } = personInputElement;

    const { error } = await customFetch(BASE_URL, {
      ...fetchOptions,
      method: "POST",
      body: JSON.stringify({
        phone,
        person
      })
    });

    if (error) {
        return;
    }

    phoneInputElement.value = "";
    personInputElement.value = "";

    fetchAllContactsHandler();
  }

  loadButtonElement.addEventListener("click", fetchAllContactsHandler);
  createButtonElement.addEventListener("click", createContactHandler);

  fetchAllContactsHandler();
}

attachEvents();
