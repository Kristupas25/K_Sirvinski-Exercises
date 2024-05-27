function thirdSmallest(arr) {
    if (arr.length < 3) {
        return null;
    }
    const sortedArr = arr.slice().sort((a, b) => a - b);
    return sortedArr[2];
}

// Example usage:
console.log(thirdSmallest([5, 1, 3, 2, 4])); // 3
