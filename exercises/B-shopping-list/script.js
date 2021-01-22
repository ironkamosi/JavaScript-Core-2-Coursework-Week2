function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.querySelector("#content")
  let foodContainer = document.createElement("ul");

  shopping.map(element => {
    let foodItem = document.createElement("li");
    foodItem.innerText = element;
    foodContainer.appendChild(foodItem);
  })
  content.appendChild(foodContainer);
  }



let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);

/***
 function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  
  people.map(function (person) {
    let personVar = document.createElement("h1");
    let job = document.createElement("h2");

    personVar.innerText = person.name;
    job.innerText = person.job;
    
    content.appendChild(personVar)
    content.appendChild(job)

    
    console.log(person.name);
    console.log(person.job);
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);



 */