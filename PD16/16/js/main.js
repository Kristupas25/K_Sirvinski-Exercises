 // JavaScript function to check if a number is a perfect number
 function isPerfectNumber(number) {
    if (number <= 1) {
        return false; // Perfect numbers are greater than 1
    }

    let sum = 0;
    // Find all divisors and add them
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    return sum === number; // Check if the sum of divisors is equal to the number
}

// Example usage of the function
function checkNumber() {
    var input = parseInt(document.getElementById('number').value); // Get the input value
    var result = isPerfectNumber(input); // Call the function

    // Display the result
    document.getElementById('result').textContent = input + (result ? " is a perfect number." : " is not a perfect number.");

    return false; // Prevent form submission
}