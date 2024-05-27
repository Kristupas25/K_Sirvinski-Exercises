function getRandomElements(arr, count) {
    const shuffled = arr.slice();
    shuffleArray(shuffled);
    return shuffled.slice(0, count);
}

// Example usage:
console.log(getRandomElements([1, 2, 3, 4, 5], 3)); // Random 3 elements
