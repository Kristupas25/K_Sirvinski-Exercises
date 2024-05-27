function arrayDifference(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x));
}

// Example usage:
console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // [1]
