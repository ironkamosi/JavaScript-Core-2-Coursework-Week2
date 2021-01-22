function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.querySelector("#content");
  let foodContainer = document.createElement("ul");

  shopping.map((element) => {
    let foodItem = document.createElement("li");
    foodItem.innerText = element;
    foodContainer.appendChild(foodItem);
  });
  content.appendChild(foodContainer);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
