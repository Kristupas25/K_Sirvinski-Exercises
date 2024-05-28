 // JavaScript function to find the longest country name in an array
 function findLongestCountryName(countries) {
    let longestName = '';

    for (let i = 0; i < countries.length; i++) {
        if (countries[i].length > longestName.length) {
            longestName = countries[i];
        }
    }

    return longestName;
}

// Example usage of the function
function displayLongestCountryName() {
    var input = document.getElementById('countries').value; // Get the input value
    var countries = input.split(','); // Convert the input string to an array of country names
    var longestCountryName = findLongestCountryName(countries); // Call the function

    // Display the result
    document.getElementById('result').textContent = "Longest Country Name: " + longestCountryName;

    return false; // Prevent form submission
}