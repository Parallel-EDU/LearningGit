const classElement = document.getElementsByClassName("para");
console.log(classElement);

const Element = document.getElementsByTagName("body");
console.log(Element);

const querySelector = document.querySelector(".para");
console.log(querySelector);

const querySelectorAll = document.querySelectorAll("p.para");
console.log("QuerySelectorAll", querySelectorAll);

const ID = document.getElementById("heading");
console.log(ID);

ID.innerHTML = "<h1>Heading</h1>";
ID.innerText = "New text";
ID.setAttribute("class", "color");
console.log(ID.getAttribute("class"));

ID.style.backgroundColor = "black";

const newElement = document.createElement("div");
console.log(newElement);

const parentElement = document.getElementById("section");
parentElement.appendChild(newElement);

const childElement = document.getElementById("sectionDiv");
parentElement.removeChild(childElement);

function onClick() {
  parentElement.style.height = "100px";
  parentElement.style.backgroundColor = "Blue";
  ID.style.fontSize = "40px";
}


function onChange(event) {
    console.log(event.target.value);
}
