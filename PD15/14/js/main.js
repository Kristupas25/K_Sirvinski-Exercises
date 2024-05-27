function mergeAndRemoveDuplicates(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

// Example usage:
console.log(mergeAndRemoveDuplicates([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
