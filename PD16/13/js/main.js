function getType(argument) {
    return typeof argument;
}

// Example usage of the function
function displayType() {
    var input = document.getElementById('input').value; // Get the input value
    var type = getType(input); // Call the getType function to get the type
    document.getElementById('result').textContent = "The type of the input is: " + type; // Display the result
    return false; // Prevent form submission
}