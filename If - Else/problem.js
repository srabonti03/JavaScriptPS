//Write a program that asks the user for their age and tells them whether they are a child (under 12), a teenager (13-19), an adult (20-64), or a senior (65 and older) using if-else if-else.

let age = 95;
if (age < 12) {
  console.log("Child");
} else if (age >= 13 && age <= 19) {
  console.log("Teenagar");
} else if (age >= 20 && age <= 64) {
  console.log("Adult");
} else {
  console.log("Senior");
}
