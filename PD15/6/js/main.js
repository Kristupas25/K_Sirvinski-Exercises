function countOccurrences(arr, element) {
    return arr.filter(e => e === element).length;
}

// Example usage:
console.log(countOccurrences([1, 2, 3, 1, 4, 1], 1)); // 3
