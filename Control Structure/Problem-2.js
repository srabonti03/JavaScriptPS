//Use a switch statement to print the grade ("A", "B", "C", etc.) based on a numerical score input.

let score = 95;
switch (true) {
  case score >= 90:
    console.log("grade A");
    break;
  case score >= 80:
    console.log("grade B");
    break;
  case score >= 70:
    console.log("grade C");
    break;
  default:
    console.log("grade F");
}
