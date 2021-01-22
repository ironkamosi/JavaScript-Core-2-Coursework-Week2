// button to change background
let jumbotron = document.getElementsByClassName("jumbotron");

let blueButton = document.getElementById("blueBtn");
let orangeButton = document.getElementById("orangeBtn");
let greenButton = document.getElementById("greenBtn");

// form button
let submitButton = document.querySelector("form button");

function changeJumbotronColour(colour) {
  let jumbotron = document.querySelector(".jumbotron");
  let donate = document.querySelector(".jumbotron .btn-primary");
  let volunteer = document.querySelector(".jumbotron .btn-secondary ");

  if (colour === "blue") {
    jumbotron.style.backgroundColor = "#588fbd";
    donate.style.backgroundColor = "#ffa500";
    volunteer.style.backgroundColor = "#000000"; // black
    volunteer.style.color = "#FFFFFF"; // white text
  } else if (colour === "orange") {
    jumbotron.style.backgroundColor = "#f0ad4e";
    donate.style.backgroundColor = "#5751fd";
    volunteer.style.backgroundColor = "#31b0d5";
    volunteer.style.color = "#FFFFFF";
  } else if (colour === "green") {
    jumbotron.style.backgroundColor = "#87ca8a";
    donate.style.backgroundColor = "#000000";
    volunteer.style.backgroundColor = "#8c9c08";
  }

  console.log(`button clicked: ${colour}`);
}

blueButton.addEventListener("click", function (e) {
  changeJumbotronColour("blue");
});

orangeButton.addEventListener("click", function (e) {
  changeJumbotronColour("orange");
});

greenButton.addEventListener("click", function (e) {
  changeJumbotronColour("green");
});

function formButton(event) {
  event.preventDefault();
  let emailField = document.querySelector("#exampleInputEmail1");
  let nameField = document.querySelector("#example-text-input");
  let describeField = document.querySelector("#exampleTextarea");
  console.log(nameField.value.length);

  if (!emailField.value.length > 0 || !emailField.value.includes("@")) {
    emailField.style.backgroundColor = "#ff0000";
  } else if (!nameField.value.length > 0) {
    nameField.style.backgroundColor = "#ff0000";
  } else if (!describeField.value.length > 0) {
    describeField.style.backgroundColor = "#ff0000";
  } else {
    alert("Thanks");
    nameField.value = "";
    emailField.value = "";
    describeField.value = "";
  }
}

submitButton.addEventListener("click", (event) => formButton(event));
