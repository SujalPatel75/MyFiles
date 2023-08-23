import { userdetails } from "https://cdn.jsdelivr.net/gh/SujalPatel75/MyFiles@main/js/SUJALPATEL_INTERNSHIP_userJS_230823.js";

document.addEventListener("DOMContentLoaded", function() {
    const myfun = (val) => "Sujal " + val;
    document.getElementById("p1").textContent = myfun("Patel");

    const randomJson =
        '{"students":[{"name":"Shyam","surname":"Lel"},{"name":"Sujal","surname":"patel"}]}';
    const obj = JSON.parse(randomJson);
    document.getElementById("p2").textContent =
        obj.students[0].name + " " + obj.students[1].surname;

    class Subject {
        constructor(subname, sem) {
            this.subname = subname;
            this.sem = sem;
        }
    }

    const sub1 = new Subject("DSA", "Sem -2");
    const sub2 = new Subject("OOP", "Sem -3");

    const p3Element = document.getElementById("p3");
    const buttonElement = document.querySelector(".btn-primary");

    p3Element.textContent = sub2.subname + " " + sub1.sem;

    function updateContent() {
        p3Element.textContent = sub1.subname + " " + sub2.sem;
        buttonElement.style.display = "none";
    }

    buttonElement.addEventListener("click", updateContent);
    document.getElementById("p4").textContent = userdetails();

});