   // JavaScript function to find the first non-repeating character in a string
   function findFirstNonRepeatingCharacter(str) {
    var charCount = {};

    // Count the occurrences of each character in the string
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character that appears only once
    for (var i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];
        }
    }

    return null; // Return null if there is no non-repeating character
}

// Example usage of the function
function displayFirstNonRepeatingCharacter() {
    var input = document.getElementById('input').value; // Get the input value
    var result = findFirstNonRepeatingCharacter(input); // Call the function

    // Display the result
    document.getElementById('result').textContent = result !== null 
        ? "First Non-Repeating Character: " + result 
        : "No non-repeating character found.";

    return false; // Prevent form submission
}