function changeTheme() {
  let body = document.querySelector("body");

  body.classList.toggle("dark");
}

function bookLesson() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");

  name = name.trim();

  alert(`Yay, ${name} your lesson is booked 🐴`);
}

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener("click", changeTheme);

let LearnToRideButton = document.querySelector("#learn-button");
LearnToRideButton.addEventListener("click", bookLesson);
