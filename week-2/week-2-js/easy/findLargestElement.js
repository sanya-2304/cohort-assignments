/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    
    let maxi = numbers[0]; // Assume the first element is the largest

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxi) {
            maxi = numbers[i]; // Update largest if a larger element is found
        }
    }

    return maxi; 
}

module.exports = findLargestElement;