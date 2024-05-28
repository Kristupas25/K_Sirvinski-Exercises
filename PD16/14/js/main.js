function generateMatrix(n) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
        matrix[i] = [];
        for (var j = 0; j < n; j++) {
            matrix[i][j] = i * n + j + 1; // Fill the matrix with consecutive numbers starting from 1
        }
    }
    return matrix;
}

// Example usage of the function
function displayMatrix() {
    var size = parseInt(document.getElementById('size').value); // Get the size of the matrix
    var matrix = generateMatrix(size); // Call the generateMatrix function
    var result = ''; // String to hold the matrix representation
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            result += matrix[i][j] + ' '; // Add each element of the matrix to the result string
        }
        result += '<br>'; // Add a line break after each row
    }
    document.getElementById('result').innerHTML = result; // Display the matrix
    return false; // Prevent form submission
}