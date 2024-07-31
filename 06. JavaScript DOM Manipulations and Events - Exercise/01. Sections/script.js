// You will receive an array of strings.
// For each string, create a div with a paragraph with the string in it.
// Each paragraph is initially hidden (display:none).
// Add a click event listener to each div that displays the hidden paragraph.
// Finally, you should append all divs to the element with an id "content".

function create(words) {
   const contentDivEl = document.getElementById("content");

   function createWordStructure (word) {
      const pEl = document.createElement("p");
      const divEl = document.createElement("div");

      pEl.textContent = word;
      pEl.style.display = "none";

      divEl.appendChild(pEl);

      return divEl;
   }

   words.forEach((word) => {
      const divEl = createWordStructure(word);

      divEl.addEventListener("click", (event) => {
         event.target.querySelector("p").style.display = "block";
         // event.target.children[0].style.display = "block";
         // divEl.children[0].style.display = "block";
      });

      contentDivEl.appendChild(divEl);
   })
}
