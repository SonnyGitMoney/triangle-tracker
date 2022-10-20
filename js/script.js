window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
  event.preventDefault();
  


const side1 = parseInt(document.querySelector("input#side1input").value);
const side2 = parseInt(document.querySelector("input#side2input").value);
const side3 = parseInt(document.querySelector("input#side3input").value);

//compare values with logic 

if (side1 === side2 && side2 === side3) {
  document.getElementById("equilateral").removeAttribute("class");
} else if(side1 === side2 || side2 === side3 || side3 === side1) {
  document.getElementById("isosceles").removeAttribute("class");
} else if(side1 !== side2 && side2 !== side3 && side3 !== side1) {
  document.getElementById("scalene").removeAttribute("class");
} else if(side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
  document.getElementById("not-triangle").removeAttribute("class");
}

}
}






//set values to traingles type
