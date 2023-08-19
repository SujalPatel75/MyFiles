const subjects = ["OOP", "Engg.Maths", "DBMS", "DSA"];
const hobbies = ["Gaming", "Listening Retro Songs", "Playing Snooker"];
const groceryItems = ["Bread", "Milk", "Sugar", "Butter"];

document.getElementById("subjectsList").innerHTML = subjects
  .map((item) => `<li>${item}</li>`)
  .join("");
document.getElementById("hobbiesList").innerHTML = hobbies
  .map((item) => `<li>${item}</li>`)
  .join("");
document.getElementById("groceryList").innerHTML = groceryItems
  .map((item) => `<li>${item}</li>`)
  .join("");
