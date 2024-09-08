//Write another function that takes an array of numbers and returns the largest number in the array.

function findMax(arr) {
    return Math.max(...arr);
}
    const findMaxArrow = arr => Math.max(...arr);
    console.log(findMax([1, 2, 3, 4, 5]));
    console.log(findMaxArrow([1, 2, 3, 4, 5]));