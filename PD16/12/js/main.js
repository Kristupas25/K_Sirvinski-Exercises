function checkPrime() {
    var number = parseInt(document.getElementById('number').value); // Get the entered number
    var isPrime = true;

    // Check if the number is less than 2
    if (number < 2) {
        isPrime = false;
    } else {
        // Loop to check if the number is divisible by any number other than 1 and itself
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    // Display the result
    var resultElement = document.getElementById('result');
    if (isPrime) {
        resultElement.textContent = number + " is a prime number.";
    } else {
        resultElement.textContent = number + " is not a prime number.";
    }

    return false; // Prevent form submission
}