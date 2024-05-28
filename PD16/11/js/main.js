function findLongestWord() {
    var sentence = document.getElementById('sentence').value; // Get the input sentence
    var words = sentence.split(' '); // Split the sentence into words
    var longestWord = '';

    for (var word of words) {
        if (word.length > longestWord.length) {
            longestWord = word; // Update if the current word is longer
        }
    }

    document.getElementById('result').textContent = "The longest word is: " + longestWord; // Display the longest word
    return false; // Prevent form submission
}