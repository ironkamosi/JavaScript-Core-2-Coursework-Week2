function todoList(todos) {
  let content = document.getElementById("content"); // div
  let ulContainer = document.createElement("ul"); // ul
  ulContainer.setAttribute("id", "todo"); // ul id name

  todos.forEach((element) => {
    let liElement = document.createElement("li"); // li
    liElement.setAttribute("class", "undone"); // li class
    liElement.innerText = element.todo;
    ulContainer.appendChild(liElement);
    liElement.style.listStyle = "none";
    liElement.addEventListener("click", function () {
      if (liElement.style.textDecoration === "none") {
        liElement.style.textDecoration = "line-through";
      } else {
        liElement.style.textDecoration = "none";
      }
    });
    console.log(liElement);
  });

  // Write your code here...
  content.appendChild(ulContainer);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
