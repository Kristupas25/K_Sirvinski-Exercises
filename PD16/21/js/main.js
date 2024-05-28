function processArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

// Example callback function to square a number
function square(num) {
    return num * num;
}

// Example usage of the processArray function with a callback
function displayProcessedArray() {
    var arrayInput = document.getElementById('array').value; // Get the array input value
    var array = arrayInput.split(',').map(Number); // Convert the input string to an array of numbers
    var processedArray = processArray(array, square); // Call the processArray function with the square callback

    // Display the result
    document.getElementById('result').textContent = "Processed Array: [" + processedArray.join(', ') + "]";

    return false; // Prevent form submission
}