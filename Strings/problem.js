//Write a program that takes a sentence as input and returns the number of vowels in the sentence.

let sentence = "I'm Srabonti Talukdar";
let vowels = sentence.toLowerCase().split("").filter(char => "aeiou".includes(char)).length;
console.log(`Number of vowels: ${vowels}`);
