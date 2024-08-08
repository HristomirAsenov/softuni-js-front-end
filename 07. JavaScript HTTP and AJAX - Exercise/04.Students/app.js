function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/collections/students";

  const [
    firstNameInputElement,
    lastNameInputElement,
    facultyNumberInputElement,
    gradeInputElement,
  ] = document.querySelectorAll(".inputs input[type='text']");

  const tableBodyElement = document.querySelector("#results tbody");
  const submitButtonElement = document.querySelector("#submit");

  async function customFetch(url, options) {
    return fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.message);
        }
        return res.json();
      })
      .then((data) => ({ data, error: null }))
      .catch((error) => ({ data: null, error }));
  }

  function appendStudents(students) {
    tableBodyElement.innerHTML = "";
    students.forEach((student) => {
      const trElement = document.createElement("tr");

      Object.keys(student)
        .filter((key) => key !== "_id")
        .forEach((key) => {
          const tdElement = document.createElement("td");
          tdElement.textContent = student[key];

          trElement.appendChild(tdElement);
        });

      tableBodyElement.appendChild(trElement);
    });
  }

  function fetchAllStudents() {
    customFetch(BASE_URL).then(({ data, error }) => {
      if (error) {
        return;
      }

      appendStudents(Object.values(data));
    });
  }

  function createStudentHandler() {
    const { value: firstName } = firstNameInputElement;
    const { value: lastName } = lastNameInputElement;
    const { value: facultyNumber } = facultyNumberInputElement;
    const { value: grade } = gradeInputElement;

    if (!firstName || !lastName || !facultyNumber || !grade) {
      return;
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        facultyNumber,
        grade
      })
    }

    customFetch(BASE_URL, options).then(({ error }) => {

      firstNameInputElement.value = "";
      lastNameInputElement.value = "";
      facultyNumberInputElement.value = "";
      gradeInputElement.value = "";

      if (error) {
        return;
      }

      fetchAllStudents();
    })
  }

  submitButtonElement.addEventListener("click", createStudentHandler);

  // initial load
  fetchAllStudents();
}

attachEvents();
