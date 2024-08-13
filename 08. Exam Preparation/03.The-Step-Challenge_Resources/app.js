const loadRecordsButtonElement = document.getElementById("load-records");
const recordsListElement = document.getElementById("list");
const baseListItemRecord = document.querySelector("#list .record:nth-child(1)");

const addRecordButtonElement = document.getElementById("add-record");
const editRecordButtonElement = document.getElementById("edit-record");

const nameInputElement = document.getElementById("p-name");
const stepsInputElement = document.getElementById("steps");
const caloriesInputElement = document.getElementById("calories");
const formElement = document.getElementById("form");

const BASE_URL = "http://localhost:3030/jsonstore/records";

const BASE_FETCH_OPTIONS = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

async function fetchData(URL, options) {
  return fetch(URL, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.text);
      }
      return response.json();
    })
    .then((data) => {
      return { data, error: null };
    })
    .catch((error) => {
      console.error(error);
      return { data: null, error };
    });
}

function loadRecordsHandler() {
  fetchData(BASE_URL, BASE_FETCH_OPTIONS).then(({ data, error }) => {
    if (error) {
      return;
    }

    const records = Object.values(data);

    recordsListElement.innerHTML = "";

    records.forEach((record) => {
      const { name, steps, calories, _id } = record;

      const clone = baseListItemRecord.cloneNode(true);

      clone.querySelector(".record p:nth-child(1)").textContent = name;
      clone.querySelector(".record p:nth-child(2)").textContent = steps;
      clone.querySelector(".record p:nth-child(3)").textContent = calories;

      const deleteButton = clone.querySelector(".record .delete-btn");
      const changeButton = clone.querySelector(".record .change-btn");

      deleteButton.addEventListener("click", () => {
        const deleteOptions = {
          ...BASE_FETCH_OPTIONS,
          method: "DELETE",
        };

        const deleteUrl = `${BASE_URL}/${_id}`;

        fetchData(deleteUrl, deleteOptions).then(({ error }) => {
          if (error) {
            return;
          }

          loadRecordsHandler();
        });
      });

      changeButton.addEventListener("click", () => {
        formElement.setAttribute("data-record-id", _id);

        nameInputElement.value = name;
        stepsInputElement.value = steps;
        caloriesInputElement.value = calories;

        addRecordButtonElement.setAttribute("disabled", "disabled");
        editRecordButtonElement.removeAttribute("disabled");
      });

      recordsListElement.appendChild(clone);
    });
  });
}

function createRecordHandler() {
  const { value: name } = nameInputElement;
  const { value: steps } = stepsInputElement;
  const { value: calories } = caloriesInputElement;

  if (!name || !steps || !calories) {
    return;
  }

  const options = {
    ...BASE_FETCH_OPTIONS,
    method: "POST",
    body: JSON.stringify({ name, steps, calories }),
  };

  nameInputElement.value = "";
  stepsInputElement.value = "";
  caloriesInputElement.value = "";

  fetchData(BASE_URL, options).then(({ error }) => {
    if (error) {
      return;
    }

    loadRecordsHandler();
  });
}

function editRecordHandler() {
  const _id = formElement.getAttribute("data-record-id");

  const { value: name } = nameInputElement;
  const { value: steps } = stepsInputElement;
  const { value: calories } = caloriesInputElement;

  const putUrl = `${BASE_URL}/${_id}`;

  const putOptions = {
    ...BASE_FETCH_OPTIONS,
    method: "PUT",
    body: JSON.stringify({ name, steps, calories, _id }),
  };

  nameInputElement.value = "";
  stepsInputElement.value = "";
  caloriesInputElement.value = "";

  fetchData(putUrl, putOptions).then(({ error }) => {
    if (error) {
      return;
    }

    loadRecordsHandler();

    formElement.removeAttribute("data-record-id");
    addRecordButtonElement.removeAttribute("disabled");
    editRecordButtonElement.setAttribute("disabled", "disabled");
  });
}

window.addEventListener("DOMContentLoaded", loadRecordsHandler);
loadRecordsButtonElement.addEventListener("click", loadRecordsHandler);
addRecordButtonElement.addEventListener("click", createRecordHandler);
editRecordButtonElement.addEventListener("click", editRecordHandler);
