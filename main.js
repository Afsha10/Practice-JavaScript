let colourList = [];

for (let i = 1; i <= 3; i++) {
  let colour = prompt("Please enter colour " + i + ": ")
  colourList.push(colour);
}

alert("Your list of colour is: " + colourList);