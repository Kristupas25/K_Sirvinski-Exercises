 // JavaScript function to filter array elements greater than a given number
 function filterGreaterThan(arr, number) {
    return arr.filter(function(element) {
        return element > number;
    });
}

// Example usage of the function
function displayFilteredArray() {
    var arrayInput = document.getElementById('array').value; // Get the array input value
    var number = parseInt(document.getElementById('number').value); // Get the number input value
    var array = arrayInput.split(',').map(Number); // Convert the input string to an array of numbers
    var filteredArray = filterGreaterThan(array, number); // Call the function

    // Display the result
    document.getElementById('result').textContent = "Filtered Array: [" + filteredArray.join(', ') + "]";

    return false; // Prevent form submission
}