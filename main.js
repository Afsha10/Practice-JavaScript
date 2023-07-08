let grade = prompt("Please enter your grade 0-100") 

if (grade > 100) {
  alert("Your grade is not valid.");
} else if (grade >= 90) {
  alert("Your grade is A.");
} else if (grade >= 80) {
  alert("Your grade is B.");
} else if (grade >= 70) {
  alert("Your grade is C.");
} else if (grade >= 60) {
  alert("Your grade is D.");
} else if (grade >= 0) {
  alert("Your grade is F.");
} else {
  alert("Your grade is not valid.");
}