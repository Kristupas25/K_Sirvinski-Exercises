function guessTheNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    let attempts = 0;
    let guess;

    while (guess !== randomNumber) {
        guess = parseInt(prompt("Guess the number between 1 and 100: "), 10);
        attempts++;

        if (guess > randomNumber) {
            alert("Too high! Try again.");
        } else if (guess < randomNumber) {
            alert("Too low! Try again.");
        } else if (guess === randomNumber) {
            alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
        } else {
            alert("Please enter a valid number.");
        }
    }
}

// Start the game
guessTheNumber();
