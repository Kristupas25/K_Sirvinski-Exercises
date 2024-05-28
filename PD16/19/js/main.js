function bubbleSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage of the function
function displaySortedArray() {
    var arrayInput = document.getElementById('array').value; // Get the array input value
    var array = arrayInput.split(',').map(Number); // Convert the input string to an array of numbers
    var sortedArray = bubbleSort(array); // Call the bubbleSort function

    // Display the result
    document.getElementById('result').textContent = "Sorted Array: [" + sortedArray.join(', ') + "]";

    return false; // Prevent form submission
}