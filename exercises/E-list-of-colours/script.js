function listOfColours(colours) {
  // Write your code here...
  let selectEl = document.createElement("select"); // select
  let paragraphEl = document.createElement("p"); // paragraph
  let divContainer = document.getElementById("content");
  divContainer.appendChild(selectEl);
  divContainer.appendChild(paragraphEl);
  for (let i = 0; i < colours.length; i++){
    selectEl.appendChild(addElement(colours[i]));

  }
  selectEl.addEventListener("change", function () {
    let paragraphEl = document.querySelector("p");
    paragraphEl.innerText = `You have selected: ${selectEl.value}`;
    paragraphEl.style.color = selectEl.value;
    console.log(selectEl.value)
  });
};

function addElement(element) {
  let optionEl = document.createElement("option"); // select
  optionEl.innerText = element;
 
  return optionEl;
  
};
const colours = ["red", "blue", "green", "yellow", "pink", "brown"];
listOfColours(colours);
