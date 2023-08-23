import { userdetails } from "https://cdn.jsdelivr.net/gh/SujalPatel75/MyFiles@main/js/SUJALPATEL_INTERNSHIP_userJS_230823.js";
document.addEventListener("DOMContentLoaded", function () {
  const mySujalFunction = (val) => "Sujal " + val;
  document.getElementById("sujalName").textContent = mySujalFunction("Patel");

  const sujalJsonString =
    '{"students":[{"name":"Shyam","surname":"Lel"},{"name":"Sujal","surname":"Patel"}]}';
  const sujalJsonObj = JSON.parse(sujalJsonString);
  document.getElementById("sujalJson").textContent =
    sujalJsonObj.students[0].name + " " + sujalJsonObj.students[1].surname;

  class SujalSubject {
    constructor(subname, sem) {
      this.subname = subname;
      this.sem = sem;
    }
  }

  const sujalSub1 = new SujalSubject("DSA", "Sem -2");
  const sujalSub2 = new SujalSubject("OOP", "Sem -3");

  const sujalSubjectElement = document.getElementById("sujalSubject");
  const sujalButtonElement = document.querySelector(".btn-primary");

  sujalSubjectElement.textContent = sujalSub2.subname + " " + sujalSub1.sem;

  function updateSujalContent() {
    sujalSubjectElement.textContent = sujalSub1.subname + " " + sujalSub2.sem;
    sujalButtonElement.style.display = "none";
  }

  document.getElementById("sujalDetails").textContent = sujalUserDetails();
});
