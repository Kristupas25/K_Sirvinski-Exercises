// JavaScript function to find the second smallest and second largest numbers in an array
function findSecondSmallestAndLargest(numbers) {
    if (numbers.length < 2) {
        return { secondSmallest: null, secondLargest: null }; // Return nulls if the array is too small
    }

    // Remove duplicates and sort the array
    let uniqueNumbers = [...new Set(numbers)].sort((a, b) => a - b);

    if (uniqueNumbers.length < 2) {
        return { secondSmallest: null, secondLargest: null }; // Return nulls if there are not enough unique values
    }

    let secondSmallest = uniqueNumbers[1];
    let secondLargest = uniqueNumbers[uniqueNumbers.length - 2];

    return { secondSmallest, secondLargest };
}

// Example usage of the function
function displayResults() {
    var input = document.getElementById('numbers').value; // Get the input value
    var numbers = input.split(',').map(Number); // Convert the input string to an array of numbers
    var result = findSecondSmallestAndLargest(numbers); // Call the function

    // Display the result
    document.getElementById('result').textContent = "Second Smallest: " + result.secondSmallest + ", Second Largest: " + result.secondLargest;

    return false; // Prevent form submission
}